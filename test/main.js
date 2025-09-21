/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vocabTest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vocabTest */ \"./src/vocabTest.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === \"function\" ? Iterator : Object).prototype);\n    return g.next = verb(0), g[\"throw\"] = verb(1), g[\"return\"] = verb(2), typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\nvar VocabTestApp = /** @class */ (function () {\n    function VocabTestApp() {\n        this.correctCount = 0;\n        this.minesweeperStarted = false;\n        this.vocabTest = new _vocabTest__WEBPACK_IMPORTED_MODULE_0__.VocabTest();\n        this.showLoader();\n        this.initAndStart();\n    }\n    VocabTestApp.prototype.showLoader = function () {\n        var app = document.getElementById('app');\n        if (!app) {\n            app = document.createElement('div');\n            app.id = 'app';\n            document.body.appendChild(app);\n        }\n        app.innerHTML = \"<div style=\\\"text-align:center;padding:2em;font-size:1.2em;\\\">Vokabeln werden geladen...</div>\";\n    };\n    VocabTestApp.prototype.initAndStart = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this.vocabTest.init()];\n                    case 1:\n                        _a.sent();\n                        this.renderQuestion();\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    VocabTestApp.prototype.renderQuestion = function () {\n        var _this = this;\n        if (this.minesweeperStarted)\n            return;\n        var question = this.vocabTest.getQuestion();\n        if (!question) {\n            this.renderEnd();\n            return;\n        }\n        var app = document.getElementById('app');\n        if (!app) {\n            app = document.createElement('div');\n            app.id = 'app';\n            document.body.appendChild(app);\n        }\n        app.innerHTML = \"\\n\\t\\t\\t<h2>Was hei\\u00DFt <span style=\\\"color: #0074D9\\\">\".concat(question.spanish, \"</span> auf Deutsch?</h2>\\n\\t\\t\\t<div id=\\\"options\\\">\\n\\t\\t\\t\\t\").concat(question.options.map(function (opt, i) { return \"<button data-opt=\\\"\".concat(opt, \"\\\" style=\\\"margin: 0.5em;\\\">\").concat(opt, \"</button>\"); }).join(''), \"\\n\\t\\t\\t</div>\\n\\t\\t\\t<div id=\\\"result\\\" style=\\\"margin-top:1em;\\\"></div>\\n\\t\\t\");\n        var optionsDiv = document.getElementById('options');\n        var resultDiv = document.getElementById('result');\n        if (optionsDiv && resultDiv) {\n            var answered_1 = false;\n            optionsDiv.addEventListener('click', function (e) {\n                var target = e.target;\n                if (target.tagName === 'BUTTON' && !answered_1) {\n                    answered_1 = true;\n                    var selected = target.getAttribute('data-opt');\n                    if (selected === question.answer) {\n                        resultDiv.innerHTML = '<span style=\"color:green\">Richtig!</span>';\n                        _this.correctCount++;\n                        if (_this.correctCount >= 5 && !_this.minesweeperStarted) {\n                            _this.minesweeperStarted = true;\n                            setTimeout(function () { return _this.startMinesweeper(); }, 800);\n                            return;\n                        }\n                    }\n                    else {\n                        resultDiv.innerHTML = \"<span style=\\\"color:red\\\">Falsch! Richtig war: \".concat(question.answer, \"</span>\");\n                    }\n                    // Add Weiter button\n                    var weiterBtn = document.createElement('button');\n                    weiterBtn.textContent = 'Weiter';\n                    weiterBtn.style.marginLeft = '1em';\n                    weiterBtn.onclick = function () {\n                        _this.vocabTest.nextQuestion();\n                        _this.renderQuestion();\n                    };\n                    resultDiv.appendChild(document.createElement('br'));\n                    resultDiv.appendChild(weiterBtn);\n                }\n            });\n        }\n    };\n    VocabTestApp.prototype.startMinesweeper = function () {\n        var app = document.getElementById('app');\n        if (!app) {\n            app = document.createElement('div');\n            app.id = 'app';\n            document.body.appendChild(app);\n        }\n        app.innerHTML = '<h2>Minesweeper!</h2><div id=\"minesweeper-container\"></div>';\n        // Dynamically import and start MinesweeperView\n        __webpack_require__.e(/*! import() */ \"src_minesweeper_minesweeper-view_ts\").then(__webpack_require__.bind(__webpack_require__, /*! ./minesweeper/minesweeper-view */ \"./src/minesweeper/minesweeper-view.ts\")).then(function (mod) {\n            new mod.MinesweeperView('minesweeper-container', 8, 8, 10);\n        });\n    };\n    VocabTestApp.prototype.renderEnd = function () {\n        var app = document.getElementById('app');\n        if (!app) {\n            app = document.createElement('div');\n            app.id = 'app';\n            document.body.appendChild(app);\n        }\n        app.innerHTML = \"<h2>Test beendet!</h2>\";\n    };\n    return VocabTestApp;\n}());\nnew VocabTestApp();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1lBQ1YsR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEMsR0FBRyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDZixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBQ0QsR0FBRyxDQUFDLFNBQVMsR0FBRyw2REFBNkQsQ0FBQztRQUM5RSwrQ0FBK0M7UUFDL0MsK01BQXdDLENBQUMsSUFBSSxDQUFDLGFBQUc7WUFDaEQsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDLHVCQUF1QixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsZ0NBQVMsR0FBVDtRQUNDLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ1YsR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEMsR0FBRyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDZixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBQ0QsR0FBRyxDQUFDLFNBQVMsR0FBRyx3QkFBd0IsQ0FBQztJQUMxQyxDQUFDO0lBQ0YsbUJBQUM7QUFBRCxDQUFDO0FBR0QsSUFBSSxZQUFZLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvcGlsb3QtdGVzdGluZy8uL3NyYy9pbmRleC50cz9mZmI0Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IHsgVm9jYWJUZXN0IH0gZnJvbSAnLi92b2NhYlRlc3QnO1xyXG5cclxuY2xhc3MgVm9jYWJUZXN0QXBwIHtcclxuXHRwcml2YXRlIHZvY2FiVGVzdDogVm9jYWJUZXN0O1xyXG5cdHByaXZhdGUgY29ycmVjdENvdW50OiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgbWluZXN3ZWVwZXJTdGFydGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy52b2NhYlRlc3QgPSBuZXcgVm9jYWJUZXN0KCk7XHJcblx0XHR0aGlzLnNob3dMb2FkZXIoKTtcclxuXHRcdHRoaXMuaW5pdEFuZFN0YXJ0KCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNob3dMb2FkZXIoKSB7XHJcblx0XHRsZXQgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xyXG5cdFx0aWYgKCFhcHApIHtcclxuXHRcdFx0YXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdGFwcC5pZCA9ICdhcHAnO1xyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcCk7XHJcblx0XHR9XHJcblx0XHRhcHAuaW5uZXJIVE1MID0gYDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjJlbTtmb250LXNpemU6MS4yZW07XCI+Vm9rYWJlbG4gd2VyZGVuIGdlbGFkZW4uLi48L2Rpdj5gO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhc3luYyBpbml0QW5kU3RhcnQoKSB7XHJcblx0XHRhd2FpdCB0aGlzLnZvY2FiVGVzdC5pbml0KCk7XHJcblx0XHR0aGlzLnJlbmRlclF1ZXN0aW9uKCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXJRdWVzdGlvbigpIHtcclxuXHRcdGlmICh0aGlzLm1pbmVzd2VlcGVyU3RhcnRlZCkgcmV0dXJuO1xyXG5cdFx0Y29uc3QgcXVlc3Rpb24gPSB0aGlzLnZvY2FiVGVzdC5nZXRRdWVzdGlvbigpO1xyXG5cdFx0aWYgKCFxdWVzdGlvbikge1xyXG5cdFx0XHR0aGlzLnJlbmRlckVuZCgpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRsZXQgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xyXG5cdFx0aWYgKCFhcHApIHtcclxuXHRcdFx0YXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdGFwcC5pZCA9ICdhcHAnO1xyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcCk7XHJcblx0XHR9XHJcblx0XHRhcHAuaW5uZXJIVE1MID0gYFxyXG5cdFx0XHQ8aDI+V2FzIGhlacOfdCA8c3BhbiBzdHlsZT1cImNvbG9yOiAjMDA3NEQ5XCI+JHtxdWVzdGlvbi5zcGFuaXNofTwvc3Bhbj4gYXVmIERldXRzY2g/PC9oMj5cclxuXHRcdFx0PGRpdiBpZD1cIm9wdGlvbnNcIj5cclxuXHRcdFx0XHQke3F1ZXN0aW9uLm9wdGlvbnMubWFwKChvcHQ6IHN0cmluZywgaTogbnVtYmVyKSA9PiBgPGJ1dHRvbiBkYXRhLW9wdD1cIiR7b3B0fVwiIHN0eWxlPVwibWFyZ2luOiAwLjVlbTtcIj4ke29wdH08L2J1dHRvbj5gKS5qb2luKCcnKX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgaWQ9XCJyZXN1bHRcIiBzdHlsZT1cIm1hcmdpbi10b3A6MWVtO1wiPjwvZGl2PlxyXG5cdFx0YDtcclxuXHJcblx0XHRjb25zdCBvcHRpb25zRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbnMnKTtcclxuXHRcdGNvbnN0IHJlc3VsdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKTtcclxuXHRcdGlmIChvcHRpb25zRGl2ICYmIHJlc3VsdERpdikge1xyXG5cdFx0XHRsZXQgYW5zd2VyZWQgPSBmYWxzZTtcclxuXHRcdFx0b3B0aW9uc0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcblx0XHRcdFx0aWYgKHRhcmdldC50YWdOYW1lID09PSAnQlVUVE9OJyAmJiAhYW5zd2VyZWQpIHtcclxuXHRcdFx0XHRcdGFuc3dlcmVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcHQnKTtcclxuXHRcdFx0XHRcdGlmIChzZWxlY3RlZCA9PT0gcXVlc3Rpb24uYW5zd2VyKSB7XHJcblx0XHRcdFx0XHRcdHJlc3VsdERpdi5pbm5lckhUTUwgPSAnPHNwYW4gc3R5bGU9XCJjb2xvcjpncmVlblwiPlJpY2h0aWchPC9zcGFuPic7XHJcblx0XHRcdFx0XHRcdHRoaXMuY29ycmVjdENvdW50Kys7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmNvcnJlY3RDb3VudCA+PSA1ICYmICF0aGlzLm1pbmVzd2VlcGVyU3RhcnRlZCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMubWluZXN3ZWVwZXJTdGFydGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMuc3RhcnRNaW5lc3dlZXBlcigpLCA4MDApO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0RGl2LmlubmVySFRNTCA9IGA8c3BhbiBzdHlsZT1cXFwiY29sb3I6cmVkXFxcIj5GYWxzY2ghIFJpY2h0aWcgd2FyOiAke3F1ZXN0aW9uLmFuc3dlcn08L3NwYW4+YDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIEFkZCBXZWl0ZXIgYnV0dG9uXHJcblx0XHRcdFx0XHRjb25zdCB3ZWl0ZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdFx0XHRcdHdlaXRlckJ0bi50ZXh0Q29udGVudCA9ICdXZWl0ZXInO1xyXG5cdFx0XHRcdFx0d2VpdGVyQnRuLnN0eWxlLm1hcmdpbkxlZnQgPSAnMWVtJztcclxuXHRcdFx0XHRcdHdlaXRlckJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnZvY2FiVGVzdC5uZXh0UXVlc3Rpb24oKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5yZW5kZXJRdWVzdGlvbigpO1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdHJlc3VsdERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuXHRcdFx0XHRcdHJlc3VsdERpdi5hcHBlbmRDaGlsZCh3ZWl0ZXJCdG4pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXJ0TWluZXN3ZWVwZXIoKSB7XHJcblx0XHRsZXQgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xyXG5cdFx0aWYgKCFhcHApIHtcclxuXHRcdFx0YXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdGFwcC5pZCA9ICdhcHAnO1xyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcCk7XHJcblx0XHR9XHJcblx0XHRhcHAuaW5uZXJIVE1MID0gJzxoMj5NaW5lc3dlZXBlciE8L2gyPjxkaXYgaWQ9XCJtaW5lc3dlZXBlci1jb250YWluZXJcIj48L2Rpdj4nO1xyXG5cdFx0Ly8gRHluYW1pY2FsbHkgaW1wb3J0IGFuZCBzdGFydCBNaW5lc3dlZXBlclZpZXdcclxuXHRcdGltcG9ydCgnLi9taW5lc3dlZXBlci9taW5lc3dlZXBlci12aWV3JykudGhlbihtb2QgPT4ge1xyXG5cdFx0XHRuZXcgbW9kLk1pbmVzd2VlcGVyVmlldygnbWluZXN3ZWVwZXItY29udGFpbmVyJywgOCwgOCwgMTApO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXJFbmQoKSB7XHJcblx0XHRsZXQgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xyXG5cdFx0aWYgKCFhcHApIHtcclxuXHRcdFx0YXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdGFwcC5pZCA9ICdhcHAnO1xyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcCk7XHJcblx0XHR9XHJcblx0XHRhcHAuaW5uZXJIVE1MID0gYDxoMj5UZXN0IGJlZW5kZXQhPC9oMj5gO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbm5ldyBWb2NhYlRlc3RBcHAoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n\n}");

