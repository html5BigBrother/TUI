import { resolve as pathResolve, dirname } from 'path'
import { exec } from 'child_process'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// 获取更新的pkg，返回pkgNames
const getUpdatedPkg = function() {
  return new Promise((resolve, reject) => {
    exec(`pnpm changeset status --output=./scripts/output.json`, {}, (error, stdout, stderr) => {

      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }

      const changesetJson = JSON.parse(fs.readFileSync(pathResolve(__dirname, 'output.json'), 'utf-8'))
      const pkgNames = changesetJson?.releases.map((item) => item.name)
      exec('rm -rf ./scripts/output.json')
      resolve(pkgNames)
    })
  })
}

// 根据传入的package name，批量打包
const multiplePack = (pkgNames) => {
  pkgNames?.forEach((pkgName) => {
    // 异步调用pnpm --filter,分别执行命中pkg的build方法
    exec(`pnpm --filter ${pkgName} run build`, {}, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      // console.log(`stderr: ${stderr}`);
    })
  })
}

// 消费changeset，发布npm包
const costAndPublish = () => {
  exec('pnpm changeset version && pnpm changeset publish', {}, (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(stdout);
    console.log(stderr);
  })
}

(async function start() {
  const pkgNames = await getUpdatedPkg()
  multiplePack(pkgNames)
  costAndPublish()
})()