"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var antd_1 = require("antd");
var FooterContacts_1 = require("./FooterContacts/FooterContacts");
var Footer = function () {
    var Footer = antd_1.Layout.Footer;
    return ((0, jsx_runtime_1.jsx)(Footer, { style: { backgroundColor: '#242424' }, children: (0, jsx_runtime_1.jsxs)(antd_1.Flex, { justify: 'space-between', children: [(0, jsx_runtime_1.jsx)(antd_1.Flex, { align: 'end', children: (0, jsx_runtime_1.jsx)(antd_1.Typography.Text, { style: { color: 'white' }, children: "\u00A9 2024" }) }), (0, jsx_runtime_1.jsx)(FooterContacts_1.FooterContacts, {})] }) }));
};
exports.Footer = Footer;
