"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var antd_1 = require("antd");
var Button = function (_a) {
    var func = _a.func, text = _a.text, type = _a.type, className = _a.className, otherProps = _a.otherProps;
    return ((0, jsx_runtime_1.jsx)(antd_1.Button, __assign({}, otherProps, { style: { outline: 'none' }, type: type, className: className, onClick: func, children: text })));
};
exports.Button = Button;
