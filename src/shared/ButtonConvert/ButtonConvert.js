"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonConvert = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var antd_1 = require("antd");
var antd_style_1 = require("antd-style");
var useStyle = (0, antd_style_1.createStyles)(function (_a) {
    var prefixCls = _a.prefixCls, css = _a.css;
    return ({
        linearGradientButton: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    &.", "-btn-primary:not([disabled]):not(.", "-btn-dangerous) {\n      border-width: 0;\n\n      > span {\n        position: relative;\n      }\n\n      &::before {\n        content: '';\n        background: linear-gradient(135deg, #6253e1, #04befe);\n        position: absolute;\n        inset: 0;\n        opacity: 1;\n        transition: all 0.3s;\n        border-radius: inherit;\n      }\n\n      &:hover::before {\n        opacity: 0;\n      }\n    }\n  "], ["\n    &.", "-btn-primary:not([disabled]):not(.", "-btn-dangerous) {\n      border-width: 0;\n\n      > span {\n        position: relative;\n      }\n\n      &::before {\n        content: '';\n        background: linear-gradient(135deg, #6253e1, #04befe);\n        position: absolute;\n        inset: 0;\n        opacity: 1;\n        transition: all 0.3s;\n        border-radius: inherit;\n      }\n\n      &:hover::before {\n        opacity: 0;\n      }\n    }\n  "])), prefixCls, prefixCls),
    });
});
var ButtonConvert = function (_a) {
    var func = _a.func, text = _a.text, type = _a.type, size = _a.size, className = _a.className, disabled = _a.disabled;
    var styles = useStyle().styles;
    return ((0, jsx_runtime_1.jsx)(antd_1.ConfigProvider, { button: {
            className: styles.linearGradientButton,
        }, children: (0, jsx_runtime_1.jsx)(antd_1.Space, { children: (0, jsx_runtime_1.jsx)(antd_1.Button, { onClick: func, type: type, size: size, className: className, style: { outline: 'none' }, disabled: disabled || false, children: text }) }) }));
};
exports.ButtonConvert = ButtonConvert;
var templateObject_1;
