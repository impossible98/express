export default {
  title: "Express",
  themeConfig: {
    nav: [
      { text: "入门", link: "/starter/installing" },
      { text: "指南", link: "/guide/routing" },
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
        { text: "路由", link: "/guide/error-handling" },
        { text: "路由", link: "/guide/using-middleware" },
      ],
    },
  },
};
