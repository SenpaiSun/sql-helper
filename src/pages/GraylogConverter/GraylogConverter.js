"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraylogConverter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var graylogConverterText_1 = require("@entities/hooks/graylogConverterText");
var ButtonClear_1 = require("@shared/ButtonClear/ButtonClear");
var ButtonConvert_1 = require("@shared/ButtonConvert/ButtonConvert");
var ButtonCopy_1 = require("@shared/ButtonCopy/ButtonCopy");
var ContainersLinks_1 = require("@shared/ContainersLinks/ContainersLinks");
var Input_1 = require("@shared/Input/Input");
var antd_1 = require("antd");
var layout_1 = require("antd/es/layout/layout");
var react_1 = require("react");
var GraylogConverter = function () {
    var _a = (0, react_1.useState)(''), inputText = _a[0], setInputText = _a[1];
    var _b = (0, react_1.useState)(''), outputText = _b[0], setOutputText = _b[1];
    var handleConvertValue = function (text) {
        setOutputText((0, graylogConverterText_1.graylogConverterText)(text));
    };
    // Функция копирования в буфер обмена
    var handleCopyValue = function () {
        navigator.clipboard.writeText(outputText);
    };
    // Функция очистки инпута и аутпута текста
    var clearTextAreas = function () {
        setInputText('');
        setOutputText('');
    };
    return ((0, jsx_runtime_1.jsx)(layout_1.Content, { className: 'w-full flex items-center justify-center', style: { minHeight: '78vh' }, children: (0, jsx_runtime_1.jsxs)(antd_1.Flex, { gap: 'small', className: 'flex-col', children: [(0, jsx_runtime_1.jsxs)(antd_1.Flex, { className: 'justify-between', children: [(0, jsx_runtime_1.jsxs)(antd_1.Flex, { style: { width: '40vw' }, className: 'justify-between', children: [(0, jsx_runtime_1.jsx)(ContainersLinks_1.ContainersLinks, {}), (0, jsx_runtime_1.jsx)(antd_1.Flex, { className: 'content-end flex-wrap', children: (0, jsx_runtime_1.jsx)(ButtonClear_1.ButtonClear, { func: function () { return clearTextAreas(); } }) })] }), (0, jsx_runtime_1.jsx)(antd_1.Flex, { style: { width: '40vw' }, className: 'content-end flex-wrap', children: (0, jsx_runtime_1.jsx)(ButtonCopy_1.ButtonCopy, { func: function () { return handleCopyValue(); } }) })] }), (0, jsx_runtime_1.jsxs)(antd_1.Flex, { gap: 'large', className: 'flex-row', children: [(0, jsx_runtime_1.jsx)(Input_1.Input, { inputText: inputText, setInputText: setInputText, style: { minHeight: '40vh', width: '40vw', resize: 'none' }, disabled: false }), (0, jsx_runtime_1.jsx)(ButtonConvert_1.ButtonConvert, { func: function () { return handleConvertValue(inputText); }, disabled: false, text: 'Convert', type: 'primary', size: 'large', className: 'w-24 h-24 rounded-full' }), (0, jsx_runtime_1.jsx)(Input_1.Input, { inputText: outputText, setInputText: setOutputText, style: { minHeight: '40vh', width: '40vw', resize: 'none' }, disabled: true })] })] }) }));
};
exports.GraylogConverter = GraylogConverter;
