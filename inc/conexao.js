require('dotenv').config()
const mysql = require('mysql2')

let conn = ''

try{
    conn = mysql.createConnection({
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: process.env.PASSWORD,
        database: 'bet'
    })
}catch(e){
    conn = "erro -> ", e.message
}

module.exports = conn