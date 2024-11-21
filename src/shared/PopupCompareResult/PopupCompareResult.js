"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupCompareResult = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var antd_1 = require("antd");
var PopupCompareResult = function (_a) {
    var resultCompare = _a.resultCompare, closePopup = _a.closePopup;
    console.log(typeof resultCompare);
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'border-white border rounded-xl w-2/3 h-2/3 absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-10 bg-[#242424] p-5 flex flex-col', children: [(0, jsx_runtime_1.jsx)(antd_1.Button, { onClick: closePopup, type: 'primary', danger: true, className: 'mb-12 w-40 h-10 mx-auto', style: { outline: 'none' }, children: "Close popup" }), (0, jsx_runtime_1.jsx)("div", { className: 'border-white border rounded-xl w-11/12 h-full bg-[#242424] mx-auto p-2 text-white overflow-auto', children: resultCompare })] }));
};
exports.PopupCompareResult = PopupCompareResult;
