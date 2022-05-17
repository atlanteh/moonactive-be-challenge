const net = require('net');

module.exports.startServer = function(client, port, cards) {
    const server = net.createServer();  

    async function getMissingCard(key) {
        const count = await client.incr(key)
        if (count > cards.length) {
            return undefined;
        }
        return cards[count - 1];
    }

    async function getUserCard(userId) {
        const  key = 'user_id:' + userId;
        const missingCard = await getMissingCard(key);
        return missingCard || {id: "ALL CARDS"}
    }
    
    server.on('connection', async function(socket) {
        socket.on('data', async function(chunk) {
            const [method, url] = chunk.toString().split(" ", 3);
            let result = "";
            if (url === '/ready') {
                result = {ready: true}
            } else {
                result = await getUserCard(url.substr(13));
            }

            const resultStr = JSON.stringify(result);
            socket.write(`HTTP/1.1 200 OK\r\nContent-Length: ${resultStr.length}\r\nConnection: false\r\n\r\n${resultStr}`);
        });

        // let result = "";
        // if (req.url === '/ready') {
        //     result = {ready: true}
        // } else {
        //     result = await getUserCard(req);
        // }
    
        // const resultStr = JSON.stringify(result);
        // res.setHeader('Content-Length', resultStr.length)
        // res.write(Buffer.from(resultStr))
    })

    server.listen(port, function() {
        console.log(`Server listening for connection requests on socket localhost:${port}`);
    });
}