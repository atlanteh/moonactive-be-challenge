const turbo = require('turbo-http')

module.exports.startServer = function(client, port, cards) {
    
    const server = turbo.createServer(async function (req, res) {
        // res.setHeader('content-type', 'application/json')
        let result = "";
        if (req.url !== '/ready') {
            // getUserCard
            const  key = 'user_id:' + req.url.substr(13);
            const count = await client.incr(key)
            if (count > cards.length) {
                result = '{"id": "ALL CARDS"}';
            } else {
                const card = cards[count - 1];
                result = '{"id": "' + card.id +'", "name": "' + card.name + '"}'
            }
        } else {
            result = '{"ready": true}'
        }
    
        // const resultStr = JSON.stringify(result);
        const resultStr = result;
        res.setHeader('Content-Length', resultStr.length)
        res.write(result)
    })

    server.listen(port)
}