/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar student1 = {\n    firstName: \"Alice\",\n    lastName: \"Wangui\",\n    age: 22,\n    location: \"Nairobi\",\n};\nvar student2 = {\n    firstName: \"John\",\n    lastName: \"Doe\",\n    age: 25,\n    location: \"Mombasa\",\n};\nvar studentsList = [student1, student2];\nvar studentTable = document.createElement(\"table\");\nstudentTable.border = \"1\";\nvar studentHeader = document.createElement(\"tr\");\n[\"First Name\", \"Location\"].forEach(function (text) {\n    var th = document.createElement(\"th\");\n    th.textContent = text;\n    studentHeader.appendChild(th);\n});\nstudentTable.appendChild(studentHeader);\nstudentsList.forEach(function (student) {\n    var row = document.createElement(\"tr\");\n    [student.firstName, student.location].forEach(function (text) {\n        var td = document.createElement(\"td\");\n        td.textContent = text;\n        row.appendChild(td);\n    });\n    studentTable.appendChild(row);\n});\ndocument.body.appendChild(studentTable);\nvar teacher3 = {\n    firstName: 'John',\n    fullTimeEmployee: false,\n    lastName: 'Doe',\n    location: 'London',\n    contract: false,\n};\nconsole.log(teacher3);\nvar director1 = {\n    firstName: 'Jane',\n    lastName: 'Smith',\n    location: 'Nairobi',\n    fullTimeEmployee: true,\n    numberOfReports: 17,\n};\nconsole.log(director1);\nvar printTeacher = function (firstName, lastName) {\n    return \"\".concat(firstName.charAt(0), \". \").concat(lastName);\n};\nconsole.log(printTeacher(\"John\", \"Doe\")); // Output: \"J. Doe\"\nvar StudentClass = /** @class */ (function () {\n    function StudentClass(firstName, lastName) {\n        this.firstName = firstName;\n        this.lastName = lastName;\n    }\n    StudentClass.prototype.workOnHomework = function () {\n        return \"Currently working\";\n    };\n    StudentClass.prototype.displayName = function () {\n        return this.firstName;\n    };\n    return StudentClass;\n}());\nvar student = new StudentClass(\"Grace\", \"Wambui\");\nconsole.log(student.displayName()); // Grace\nconsole.log(student.workOnHomework()); // Currently working\n\n\n//# sourceURL=webpack:///./js/main.ts?");

/***/ })

/******/ });