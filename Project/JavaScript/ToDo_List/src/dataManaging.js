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

export {dataSave, dataLoad};