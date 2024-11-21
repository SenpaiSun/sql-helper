"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavItem = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var clsx_1 = require("clsx");
var NavItem = function (_a) {
    var toPage = _a.toPage, name = _a.name;
    var currentRoute = (0, react_router_dom_1.useLocation)();
    console.log(currentRoute.pathname, toPage);
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { className: "text-white hover:text-gray-300 ".concat((0, clsx_1.clsx)(currentRoute.pathname === toPage && 'underline hover:underline focus:underline text-gray-400')), to: toPage, children: name }));
};
exports.NavItem = NavItem;
