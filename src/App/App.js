"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var routes_1 = require("./routes/routes");
var App = function () {
    return (0, jsx_runtime_1.jsx)(react_router_dom_1.RouterProvider, { router: routes_1.router });
};
exports.default = App;
