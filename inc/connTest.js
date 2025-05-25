class ConnTest{
    init(conn){
        this.conn = conn
        this.test()
        this.build()
    }

    build(){
        const sql = `CREATE TABLE IF NOT EXISTS users (
            id_user INT AUTO_INCREMENT PRIMARY KEY,
            cpf VARCHAR(14) NOT NULL UNIQUE,
            username VARCHAR(50) NOT NULL UNIQUE,
            name VARCHAR(100) NOT NULL,
            password VARCHAR(100) NOT NULL
        )`

        this.conn.query(sql, (err) => {
            if(err){
                console.log(err);
                return;
            }
        })

        console.log('tabela criada!')
    }

    test(){
        const sql = `SELECT * FROM users;`

        this.conn.query(sql, (err) => {
            if(err){
                console.log(err);
                return;
            }
        })

        console.log('Banco funcionando!')
    }
}

module.exports = new ConnTest();