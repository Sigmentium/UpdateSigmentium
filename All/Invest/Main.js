const FIO = ["document.getElementById('FIO')", "document.getElementById('FIO1')"];

window.onload = function() {
    if (localStorage.getItem('Name') === null) {
        FIO[0].innerHTML = '<input type="text" id="Name" class="center" placeholder="ФИО">';
        FIO[01].innerHTML = '<input type="text" id="Name" class="center" placeholder="ФИО">';
    }
    else {
        FIO[0].innerHTML = `<H2>${localStorage.getItem('Name')}</H2>`;
        FIO[1].innerHTML = `<H2>${localStorage.getItem('Name')}</H2>`;
        document.getElementById('SaveButton').innerHTML = "";
    }
}

document.getElementById('SaveData').addEventListener('click', function() {
    const Name = document.getElementById('Name').value;

    if (Name.length === 0) {
        alert('Поле обязательно для заполнения!');
    }
    else {
        localStorage.setItem('Name', Name);
        window.location.reload();
    }
});