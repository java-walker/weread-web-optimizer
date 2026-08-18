// ==UserScript==
// @name         微信阅读网页版翻页优化
// @namespace    https://github.com/java-walker/weread-web-optimizer
// @version      1.0.0
// @description  微信读书网页版翻页优化：空格键 / 回车键（含小键盘回车）模拟向右方向键向后翻页；鼠标滚轮向下滚向后翻页、向上滚向前翻页；仅在 weread.qq.com 生效，输入框内不拦截，已适配 ESLint。
// @author       阿深
// @match        https://weread.qq.com/*
// @match        https://*.weread.qq.com/*
// @run-at       document-start
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
    'use strict';

    // 是否已经“按下”了右键（用于同步空格的按下/松开状态）
    let rightPressed = false;

    // 判断焦点是否在可输入元素里——在这些地方空格是正常输入，不要拦截
    function isEditable(el) {
        if (!el) return false;
        const tag = (el.tagName || '').toUpperCase();
        return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable;
    }

    function isTrigger(e) {
        // 空格：Space；回车：主键盘 Enter 与 小键盘 NumpadEnter
        return e.code === 'Space' || e.key === ' ' || e.key === 'Spacebar' || e.keyCode === 32
            || e.code === 'Enter' || e.code === 'NumpadEnter' || e.key === 'Enter' || e.keyCode === 13;
    }

    // 派发一个方向键事件到目标元素（bubbles 会冒泡到 document/window）
    // dir: 'right' 向后翻页，'left' 向前翻页
    function fireArrow(type, target, dir) {
        dir = dir || 'right';
        const key = dir === 'left' ? 'ArrowLeft' : 'ArrowRight';
        const keyCode = dir === 'left' ? 37 : 39;
        const ev = new KeyboardEvent(type, {
            key: key,
            code: key,
            keyCode: keyCode,
            which: keyCode,
            bubbles: true,
            cancelable: true,
            view: window
        });
        (target || document.body).dispatchEvent(ev);
    }

    function fireArrowRight(type, target) {
        fireArrow(type, target, 'right');
    }

    function fireArrowLeft(type, target) {
        fireArrow(type, target, 'left');
    }

    document.addEventListener('keydown', function (e) {
        if (!isTrigger(e)) return;
        if (isEditable(e.target)) return; // 输入框里不拦截
        e.preventDefault(); // 阻止空格默认行为（页面滚动 / 触发按钮）
        if (e.repeat) return; // 长按空格只算一次，避免狂翻
        if (!rightPressed) {
            rightPressed = true;
            fireArrowRight('keydown', e.target);
        }
    }, true);

    document.addEventListener('keyup', function (e) {
        if (!isTrigger(e)) return;
        if (rightPressed) {
            rightPressed = false;
            const t = document.activeElement && !isEditable(document.activeElement)
                ? document.activeElement
                : document.body;
            fireArrowRight('keyup', t);
        }
    }, true);

    // 鼠标滚轮：向下滚 → 向后翻页（右键），向上滚 → 向前翻页（左键）
    let lastWheel = 0;
    document.addEventListener('wheel', function (e) {
        if (isEditable(e.target)) return;
        const now = Date.now();
        if (now - lastWheel < 200) return; // 节流，避免一次滚动连翻多页
        lastWheel = now;
        e.preventDefault(); // 接管默认滚动行为
        const dir = e.deltaY > 0 ? 'right' : 'left';
        fireArrow('keydown', e.target, dir);
        fireArrow('keyup', e.target, dir);
    }, { capture: true, passive: false });
})();
