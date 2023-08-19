/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./sw.js":
/*!***************!*\
  !*** ./sw.js ***!
  \***************/
/***/ (() => {

eval("\nself.addEventListener('install', function(event) {\n    console.log(\"sw installed\");\n});\n\nvar cacheName = \"gba-ninja\";\nself.addEventListener(\"fetch\", function(event) {\n    \n    if (event.request.method !== \"GET\" || event.request.url.indexOf(self.origin + \"/\") !== 0) {\n\n        console.log(\"sw fetch [ignore] \" + event.request.url);\n        event.respondWith(fetch(event.request));\n\n    } else {\n\n        event.respondWith(\n            fetch(event.request).then(function (response) {\n                console.log(\"sw fetch [network] \" + event.request.url);\n                return caches.open(cacheName).then(function (cache) {\n                    cache.put(event.request, response.clone());\n                    return response;\n                });\n            }).catch(function () {\n                console.log(\"sw fetch [cache] \" + event.request.url);\n                return caches.open(cacheName).then(function(cache) {\n                    return cache.match(event.request);\n                });\n            })\n        );\n\n    }\n    \n});\n\nself.addEventListener(\"error\", function (err) {\n    var error = err.error;\n    var str = \"\";\n    str += \" Message: \" + error.message + \"; \";\n    try {\n        str += \" StackTop: \" + error.stack.split(/\\n/g)[1].trim() + \"; \";\n    } catch (e) {}\n\n    // TODO: send this to google analytics\n    console.error(str);\n    \n});\n\nconsole.log(\"sw loaded\");\n\n\n\n//# sourceURL=webpack://gba.ninja2/./sw.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./sw.js"]();
/******/ 	
/******/ })()
;