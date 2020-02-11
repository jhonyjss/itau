var sqlite3 = require('sqlite3').verbose()
const DBSOURCE = "db.sqlite"

const db = new sqlite3.Database(DBSOURCE)
exports.getUsers = async function () {

    try {
        var sql = "select * from users"
        //Esperando db resolver as parada, então fazemos uma promessa.
        return new Promise((resolve, reject) => {
             db.all(sql, (err, rows) => {
            resolve(rows);
        });
        
    })
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
    
}

exports.storeUsers = async function (params) {

    try {
        var sql = "INSERT INTO users ('username','email') VALUES(?,?)"
        db.run(`${sql}`, [params.username, params.email], function (err) {
            if (err) {
                return console.log(err.message);
            }
            // get the last insert id
            console.log(`A row has been inserted with rowid ${this.lastID}`);
        });
        
       
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}