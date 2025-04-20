class ConnTest{
    init(conn){
        this.conn = conn
        this.test()
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