"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graylogConverterText = void 0;
var graylogConverterText = function (text) {
    var textArray = text.split('');
    var result = [];
    for (var i = 0; i < textArray.length; i++) {
        if (textArray[i] === '{' || textArray[i] === '}') {
            result.push('/');
        }
        else if (/^[a-zA-Zа-яА-ЯёЁ0-9]$/.test(textArray[i])) {
            result.push(textArray[i]);
        }
        else {
            result.push('.');
        }
    }
    return result.join('');
};
exports.graylogConverterText = graylogConverterText;
