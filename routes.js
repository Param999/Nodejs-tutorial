const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === "/"){
        res.write('<body><form action="/msg" method="post"><input type="text" name="msg"><button>Send</button></form></body>');
        return res.end();
    }
    if(url === '/msg' && method === "POST"){
        const data = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            data.push(chunk);
        });
        req.on('end', () => {
            const parsedData = Buffer.concat(data).toString();
            console.log(parsedData);
            const realData = parsedData.split('=')[1];
            fs.writeFileSync('msg.txt',realData);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    
    res.write("<h1>Yo bro raa soo!!</h1>");
    res.end();
}

module.exports = requestHandler;