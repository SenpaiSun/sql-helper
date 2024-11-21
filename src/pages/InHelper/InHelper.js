"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InHelper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_1 = require("@shared/Button/Button");
var ButtonClear_1 = require("@shared/ButtonClear/ButtonClear");
var ButtonConvert_1 = require("@shared/ButtonConvert/ButtonConvert");
var ButtonCopy_1 = require("@shared/ButtonCopy/ButtonCopy");
var Input_1 = require("@shared/Input/Input");
var antd_1 = require("antd");
var layout_1 = require("antd/es/layout/layout");
var react_1 = require("react");
var InHelper = function () {
    var _a = (0, react_1.useState)(''), inputText = _a[0], setInputText = _a[1];
    var _b = (0, react_1.useState)(''), outputText = _b[0], setOutputText = _b[1];
    // format 1 - преобразовывает в формат для MySQL (пример: id1, id2, id3)
    // format 2 - преобразовывает в формат для Clickhouse (пример: 'id1', 'id2', 'id3')
    var _c = (0, react_1.useState)(null), selectedButtonFormat = _c[0], setSelectedButtonFormat = _c[1];
    // set default value
    (0, react_1.useEffect)(function () {
        var formatLocal = Number(localStorage.getItem('format'));
        if (formatLocal) {
            setSelectedButtonFormat(formatLocal);
        }
        else {
            setSelectedButtonFormat(1);
        }
    }, []);
    // сменить формат для конвертирования - id, or 'id',
    var changeFormat = function (num) {
        setSelectedButtonFormat(num);
        localStorage.setItem('format', num.toString());
    };
    console.log(inputText);
    // Функция для преобразования в MySQL-подобный формат данных
    var convertValueInHelperFormat1 = function (value) {
        var idsArray = value.split('\n');
        var idsArrayFiltered = idsArray.filter(function (item) { return item.trim() !== ''; });
        return idsArrayFiltered
            .map(function (id, index) {
            var idClear = id.trim();
            if (index === 0) {
                return idClear;
            }
            return ' ' + idClear;
        })
            .join(','); // Преобразование массива в строку
    };
    // Функция для преобразования в Clickhouse-подобный формат данных
    var convertValueInHelperFormat2 = function (value) {
        var idsArray = value.split('\n');
        var idsArrayFiltered = idsArray.filter(function (item) { return item.trim() !== ''; });
        return idsArrayFiltered
            .map(function (id, index) {
            var idClear = id.trim();
            if (index === 0) {
                return "'" + idClear + "'";
            }
            return " '" + idClear + "'";
        })
            .join(','); // Преобразование массива в строку
    };
    var handleConvertValue = function () {
        if (selectedButtonFormat === 1) {
            setOutputText(convertValueInHelperFormat1(inputText));
        }
        else if (selectedButtonFormat === 2) {
            setOutputText(convertValueInHelperFormat2(inputText));
        }
    };
    // Функция очистки инпута и аутпута текста
    var clearTextAreas = function () {
        setInputText('');
        setOutputText('');
    };
    // Функция копирования в буфер обмена
    var handleCopyValue = function () {
        navigator.clipboard.writeText(outputText);
    };
    return ((0, jsx_runtime_1.jsx)(layout_1.Content, { className: 'w-full flex items-center justify-center', style: { minHeight: '78vh' }, children: (0, jsx_runtime_1.jsxs)(antd_1.Flex, { className: 'flex-col', gap: 'small', children: [(0, jsx_runtime_1.jsxs)(antd_1.Flex, { className: 'justify-between', children: [(0, jsx_runtime_1.jsxs)(antd_1.Flex, { style: { width: '40vw' }, className: 'justify-between', gap: 'large', children: [(0, jsx_runtime_1.jsxs)(antd_1.Flex, { className: 'justify-start', gap: 'large', children: [(0, jsx_runtime_1.jsx)(antd_1.Typography.Text, { className: 'text-white text-xl', children: "Format:" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { text: 'id,', type: 'primary', className: "text-white bg-[#3e423e] border-none hover:border-white focus:border-white w-20 ".concat(selectedButtonFormat === 1 && 'bg-green-500'), func: function () { return changeFormat(1); } }), (0, jsx_runtime_1.jsx)(Button_1.Button, { text: "'id',", type: 'primary', className: "text-white bg-[#3e423e] border-none hover:border-white focus:border-white w-20 ".concat(selectedButtonFormat === 2 && 'bg-green-500'), func: function () { return changeFormat(2); } })] }), (0, jsx_runtime_1.jsx)(antd_1.Flex, { children: (0, jsx_runtime_1.jsx)(ButtonClear_1.ButtonClear, { func: function () { return clearTextAreas(); } }) })] }), (0, jsx_runtime_1.jsx)(antd_1.Flex, { style: { width: '40vw' }, className: 'justify-start', gap: 'large', children: (0, jsx_runtime_1.jsx)(ButtonCopy_1.ButtonCopy, { func: function () { return handleCopyValue(); } }) })] }), (0, jsx_runtime_1.jsxs)(antd_1.Flex, { gap: 'large', children: [(0, jsx_runtime_1.jsx)(Input_1.Input, { inputText: inputText, setInputText: setInputText, style: { minHeight: '40vh', width: '40vw', resize: 'none' }, disabled: false }), (0, jsx_runtime_1.jsx)(ButtonConvert_1.ButtonConvert, { func: handleConvertValue, text: 'Convert', type: 'primary', size: 'large', className: 'w-24 h-24 rounded-full' }), (0, jsx_runtime_1.jsx)(Input_1.Input, { inputText: outputText, setInputText: setInputText, style: { minHeight: '40vh', width: '40vw', resize: 'none' }, disabled: true })] })] }) }));
};
exports.InHelper = InHelper;
