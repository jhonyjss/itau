const express = require("express");
const connect = require("./config/database");

class App {
    constructor() {
        this.express = express();
        this.connect = connect;

        this.database();
        this.middlewares();
        this.routes();

        this.express.listen(3000, () =>
            console.log(`Sua API REST está funcionando na porta 3000 `)
        );
    }

    database() {
        return this.connect
    }

    middlewares() {
        
        this.express.use(express.json());
    }

    routes() {
        this.express.use(require("./routes/home"));
        this.express.use('/users',require("./routes/user"));
        this.express.use('/runtest',require("./routes/tests"));
    }
}
module.exports = new App().express;