import { resolve as pathResolve, dirname } from 'path'
import { exec } from 'child_process'
import fs from 'fs'
import { fileURLToPath } from 'url'
import gulp from 'gulp'

const __dirname = dirname(fileURLToPath(import.meta.url))

// 获取更新的pkg，返回pkgNames
const getUpdatedPkg = function() {
  return new Promise((resolve, reject) => {
    exec(`pnpm changeset status --output=./gulpfile/output.json`, {}, (error, stdout, stderr) => {

      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }

      const changesetJson = JSON.parse(fs.readFileSync(pathResolve(__dirname, 'output.json'), 'utf-8'))
      const pkgNames = changesetJson?.releases.map((item) => item.name)
      exec('rm -rf ./gulpfile/output.json')
      resolve(pkgNames)
    })
  })
}

// 根据传入的package name，批量打包
const multiplePack = (pkgNames) => {
  console.log('pkgNames', pkgNames)
  const promiseAllList = []
  pkgNames?.forEach((pkgName) => {
    // 异步调用pnpm --filter,分别执行命中pkg的build方法
    const promiseAllItem = new Promise((resolve) => {
      exec(`pnpm --filter ${pkgName} run build`, {}, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        // console.log(`stderr: ${stderr}`);
        resolve(true)
      })
    })
    promiseAllList.push(promiseAllItem)
  })
  return Promise.all(promiseAllList)
}

// 打包更新的pkg
const packUpdatedPkg = async () => {
  const pkgNames = await getUpdatedPkg()
  await multiplePack(pkgNames)
}

// 消费changeset，发布npm包
const costAndPublish = (cb) => {
  exec('pnpm changeset version && pnpm changeset publish', {}, (error, stdout, stderr) => {
    if (error) {
      cb(error);
      return;
    }
    console.log(stdout);
    console.log(stderr);
    cb()
  })
}

// (async function start() {
//   const pkgNames = await getUpdatedPkg()
//   multiplePack(pkgNames)
//   costAndPublish()
// })()

export default gulp.series(packUpdatedPkg, costAndPublish)