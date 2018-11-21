const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<h1>Welcome to Node.js Assignment - 1</h1><br /><br /><br />');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button>Submit</button></form>');
        return res.end();
    }
    if(url === '/users'){
        res.write('<h1>Param</h1><br />');
        res.write('<h1>Laxxx</h1>');
        return res.end();
    }
    if(url === '/create-user' && method === 'POST'){
        const data = [];
        req.on('data', (chunk) => {
            data.push(chunk);
        });
        req.on('end', () => {
            const parsedData = Buffer.concat(data).toString();
            console.log(parsedData);
            const finalData = parsedData.split('=')[1];
            console.log(finalData);
        });
    }
    res.statusCode = 404;
    res.write('NOT FOUND!');
    res.end();
}

module.exports = requestHandler;