/***/ }),

/***/ "./src/vocabTest.ts":
/*!**************************!*\
  !*** ./src/vocabTest.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VocabTest: () => (/* binding */ VocabTest)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === \"function\" ? Iterator : Object).prototype);\n    return g.next = verb(0), g[\"throw\"] = verb(1), g[\"return\"] = verb(2), typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nvar VocabTest = /** @class */ (function () {\n    function VocabTest() {\n        this.questions = [];\n        this.currentIndex = 0;\n    }\n    VocabTest.prototype.init = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var module, vocabList;\n            var _this = this;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, __webpack_require__.e(/*! import() */ \"assets_vocabList_json\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../assets/vocabList.json */ \"./assets/vocabList.json\", 19))];\n                    case 1:\n                        module = _a.sent();\n                        vocabList = module.default;\n                        this.questions = vocabList.map(function (entry) {\n                            // Pick 3 wrong options\n                            var wrong = _this.shuffle(vocabList.filter(function (v) { return v.german !== entry.german; })).slice(0, 3);\n                            var options = _this.shuffle(__spreadArray([\n                                entry.german\n                            ], wrong.map(function (v) { return v.german; }), true));\n                            return {\n                                spanish: entry.spanish,\n                                options: options,\n                                answer: entry.german,\n                            };\n                        });\n                        this.currentIndex = 0;\n                        this.shuffleQuestions();\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    VocabTest.prototype.shuffle = function (array) {\n        return array\n            .map(function (value) { return ({ value: value, sort: Math.random() }); })\n            .sort(function (a, b) { return a.sort - b.sort; })\n            .map(function (_a) {\n            var value = _a.value;\n            return value;\n        });\n    };\n    VocabTest.prototype.shuffleQuestions = function () {\n        this.questions = this.shuffle(this.questions);\n    };\n    VocabTest.prototype.getQuestion = function () {\n        var _a;\n        if (this.currentIndex < this.questions.length) {\n            return (_a = this.questions[this.currentIndex]) !== null && _a !== void 0 ? _a : null;\n        }\n        return null;\n    };\n    VocabTest.prototype.nextQuestion = function () {\n        var _a;\n        this.currentIndex++;\n        if (this.currentIndex < this.questions.length) {\n            return (_a = this.questions[this.currentIndex]) !== null && _a !== void 0 ? _a : null;\n        }\n        return null;\n    };\n    VocabTest.prototype.reset = function () {\n        this.currentIndex = 0;\n        this.shuffleQuestions();\n    };\n    return VocabTest;\n}());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvcGlsb3QtdGVzdGluZy8uL3NyYy92b2NhYlRlc3QudHM/NmI5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHR5cGUgeyBWb2NhYkxpc3RFbnRyeSB9IGZyb20gJy4vdHlwZXMvVm9jYWJMaXN0RW50cnknO1xyXG5pbXBvcnQgdHlwZSB7IFZvY2FiUXVlc3Rpb24gfSBmcm9tICcuL3R5cGVzL1ZvY2FiUXVlc3Rpb24nO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWb2NhYlRlc3Qge1xyXG4gIHByaXZhdGUgcXVlc3Rpb25zOiBWb2NhYlF1ZXN0aW9uW10gPSBbXTtcclxuICBwcml2YXRlIGN1cnJlbnRJbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBhc3luYyBpbml0KCkge1xyXG4gICAgY29uc3QgbW9kdWxlID0gYXdhaXQgaW1wb3J0KCcuLi9hc3NldHMvdm9jYWJMaXN0Lmpzb24nKTtcclxuICAgIGNvbnN0IHZvY2FiTGlzdCA9IG1vZHVsZS5kZWZhdWx0IGFzIFZvY2FiTGlzdEVudHJ5W107XHJcbiAgICB0aGlzLnF1ZXN0aW9ucyA9IHZvY2FiTGlzdC5tYXAoKGVudHJ5KSA9PiB7XHJcbiAgICAgIC8vIFBpY2sgMyB3cm9uZyBvcHRpb25zXHJcbiAgICAgIGNvbnN0IHdyb25nID0gdGhpcy5zaHVmZmxlKFxyXG4gICAgICAgIHZvY2FiTGlzdC5maWx0ZXIoKHYpID0+IHYuZ2VybWFuICE9PSBlbnRyeS5nZXJtYW4pXHJcbiAgICAgICkuc2xpY2UoMCwgMyk7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnNodWZmbGUoW1xyXG4gICAgICAgIGVudHJ5Lmdlcm1hbixcclxuICAgICAgICAuLi53cm9uZy5tYXAoKHYpID0+IHYuZ2VybWFuKSxcclxuICAgICAgXSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3BhbmlzaDogZW50cnkuc3BhbmlzaCxcclxuICAgICAgICBvcHRpb25zLFxyXG4gICAgICAgIGFuc3dlcjogZW50cnkuZ2VybWFuLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICB0aGlzLnNodWZmbGVRdWVzdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2h1ZmZsZTxUPihhcnJheTogVFtdKTogVFtdIHtcclxuICAgIHJldHVybiBhcnJheVxyXG4gICAgICAubWFwKCh2YWx1ZSkgPT4gKHsgdmFsdWUsIHNvcnQ6IE1hdGgucmFuZG9tKCkgfSkpXHJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnNvcnQgLSBiLnNvcnQpXHJcbiAgICAgIC5tYXAoKHsgdmFsdWUgfSkgPT4gdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaHVmZmxlUXVlc3Rpb25zKCkge1xyXG4gICAgdGhpcy5xdWVzdGlvbnMgPSB0aGlzLnNodWZmbGUodGhpcy5xdWVzdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFF1ZXN0aW9uKCk6IFZvY2FiUXVlc3Rpb24gfCBudWxsIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA8IHRoaXMucXVlc3Rpb25zLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50SW5kZXhdID8/IG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZXh0UXVlc3Rpb24oKTogVm9jYWJRdWVzdGlvbiB8IG51bGwge1xyXG4gICAgdGhpcy5jdXJyZW50SW5kZXgrKztcclxuICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA8IHRoaXMucXVlc3Rpb25zLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50SW5kZXhdID8/IG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcclxuICAgIHRoaXMuc2h1ZmZsZVF1ZXN0aW9ucygpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/vocabTest.ts\n\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "copilot-testing:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcopilot_testing"] = self["webpackChunkcopilot_testing"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;