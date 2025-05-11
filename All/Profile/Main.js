const ctx = document.getElementById('Victory');
const Id = localStorage.getItem('PersonalId');
const Login = localStorage.getItem('Login');

if (!Id || !Login) {
    location.href = '../Log/Signin';
}

document.getElementById('Login').innerHTML = Login;
document.getElementById('Id').innerHTML = Id;

document.getElementById('Copy').addEventListener('click', function() {
    navigator.clipboard.writeText(Id);
});

// Victory Graph
new Chart(ctx, {
    type:'line',
    data: {
        labels: [0, 10, 20, 30, 40, 50],
        datasets: [{
            label:'График побед',
            data: [],
            fill:true,
            borderColor:'black',
            tension:0.1
        }]
    }
});