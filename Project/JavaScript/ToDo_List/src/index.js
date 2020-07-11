(function () {
    if (typeof (Storage) !== "undefined") {
        console.log("Supported\n");
    } else {
        console.log("Not Supported\n");
    }

    const project = (function(name) {
        const _name = name;
        let _taskList = [];

        const getName = () => _name;
        const getTaskList = () => _taskList;
        const addTask = (task) => _taskList.push(task);
        const deleteTask = (taskPosition) => _taskList.splice(taskPosition, 1);
        const toJSON = () => {getName(), getTask

        }

        return {
            getName,
            getTaskList,
            addTask,
            deleteTask
        };
    });

    const task = (function(name, description, date, priority) {
        let _name = name;
        let _description = description;
        let _date = date;
        let _priority = priority;

        const getName = () => _name;
        const getDescription = () => _description;
        const getDate = () => _date;
        const getPriority = () => _priority;

        return {
            getName,
            getDescription,
            getDate,
            getPriority
        };
    });

    function saveData() {
        //const project_testing = project("project_testing");
        
        alert(JSON.stringify(myObject));
        console.log(localStorage.getItem("project_testing"));
    }
    saveData();
})();