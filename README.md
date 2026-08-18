# 微信阅读网页版翻页优化

一个 [Tampermonkey](https://www.tampermonkey.net/)（油猴）脚本，优化 **微信读书网页版**（weread.qq.com）的翻页操作，让你用更顺手的按键 / 滚轮翻页。

## 功能

- **空格键** → 模拟向右方向键，向后翻页
- **回车键**（主键盘 `Enter` 与 小键盘 `NumpadEnter` 均支持）→ 模拟向右方向键，向后翻页
- **鼠标滚轮向下滚** → 向后翻页
- **鼠标滚轮向上滚** → 向前翻页

## 适用站点

仅作用于 `https://weread.qq.com/` 及其子域名（含 `/web/reader/` 阅读器页面），其他网站不触发。

## 安装

1. 安装浏览器扩展 Tampermonkey（Chrome / Edge / Firefox 均可）
2. 点击安装脚本：
   [space-to-arrowright.user.js](https://github.com/java-walker/weread-web-optimizer/raw/main/space-to-arrowright.user.js)
   （或把仓库里的 `space-to-arrowright.user.js` 内容新建到 Tampermonkey 中保存）
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

[MIT](./LICENSE)
