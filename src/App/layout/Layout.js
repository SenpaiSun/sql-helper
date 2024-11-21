"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Footer_1 = require("@shared/Footer/Footer");
var Header_1 = require("@shared/Header/Header");
var react_router_dom_1 = require("react-router-dom");
var Layout = function () {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Header_1.Header, {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}), (0, jsx_runtime_1.jsx)(Footer_1.Footer, {})] }));
};
exports.Layout = Layout;
