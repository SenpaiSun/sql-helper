"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareTexts = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var diff_match_patch_1 = __importDefault(require("diff-match-patch"));
var compareTexts = function (originalText, modifiedText) {
    var dmp = new diff_match_patch_1.default();
    // Получаем массив изменений между двумя текстами
    var diffs = dmp.diff_main(originalText, modifiedText);
    dmp.diff_cleanupSemantic(diffs); // Оптимизация различий
    // Преобразуем диффы в элементы JSX
    var result = diffs.map(function (diff, index) {
        var operation = diff[0], text = diff[1];
        var style = {};
        if (operation === -1) {
            // Удаленный текст
            style = { backgroundColor: 'red', textDecoration: 'line-through' };
        }
        else if (operation === 1) {
            // Добавленный текст
            style = { backgroundColor: 'green' };
        }
        return ((0, jsx_runtime_1.jsx)("span", { style: style, children: text }, index));
    });
    return (0, jsx_runtime_1.jsx)("div", { children: result });
};
exports.compareTexts = compareTexts;
