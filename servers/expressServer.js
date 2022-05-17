const express = require('express');

const app = express()

module.exports.startServer = function(client, port, cards) {
    async function getMissingCard(key) {
        const count = await client.incr(key)
        if (count > cards.length) {
            return undefined;
        }
        return cards[count - 1];
    }
    
    app.get('/card_add', async (req, res) => {
        const  key = 'user_id:' + req.query.id
        let missingCard = ''
        missingCard = await getMissingCard(key);
        
        if(missingCard === undefined){
            res.send({id: "ALL CARDS"})
            return
        }
    
        res.send(missingCard)
    })
    
    app.get('/ready', async (req, res) => {
        res.send({ready: true})
    }) 

    app.listen(port, '0.0.0.0', () => {
        console.log(`Example app listening at http://0.0.0.0:${port}`)
    })
}