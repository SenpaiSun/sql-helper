"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var constants_1 = require("@entities/constants/constants");
var antd_1 = require("antd");
var NavItem_1 = require("./NavItem/NavItem");
var NavBar = function () {
    return ((0, jsx_runtime_1.jsx)(antd_1.Flex, { gap: "middle", align: "center", children: constants_1.routesToPage.map(function (link) { return ((0, jsx_runtime_1.jsx)(NavItem_1.NavItem, { toPage: link.path, name: link.name }, link.name)); }) }));
};
exports.NavBar = NavBar;
