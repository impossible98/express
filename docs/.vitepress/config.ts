import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "Express",
  lastUpdated: true,
  themeConfig: {
    nav: [
      {
        text: "文档",
        link: "/starter/installing",
        activeMatch: "^/starter/",
      },
      {
        text: "API 参考",
        link: "/4x/api",
        activeMatch: "^/4x/",
      },
    ],
    sidebar: {
      "/starter/": getStarterSidebar(),
      "/4x/": get4xSidebar(),
    },
  },
});

function getStarterSidebar() {
  return [
    {
      text: "入门",
      children: [
        { text: "安装", link: "/starter/installing" },
        { text: "Hello world", link: "/starter/hello-world" },
        { text: "Express 生成器", link: "/starter/generator" },
        { text: "基本路由", link: "/starter/basic-routing" },
        { text: "静态文件", link: "/starter/static-files" },
        { text: "常见问题及解答", link: "/starter/faq" },
      ],
    },
    {
      text: "指南",
      children: [
        { text: "路由", link: "/starter/routing" },
        { text: "编写中间件", link: "/starter/writing-middleware" },
        { text: "使用中间件", link: "/starter/using-middleware" },
        { text: "使用模板引擎", link: "/starter/using-template-engines" },
        { text: "错误处理", link: "/starter/error-handling" },
        { text: "调试", link: "/starter/debugging" },
        { text: "代理背后的 Express", link: "/starter/behind-proxies" },
        { text: "迁移到 Express 4", link: "/starter/migrating-4" },
        { text: "迁移到 Express 5", link: "/starter/migrating-5" },
        { text: "数据库集成", link: "/starter/database-integration" },
      ],
    },
  ];
}

function get4xSidebar() {
  return [
    {
      text: "4x",
      children: [
        { text: "4x", link: "/4x/api" },
      ],
    },
    {
      text: "3x",
      children: [
        { text: "3x", link: "/3x/api" },
      ],
    },
  ];
}
