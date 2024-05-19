import { Router } from "express";
import { create, getAllUsers, getUser } from "../controllers/userController.js";

const routes = Router();

routes.get("/users/:id", getUser);
routes.get("/users", getAllUsers);
routes.post("/users", create);

export default routes;
