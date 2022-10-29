import nav from './nav.js'
import sidebar from './sidebar.js'
export default {
  siteTitle: "TUI - turboUI",
  logo: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.tukuppt.com%2Fpng_preview%2F00%2F36%2F04%2F7j2xVDFzLf.jpg%21%2Ffw%2F780&refer=http%3A%2F%2Fimg.tukuppt.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669619412&t=fbef4333e7ce52ec6e4fb3e3f49ba3d0",
  nav,
  sidebar,
  outlineTitle: "follow me",
  lastUpdatedText: "Updated Date",
  editLink: {
    pattern: "https://github.com/html5BigBrother/TUI/tree/master/docs/:path",
    text: "点击编辑此页面",
  },
  // 右上角社区链接
  socialLinks: [
    { icon: "github", link: "https://github.com/html5BigBrother/TUI" },
  ],
  // 搜索框
  algolia: {
    appId: 'K0NNJA38K6',
    apiKey: '0b6d20552d2073390d2bbb0a84fb49dd',
    indexName: 'TUI'
  },
};
