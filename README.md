# 微信阅读网页版翻页优化

[![Install](https://img.shields.io/badge/Install-%E4%B8%80%E9%94%AE%E5%AE%89%E8%A3%85-2ea44f?style=for-the-badge)](https://cdn.jsdelivr.net/gh/java-walker/weread-web-optimizer@main/space-to-arrowright.user.js)
[![License](https://img.shields.io/badge/License-CC%20BY--NC%204.0-blue?style=for-the-badge)](./LICENSE)
[![Greasy Fork](https://img.shields.io/badge/Greasy%20Fork-%E6%9F%A5%E7%9C%8B-3c8a3e?style=for-the-badge)](https://greasyfork.org/en/scripts/592115-微信阅读网页版翻页优化)

一个 [Tampermonkey](https://www.tampermonkey.net/)（油猴）脚本，优化 **微信读书网页版**（weread.qq.com）的翻页操作，让你用更顺手的按键 / 滚轮翻页。

> 🟢 **一键安装**：点击上方绿色 `Install` 徽章，或在浏览器打开
> `https://cdn.jsdelivr.net/gh/java-walker/weread-web-optimizer@main/space-to-arrowright.user.js`
> 即可由 Tampermonkey 直接安装（需先在浏览器装好 Tampermonkey 扩展）。
>
> 🟩 **Greasy Fork 安装**：[在 Greasy Fork 查看并安装](https://greasyfork.org/en/scripts/592115-微信阅读网页版翻页优化)（可被搜索引擎收录，更易被发现，点页面上的 Install 即可）。

## 功能

- **空格键** → 模拟向右方向键，向后翻页
- **回车键**（主键盘 `Enter` 与 小键盘 `NumpadEnter` 均支持）→ 模拟向右方向键，向后翻页
- **鼠标滚轮向下滚** → 向后翻页
- **鼠标滚轮向上滚** → 向前翻页

## 适用站点

仅作用于 `https://weread.qq.com/` 及其子域名（含 `/web/reader/` 阅读器页面），其他网站不触发。

## 安装

**方式一（推荐，一键安装）：**
👉 点击这里安装 → [space-to-arrowright.user.js](https://cdn.jsdelivr.net/gh/java-walker/weread-web-optimizer@main/space-to-arrowright.user.js)

（链接指向 jsDelivr CDN 上的脚本，浏览器会自动交给 Tampermonkey 弹出安装确认框。国内可直接访问。）

**方式二（Greasy Fork，推荐给普通用户）：**
👉 [在 Greasy Fork 打开本脚本](https://greasyfork.org/en/scripts/592115-微信阅读网页版翻页优化)，点击页面上的 `Install` 按钮即可安装。Greasy Fork 会自动提示更新，且能被搜索引擎收录，别人更容易搜到。

**方式三（手动安装）：**
1. 安装浏览器扩展 Tampermonkey（Chrome / Edge / Firefox 均可）
2. 把仓库里的 `space-to-arrowright.user.js` 文件内容复制，新建到 Tampermonkey 中保存
3. 打开微信读书网页版即可生效

## 按键映射

| 操作 | 效果 |
|------|------|
| 空格 / 回车 / 小键盘回车 | 向后翻页（→） |
| 鼠标滚轮向下 | 向后翻页（→） |
| 鼠标滚轮向上 | 向前翻页（←） |

## 实现说明

- 在输入框 / 文本域中获得焦点时不会拦截按键，避免影响正常输入。
- 长按空格只触发一次，避免连续狂翻。
- 滚轮翻页做了 200ms 节流，防止一次滚动连翻多页（可在脚本中调整 `lastWheel` 阈值）。
- 代码已适配 ESLint（`no-multi-spaces` 等规则）。

## 许可证

[CC BY-NC 4.0](./LICENSE)（知识共享署名-非商业性使用 4.0）。

**本脚本禁止用于任何商业用途。** 你可以自由分享、修改本脚本，但必须：保留原作者署名、注明是否作出了修改、且不得用于商业目的。完整条款见 [LICENSE](./LICENSE) 文件。
