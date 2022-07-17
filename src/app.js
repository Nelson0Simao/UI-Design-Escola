import express  from "express";
import routes from "./routes/routes.js";
class App{
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }
    async middlewares(){
        this.app.use(express.json());
        this.app.use(async (req, res, next) =>{
            res.header("Access-Controll-Allow-Origin", "*");
            res.header("Access-Controll-Allow-Mathods", "GET, POST, DELETE, PUT");
            res.header("Access-Controll-Allow-Headers", "Access, Content-type, Authorization, Acept, Origin, x-Requested-Width");
            next();
        })
    }   
    async routes(){
        this.app.use(routes);
    }
}

export default new App().app;
