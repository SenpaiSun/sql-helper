"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainNavItem = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var antd_1 = require("antd");
var react_router_dom_1 = require("react-router-dom");
var MainNavItem = function (_a) {
    var toPage = _a.toPage, name = _a.name;
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: toPage, className: 'hover:opacity-80', children: (0, jsx_runtime_1.jsxs)(antd_1.Flex, { justify: 'center', align: 'center', gap: 'small', children: [(0, jsx_runtime_1.jsx)("span", { className: 'text-5xl bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 bg-[length:300%_100%] text-transparent bg-clip-text animate-gradient-flow-left', children: "\u00BB\u00BB\u00BB" }), (0, jsx_runtime_1.jsx)(antd_1.Typography.Title, { level: 2, style: { color: 'white', margin: 0, marginTop: '0.5rem' }, children: name }), (0, jsx_runtime_1.jsx)("span", { className: 'text-5xl bg-gradient-to-r from-green-500 via-blue-500 to-pink-500 bg-[length:300%_100%] text-transparent bg-clip-text animate-gradient-flow-right', children: "\u00AB\u00AB\u00AB" })] }) }));
};
exports.MainNavItem = MainNavItem;
