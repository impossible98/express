export default {
  lang: 'zh-CN',
  title: "Express",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "入门", link: "/starter/installing" },
      { text: "指南", link: "/guide/routing" },
      { text: "API 参考", link: "/4x/api" },
    ],
    sidebar: {
      "/starter/": [
        { text: "安装", link: "/starter/installing" },
        { text: "Hello world", link: "/starter/hello-world" },
        { text: "Express 生成器", link: "/starter/generator" },
        { text: "基本路由", link: "/starter/basic-routing" },
        { text: "静态文件", link: "/starter/static-files" },
        { text: "常见问题及解答", link: "/starter/faq" },
      ],
      "/guide/": [
        { text: "路由", link: "/guide/routing" },
        { text: "编写中间件", link: "/guide/writing-middleware" },
        { text: "使用中间件", link: "/guide/using-middleware" },
        { text: "使用模板引擎", link: "/guide/using-template-engines" },
        { text: "错误处理", link: "/guide/error-handling" },
        { text: "调试", link: "/guide/debugging" },
        { text: "代理背后的 Express", link: "/guide/behind-proxies" },
        { text: "迁移到 Express 4", link: "/guide/migrating-4" },
        { text: "迁移到 Express 5", link: "/guide/migrating-5" },
        { text: "数据库集成", link: "/guide/database-integration" },
      ],
      "/4x/": [
        { text: "4.x API", link: "/4x/api" },
        { text: "3.x API", link: "/3x/api" },
      ],
      "/3x/": [
        { text: "3.x API", link: "/3x/api" },
      ],
    },
  },
};
