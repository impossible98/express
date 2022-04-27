---
editLink: true
---

# 代理背后的 Express

在代理背后运行 Express 应用程序时，可使用 [app.set()](/4x/api.html#app.set) 将应用程序变量 `trust proxy` 设置为下表中所列的某个值。

::: info
尽管不设置应用程序变量 `trust proxy` 该应用程序也不会运行失败，但是它会误将代理的 IP 地址注册为客户机 IP 地址（除非配置了 `trust proxy`）。
:::

| 类型    | 值                                           |
| ----- | ------------------------------------------- |
| IP 地址 | 要信任的 IP 地址、子网或者一组 IP 地址与子网。以下列表显示预先配置的子网名称： |

设置非 `false` `trust proxy` 值会导致三个重大变化：

`trust proxy` 设置由使用 [proxy-addr](https://www.npmjs.com/package/proxy-addr) 包实现。有关更多信息，请参阅其文档。
