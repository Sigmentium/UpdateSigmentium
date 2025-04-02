const Data = ["document.getElementById('FIO')", "document.getElementById('Save')"];

window.onload = function() {
    if (localStorage.getItem('Name') !== null) {
        Data[0].innerHTML = "";
        Data[1].innerHTML = "";
    }
}

document.getElementById('SaveButton').addEventListener('click', function() {
    const Name = document.getElementById('Name').value;

    if (Name.length === 0) {
        alert('Поле обязательно для заполнения!');
    }
    else {
        localStorage.setItem('Name', Name);
        window.location.reload();
    }
});