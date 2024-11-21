"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterContacts = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var constants_1 = require("@entities/constants/constants");
var antd_1 = require("antd");
var FooterContacts = function () {
    return ((0, jsx_runtime_1.jsx)(antd_1.List, { dataSource: constants_1.contacts, renderItem: function (item) { return ((0, jsx_runtime_1.jsx)(antd_1.List.Item, { style: { display: 'flex', justifyContent: 'end' }, children: item.name === 'Email' ? ((0, jsx_runtime_1.jsx)(antd_1.Flex, { align: 'end', justify: 'end', children: (0, jsx_runtime_1.jsx)("a", { href: "mailto:".concat(item.url), className: 'text-white hover:text-gray-300', children: item.text }) })) : ((0, jsx_runtime_1.jsx)(antd_1.Flex, { children: (0, jsx_runtime_1.jsx)("a", { href: item.url, className: 'text-white hover:text-gray-300', children: item.text }) })) })); } }));
};
exports.FooterContacts = FooterContacts;
