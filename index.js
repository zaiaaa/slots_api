const express = require('express')
const app = express()
const router = require('./routes/index')
const conn = require('./inc/conexao')
const connTest = require('./inc/connTest')


connTest.init(conn)
router(app, express)

app.get('/', (req, res) => {
    res.send({"message": "vtnc", "idade": 12})
})

app.listen(3005, (e) => {
    if(e){
        console.log(e.message)
    }
    console.log('rodando na 3005')
})