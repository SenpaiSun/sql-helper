"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var TextArea_1 = __importDefault(require("antd/es/input/TextArea"));
var Input = function (_a) {
    var inputText = _a.inputText, setInputText = _a.setInputText, style = _a.style, disabled = _a.disabled;
    return ((0, jsx_runtime_1.jsx)(TextArea_1.default, { className: "bg-[#242424] hover:bg-[#242424] focus:bg-[#242424] border-white hover:border-white focus:border-white text-white placeholder-white disabled:text-white disabled:cursor-auto disabled:bg-[#242424]", value: inputText, onChange: function (e) { return setInputText(e.target.value); }, style: style, disabled: disabled }));
};
exports.Input = Input;
