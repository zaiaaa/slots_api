require('dotenv').config()
const mysql = require('mysql2')

let conn = ''

try{
    conn = mysql.createConnection({
        host: "slotsapi-gustavozaia75-0af4.h.aivencloud.com",
        port: 28047,
        user: "avnadmin",
        password: process.env.PASSWORD,
        database: 'defaultdb'
    })
}catch(e){
    conn = "erro -> ", e.message
}

module.exports = conn