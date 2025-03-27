let Player;
let Opponent;
let Count = 0;

function Winner(Player, Opponent) {
    if (Player === Opponent) {
        alert('Ничья');
    }
    else if ((Player === 'Камень' && Opponent === 'Ножницы') ||
             (Player === 'Ножницы' && Opponent === 'Бумага') ||
             (Player === 'Бумага' && Opponent === 'Камень')) {
        alert('Вы выиграли!');
    }
    else {
        alert('Вы проиграли!');
    }
}

function Check() {
    if (Player !== null && Opponent !== null) {
        document.getElementById('Start').addEventListener('click', function() {
            Winner(Player, Opponent);
        });
    }
}

const Names = ["Александ", "Алексей", "Игнат", "Максим", "Ашот", "Сергей", "Наталия", "Ольга", "Наиле", "Мирослав", "Денис", "Дарья", "Елисей", "Герасим", "Константин"];
const RandomName = Math.floor(Math.random() * (14 - 0 + 1)) + 1;

document.getElementById('Player').innerHTML += `<H1>Вы</H1>`
document.getElementById('Eminem').innerHTML += `<H1>${Names[RandomName]}</H1>`;

// Выбор игрока
document.getElementById('Stone').addEventListener('click', function() {
    Player = "Камень";
    alert('Отлично! Вы выбрали камень!');
    document.getElementById('Items').innerHTML = '<button id="Start">Начать игру</button>';
    Check();
});

document.getElementById('Scissors').addEventListener('click', function() {
    Player = "Ножницы";
    alert('Отлично! Вы выбрали ножницы!');
    document.getElementById('Items').innerHTML = '<button id="Start">Начать игру</button>';
    Check();
});

document.getElementById('Paper').addEventListener('click', function() {
    Player = "Бумага";
    alert('Отлично! Вы выбрали бумагу!');
    document.getElementById('Items').innerHTML = '<button id="Start">Начать игру</button>';
    Check();
});

// Выбор противника
const RandomItem = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

if (RandomItem === 1) {
    Opponent = "Камень";
}
else if (RandomItem === 2) {
    Opponent = "Ножницы";
}
else if (RandomItem === 3) {
    Opponent = "Бумага";
}

// Решение