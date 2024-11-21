"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainersLinks = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_1 = require("@shared/Button/Button");
var antd_1 = require("antd");
var react_1 = require("react");
var ContainersLinks = function () {
    var _a = (0, react_1.useState)(null), activeNumberLink = _a[0], setActiveNumberLink = _a[1];
    var _b = (0, react_1.useState)({
        '1': '',
        '2': '',
        '3': '',
    }), graylogLinks = _b[0], setGraylogLinks = _b[1];
    // установка значения по умолчанию для активной ссылки
    (0, react_1.useEffect)(function () {
        var numberLinkLocal = localStorage.getItem('activeNumberLink');
        if (!numberLinkLocal) {
            localStorage.setItem('activeNumberLink', '1');
        }
        else {
            setActiveNumberLink(numberLinkLocal);
        }
    }, [activeNumberLink]);
    // установка значения по умолчанию для ссылок
    (0, react_1.useEffect)(function () {
        var LinksGraylog = localStorage.getItem('LinksGraylog');
        if (!LinksGraylog) {
            localStorage.setItem('LinksGraylog', JSON.stringify(graylogLinks));
        }
    }, [graylogLinks]);
    // сменить активную ссылку
    var handleActiveNumberLink = function (number) {
        localStorage.setItem('activeNumberLink', number);
        setActiveNumberLink(number);
    };
    // добавить ссылку в localStorage
    var handleAddLink = function (number) {
    };
    return ((0, jsx_runtime_1.jsxs)(antd_1.Flex, { className: 'flex-col w-4/6', gap: 'small', children: [(0, jsx_runtime_1.jsxs)(antd_1.Flex, { gap: 'small', children: [(0, jsx_runtime_1.jsx)(Button_1.Button, { text: "1", type: 'primary', className: "text-white bg-[#3e423e] border-none hover:border-white focus:border-white w-10 ".concat(activeNumberLink === '1' && 'bg-green-500'), func: function () { return handleActiveNumberLink('1'); } }), (0, jsx_runtime_1.jsx)(Button_1.Button, { text: "2", type: 'primary', className: "text-white bg-[#3e423e] border-none hover:border-white focus:border-white w-10 ".concat(activeNumberLink === '2' && 'bg-green-500'), func: function () { return handleActiveNumberLink('2'); } }), (0, jsx_runtime_1.jsx)(Button_1.Button, { text: "3", type: 'primary', className: "text-white bg-[#3e423e] border-none hover:border-white focus:border-white w-10 ".concat(activeNumberLink === '3' && 'bg-green-500'), func: function () { return handleActiveNumberLink('3'); } })] }), (0, jsx_runtime_1.jsxs)(antd_1.Flex, { gap: 'small', children: [(0, jsx_runtime_1.jsx)(antd_1.Input, { className: "text-white bg-[#3e423e] border-none hover:border-white focus:border-white" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { text: "\u2713", type: 'primary', className: "text-white bg-green-500 border-none hover:border-white focus:border-white w-10", func: function () { return handleActiveNumberLink('3'); } })] })] }));
};
exports.ContainersLinks = ContainersLinks;
