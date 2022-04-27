---
editLink: true
---

# 代理背后的 Express

在代理背后运行 Express 应用程序时，可使用 [app.set()](/api/4x#app.set) 将应用程序变量 `trust proxy` 设置为下表中所列的某个值。

::: info
尽管不设置应用程序变量 `trust proxy` 该应用程序也不会运行失败，但是它会误将代理的 IP 地址注册为客户机 IP 地址（除非配置了 `trust proxy`）。
:::

<!-- TODO: -->

| 类型    | 值                                                                                                                                         |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 布尔    | 如果为 `true`，那么客户机的 IP 地址将用作 `X-Forwarded-*` 头中最左侧的条目。如果为 `false`，那么该应用程序将被视为直接面对因特网，而客户机的 IP 地址则派生自 `req.connection.remoteAddress`。这是缺省设置。 |
| IP 地址 | 要信任的 IP 地址、子网或者一组 IP 地址与子网。以下列表显示预先配置的子网名称：                                                                                               |
| 数字    | 信任来自正面代理服务器的第 `n` 个中继段，以此作为客户机。                                                                                                           |
| 函数    | 定制信任实现。仅当您知道自己要做什么时，方可使用该选项。                                                                                                              |

设置非 `false` `trust proxy` 值会导致三个重大变化：

- [req.hostname](/api/4x#req.hostname) 的值派生自 `X-Forwarded-Host` 头中设置的值（可以由客户机或代理设置此值）。
- `X-Forwarded-Proto` 可以由逆向代理设置，以告知应用程序：它是 `https` 还是 `http`，或者甚至是无效名称。该值由 [req.protocol](/api/4x#req.protocol) 反映。
- [req.ip](/api/4x#req.ip) 和 [req.ips](/api/4x#req.ips) 值由 `X-Forwarded-For` 的地址列表填充。

`trust proxy` 设置由使用 [proxy-addr](https://www.npmjs.com/package/proxy-addr) 包实现。有关更多信息，请参阅其文档。
