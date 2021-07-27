import { Router} from "express";
const routes = new Router();
import  UserController from "./app/controller/UserController"
import  GamerController from "./app/controller/GamerController"
//Users endpoint
routes.post("/users/", UserController.create)
routes.get("/users/", UserController.index)
routes.get("/users/nick_gamer/:type_email", UserController.listEmail)

routes.put("/users/:user_id/", UserController.update)
routes.delete("/users/:user_id/", UserController.destroy)

//Gamers endpoint
routes.post("/users/:user_id/gamers/", GamerController.create)
routes.get("/users/:user_id/gamers/", GamerController.index)
    
routes.put("/users/:user_id/gamers/:gamer_id/", GamerController.update)
routes.delete("/users/:user_id/gamers/:gamer_id/", GamerController.destroy)



export default routes

