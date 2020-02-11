var sqlite3 = require('sqlite3').verbose()
const DBSOURCE = "db.sqlite"

const db = new sqlite3.Database(DBSOURCE, (err) => {
    console.log('Connected to the SQLite database')
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            username text, 
            email text UNIQUE)`,
            (err) => {
                if (err) {
                    console.error(err.message)
                }
            });
    }
});
    
module.exports = db