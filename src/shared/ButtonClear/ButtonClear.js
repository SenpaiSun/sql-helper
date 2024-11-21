"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonClear = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_1 = require("@shared/Button/Button");
var ButtonClear = function (_a) {
    var func = _a.func;
    return ((0, jsx_runtime_1.jsx)(Button_1.Button, { text: 'Clear', type: 'primary', className: "text-white bg-[#3e423e] border-none hover:border-white focus:border-white w-20", func: func, otherProps: { danger: true } }));
};
exports.ButtonClear = ButtonClear;
