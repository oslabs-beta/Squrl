exports.ids = [0];
exports.modules = {

/***/ "./node_modules/react-devtools-electron/dist sync recursive ^.*\\/manifest\\.json$":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-devtools-electron/dist sync ^.*\/manifest\.json$ ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/react-devtools-electron/dist sync recursive ^.*\\/manifest\\.json$";

/***/ }),

/***/ "./node_modules/react-devtools-electron/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-devtools-electron/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = __webpack_require__(/*! electron */ "electron");
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/react-devtools-electron/dist/utils.js");
exports.addReactDevToolsExtension = utils_1.addReactDevToolsExtension;
exports.removeReactDevToolsExtension = utils_1.removeReactDevToolsExtension;
if (electron_1.app.isReady()) {
    utils_1.addReactDevToolsExtension();
}
else {
    electron_1.app.once('ready', utils_1.addReactDevToolsExtension);
}


/***/ }),

/***/ "./node_modules/react-devtools-electron/dist/utils.js":
/*!************************************************************!*\
  !*** ./node_modules/react-devtools-electron/dist/utils.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __webpack_require__(/*! path */ "path");
var electron_1 = __webpack_require__(/*! electron */ "electron");
var extensionPath = path_1.join(__dirname, '..', 'extension');
var extensionManifest = __webpack_require__("./node_modules/react-devtools-electron/dist sync recursive ^.*\\/manifest\\.json$")(extensionPath + "/manifest.json");
function addReactDevToolsExtension() {
    var extensions = electron_1.BrowserWindow.getDevToolsExtensions();
    var installedExtension = extensions[extensionManifest.name];
    if (!installedExtension) {
        electron_1.BrowserWindow.addDevToolsExtension(extensionPath);
    }
    else if (installedExtension.version !== extensionManifest.version) {
        removeReactDevToolsExtension();
        electron_1.BrowserWindow.addDevToolsExtension(extensionPath);
    }
}
exports.addReactDevToolsExtension = addReactDevToolsExtension;
function removeReactDevToolsExtension() {
    electron_1.BrowserWindow.addDevToolsExtension(extensionPath);
}
exports.removeReactDevToolsExtension = removeReactDevToolsExtension;

/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ })

};;
//# sourceMappingURL=0.js.map