import {Hono} from "hono";
import {getUser, createUser,updateUser,deleteUser, listUsers } from "./UsersController";
// import {zValidator}from "@hono/zod-validator";
// import { Bookchema } from "../validators/user.validator"
import { adminRoleAuth } from "../middlewares/bearAuth";
// // import {Bookchema} from "../validators";
 
export const UsersRouter = new Hono();

// GET ALL Book
UsersRouter.get("/User", listUsers, adminRoleAuth);
//get a single user
UsersRouter.get("/User/:id", getUser , adminRoleAuth);
//create user
UsersRouter.post("/Userook", createUser, adminRoleAuth);
//update user
UsersRouter.put("/User/:id", updateUser, adminRoleAuth);
//delete user
 UsersRouter.delete("/User/:id", deleteUser, adminRoleAuth)


