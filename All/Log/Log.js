const Owner = 'Sigmentium';
const Repo = 'Base1';
const FilePath = '1.txt';
const Content = 'User1';

async function PushBase() {
    const url = `https://api.github.com/repos/${Owner}/${Repo}/contents/${FilePath}`;
    const code = btoa(unescape(encodeURIComponent(Content)));

    const response = await fetch(url, {
        method:'PUT',
        headers: {
            'Authorization': `token ${Token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: 'New user',
            content: code
        })
    });

    if (response.ok === true) {
        alert('Успешная авторизация!');
        location.href = '/';
    }
    else {
        alert('Ошибка. Пожалуйста, попробуйте снова');
        window.location.reload();
    }
}

// async function GetBase() {
//     const url = `https://api.github.com/repos/${Owner}/${Repo}/contents/${FilePath}`;

//     const response = await fetch(url, {
//         headers: {
//             'Authorization': `token ${Token}`
//         }
//     });

//     if (response.ok === true) {
//         const data = await response.json();
//         const decode = decodeURIComponent(escape(atob(data.content)));
//     }
// }

document.getElementById('Start').addEventListener('click', function() {
    PushBase();
});