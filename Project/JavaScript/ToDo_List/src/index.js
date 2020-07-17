import * as data from './dataManaging.js';

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
            return (`"name": "${getName()}", "description"="${getDescription()}", "date"="${getDate()}", "priority"="${getPriority()}"\n`);
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
    data.dataSave(projectList);
    data.dataLoad();
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