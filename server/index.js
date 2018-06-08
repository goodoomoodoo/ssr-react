'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _App = require('./src/App');

var _App2 = _interopRequireDefault(_App);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexHTML = _fs2.default.readFileSync(_path2.default.resolve(__dirname, '../public/index.html'), 'utf8');
var app = new _express2.default();
var PORT = process.env.PORT || 3000;

app.get('**', function (req, res) {
    var html = (0, _server.renderToString)(_react2.default.createElement(_App2.default, null));
    var resultHTML = indexHTML.replace('<!-- APP -->', html);
    res.send(resultHTML);
});

app.listen(PORT, function () {
    console.log('Serving on PORT ' + PORT + '...');
});