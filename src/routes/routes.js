import { Router } from "express";
import userController from "../controllers/userController.js";
const routes = new Router();

routes.get("/", userController.index);
routes.get("/register-email", userController.register);
routes.all("/*", userController.routerDefault);


export default routes;