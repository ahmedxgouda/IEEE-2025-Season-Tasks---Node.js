const { createServer } = require('http');
const { parse } = require('url');

const server = createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    if (req.method == 'GET') {
        let parsedUrl = parse(req.url, true);
        if ('a' in parsedUrl.query == false || 'b' in parsedUrl.query == false) {
            res.statusCode = 400;
            res.end(JSON.stringify({error: 'Missing parameters'}));
        }
        else if (isNaN(parsedUrl.query.a) || isNaN(parsedUrl.query.b) || parsedUrl.query.a == '' || parsedUrl.query.b == '') {
            res.statusCode = 400;
            res.end(JSON.stringify({error: 'Invalid parameters'}));
        }
        else {
            let a = parseInt(parsedUrl.query.a);
            let b = parseInt(parsedUrl.query.b);
            res.statusCode = 200;
            if (parsedUrl.pathname == '/add') {
                res.end(JSON.stringify({ result: a + b }));
            }
            else if (parsedUrl.pathname == '/subtract') {
                res.end(JSON.stringify({result: a - b}));
            }
            else if (parsedUrl.pathname == '/multiply') {
                res.end(JSON.stringify({result: a * b}));
            }
            else if (parsedUrl.pathname == '/divide') {
                res.end(JSON.stringify({result: a / b}));
            }
            else {
                res.statusCode = 400;
                res.end(JSON.stringify({error: 'Invalid operation'}));
            }
        }
    }
    else {
        res.statusCode = 405;
        res.end(JSON.stringify({error: 'Method not allowed'}));
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
