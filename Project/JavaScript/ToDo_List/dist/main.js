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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/dataManaging.js
function dataSave(dataToSave) {
    for (const element in dataToSave) {
        localStorage.setItem(`project ${element}`, dataToSave[element].toJSON());
    }
}

function dataLoad() {
    let dataList = [];
    let projectLoad = '';

    for (let index = 0; (projectLoad = localStorage.getItem(`project ${index}`)) != null; index += 1) {
        alert(projectLoad["name"]);
    }
    return (dataList);
}


// CONCATENATED MODULE: ./src/index.js


(function () {
    if (typeof (Storage) !== "undefined") {
        console.log("Supported\n");
    } else {
        console.log("Not Supported\n");
    }

    const project = (function (name) {
        const _name = name;
        let _taskList = [];

        const getName = () => _name;
        const getTaskList = () => _taskList;
        const addTask = (task) => _taskList.push(task);
        const deleteTask = (taskPosition) => _taskList.splice(taskPosition, 1);
        const toJSONTaskList = function () {
            let tasksString = "";

            _taskList.forEach(task => {
                tasksString += task.toJSON();
            });
            return (tasksString);
        }
        const toJSON = function () {
            return (`name=${getName()}\n${toJSONTaskList()}`);

        }
        return {
            getName,
            getTaskList,
            addTask,
            deleteTask,
            toJSON
        };
    });

    const task = (function (name, description, date, priority) {
        let _name = name;
        let _description = description;
        let _date = date;
        let _priority = priority;

        const getName = () => _name;
        const getDescription = () => _description;
        const getDate = () => _date;
        const getPriority = () => _priority;
        const toJSON = function () {
            return (`'name':'${getName()} description=${getDescription()} date=${getDate()} priority=${getPriority()}\n`);
        }

        return {
            getName,
            getDescription,
            getDate,
            getPriority,
            toJSON
        };
    });
    let projectList = [];// = data.dataLoad();
    let task1 = task("1", "2", "3", "4");
    let project1 = project("nameproject");
    project1.addTask(task1);
    projectList.push(project1);
    dataSave(projectList);
    dataLoad();
    window.onbeforeunload = function (event) {
        var message = 'Important: Please click on \'Save\' button to leave this page.';
        if (typeof event == 'undefined') {
            event = window.event;
        }
        if (event) {
            event.returnValue = message;
        }
    };
})();

/***/ })
/******/ ]);