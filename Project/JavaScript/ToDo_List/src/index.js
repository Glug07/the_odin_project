if (storageAvailable('localStorage')) {
    alert("test");

    console.log(localStorage.getItem('testing-local-storage'));
} else {
    alert("test");
    localStorage.setItem('testing-local-storage', prompt("test"));
}
