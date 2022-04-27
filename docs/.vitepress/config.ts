import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "Express",
  lastUpdated: true,
  themeConfig: {
    nav: [
      {
        text: "文档",
        link: "/guide/installing",
        activeMatch: "^/guide/",
      },
      {
        text: "API 参考",
        link: "/api/4x",
        activeMatch: "^/api/",
      },
    ],
    sidebar: {
      "/guide/": getGuideSidebar(),
      "/api/": getApiSidebar(),
    },
  },
});

function getGuideSidebar() {
  return [
    {
      text: "入门",
      children: [
        { text: "安装", link: "/guide/installing" },
        { text: "Hello world", link: "/guide/hello-world" },
        { text: "Express 生成器", link: "/guide/generator" },
        { text: "基本路由", link: "/guide/basic-routing" },
        { text: "静态文件", link: "/guide/static-files" },
        { text: "常见问题及解答", link: "/guide/faq" },
      ],
    },
    {
      text: "指南",
      children: [
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
    },
  ];
}

function getApiSidebar() {
  return [
    { text: "4x", link: "/api/4x" },
    { text: "3x", link: "/api/3x" },
  ];
}
