const http = require('http');

const port = process.env.PORT || 1000;

let Data = GetData();

function SaveData(data) {
    fs.writeFileSync('Data.json', JSON.stringify(data, null, 2), 'utf8');
}

function GetData() {
    if (fs.existsSync('Data.json')) {
        const data = fs.readFileSync('Data.json', 'utf8');
        return JSON.parse(data);
    }
    return {};
}

function GenerateId(length) {
    let result = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // Log
    if (req.url === '/api/signin' && req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            const { login, password } = JSON.parse(body);

            if (!Data[login]) {
                res.writeHead(401, {'Content-Type':'text/plain'});
                res.end('401 Unauthorized');
            }
            else {
                if (Data[login].password === password) {
                    res.writeHead(200, {'Content-Type':'application/json'});
                    res.end(JSON.stringify({
                        id: Data[login].id,
                        login: login,
                        password: password
                    }));
                }
                else {
                    res.writeHead(401, {'Content-Type':'text/plain'});
                    res.end('401 Unauthorized');
                }
            }
            return;
        });
        return;
    }

    if (req.url === '/api/signup' && req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            const { login, password } = JSON.parse(body);
            const id = GenerateId(6);

            Data[login] = {
                id: id,
                password: password
            };
            SaveData(Data);

            res.writeHead(200, {'Content-Type':'application/json'});
            res.end(JSON.stringify({
                id: id,
                login: login,
                password: password
            }));
        });
    }
});

server.listen(port, '0.0.0.0', () => {
    console.log('> Succesful start');
});