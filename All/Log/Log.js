let Data;

document.getElementById('In').addEventListener('click', function() {
    const Login = document.getElementById('Login').value;
    const Pass = document.getElementById('Pass').value;

    fetch('', {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            login: Login,
            password: Pass
        })
    })
        .then(response => response.json())
        .then(data => console.log(data));
});