"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompareText = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var compareText_1 = require("@entities/hooks/compareText");
var ButtonConvert_1 = require("@shared/ButtonConvert/ButtonConvert");
var Input_1 = require("@shared/Input/Input");
var PopupCompareResult_1 = require("@shared/PopupCompareResult/PopupCompareResult");
var antd_1 = require("antd");
var layout_1 = require("antd/es/layout/layout");
var react_1 = require("react");
var CompareText = function () {
    var _a = (0, react_1.useState)(''), inputText = _a[0], setInputText = _a[1];
    var _b = (0, react_1.useState)(''), outputText = _b[0], setOutputText = _b[1];
    var _c = (0, react_1.useState)(false), isPopupVisible = _c[0], setIsPopupVisible = _c[1]; // Статус отображения попапа
    var _d = (0, react_1.useState)(''), resultCompare = _d[0], setResultCompare = _d[1];
    var closePopup = function () {
        setIsPopupVisible(false); // Закрыть попап
    };
    var openPopup = function () {
        setIsPopupVisible(true);
    };
    var handleCompareTexts = function () {
        setResultCompare((0, compareText_1.compareTexts)(inputText, outputText));
        openPopup();
    };
    return ((0, jsx_runtime_1.jsxs)(layout_1.Content, { className: 'w-full flex items-center justify-center', style: { minHeight: '78vh' }, children: [isPopupVisible && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: 'fixed inset-0 bg-black opacity-50 z-10', onClick: closePopup }), (0, jsx_runtime_1.jsx)(PopupCompareResult_1.PopupCompareResult, { closePopup: closePopup, resultCompare: resultCompare })] })), (0, jsx_runtime_1.jsxs)(antd_1.Flex, { className: 'flex-col', gap: 'small', children: [(0, jsx_runtime_1.jsx)(antd_1.Button, { type: 'primary', className: 'mb-12 w-40 h-10 mx-auto', onClick: function () { return openPopup(); }, style: { outline: 'none' }, children: "Open compare text" }), (0, jsx_runtime_1.jsxs)(antd_1.Flex, { gap: 'large', children: [(0, jsx_runtime_1.jsx)(Input_1.Input, { inputText: inputText, setInputText: setInputText, style: { minHeight: '40vh', width: '40vw', resize: 'none' }, disabled: false }), (0, jsx_runtime_1.jsx)(ButtonConvert_1.ButtonConvert, { func: handleCompareTexts, text: 'Compare', type: 'primary', size: 'large', className: 'w-24 h-24 rounded-full' }), (0, jsx_runtime_1.jsx)(Input_1.Input, { inputText: outputText, setInputText: setOutputText, style: { minHeight: '40vh', width: '40vw', resize: 'none' }, disabled: false })] })] })] }));
};
exports.CompareText = CompareText;
