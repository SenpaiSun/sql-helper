"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var NavBar_1 = require("./NavBar/NavBar");
var logo_png_1 = __importDefault(require("@assets/logo.png"));
var antd_1 = require("antd");
var Header = function () {
    var Header = antd_1.Layout.Header;
    return ((0, jsx_runtime_1.jsx)(Header, { style: { backgroundColor: '#242424' }, children: (0, jsx_runtime_1.jsxs)(antd_1.Flex, { align: 'center', gap: 'large', className: 'p-2', children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/', children: (0, jsx_runtime_1.jsx)("img", { className: 'w-24', src: logo_png_1.default }) }), (0, jsx_runtime_1.jsx)(NavBar_1.NavBar, {})] }) }));
};
exports.Header = Header;
