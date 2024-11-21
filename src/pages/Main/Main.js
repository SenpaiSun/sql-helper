"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var constants_1 = require("@entities/constants/constants");
var MainNavItem_1 = require("@shared/Main/MainNavItem/MainNavItem");
var antd_1 = require("antd");
var antd_2 = require("antd");
var Main = function () {
    var Content = antd_2.Layout.Content;
    return ((0, jsx_runtime_1.jsx)(Content, { style: { backgroundColor: '#242424', minHeight: '78vh' }, children: (0, jsx_runtime_1.jsxs)(antd_1.Flex, { className: 'w-full h-full p-4', align: "center", vertical: true, children: [(0, jsx_runtime_1.jsx)(antd_2.Typography.Title, { level: 1, style: { color: 'white' }, children: "Your assistant to work as a technical support engineer:" }), (0, jsx_runtime_1.jsx)(antd_1.Flex, { vertical: true, className: "m-0 ", align: "center", gap: "large", children: constants_1.routesToPage.map(function (link, index) { return ((0, jsx_runtime_1.jsx)(MainNavItem_1.MainNavItem, { toPage: link.path, name: link.name }, index)); }) })] }) }));
};
exports.Main = Main;
