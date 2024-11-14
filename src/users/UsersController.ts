import { deleteUserService,updateUserService,getUserService,createUserService,UsersService  } from "./UsersService"
import { Context } from "hono"

export const listUsers = async (c:Context) => {
    try{
        const User = await UsersService();
        if(User == null) return c.text(" User not found ",404)
        return c.json(User,200)
    }catch  (error:any) {
        return c.text(error?.message,400)
    }
}
//get a single User
export const getUser = async (c:Context) => {
    try{
        const id = parseInt(c.req.param("id"));
        const User = await getUserService(id);
        if(User == null) return c.text(" User not found ",404)
        return c.json(User,200)
    }catch  (error:any) {
        return c.text(error?.message,400)
    }
}
//create a User


export const createUser = async (c:Context) => {
    try{
        const Book = await c.req.json();
        const createdBook = await createUserService(Book);
        if(!Book) return c.text(" Book not created ",400)


        return c.json(Book,201)
    }catch  (error:any) {
        return c.text(error?.message,400)
    }
}


//update a Book
export const updateUser = async (c:Context) => {

    const id = Number(c.req.param("id"));
    const Book = await c.req.json();
    try{
        if(isNaN(id))  return c.text("Invalid ID ",400)
            const existingBook = await getUser(c);
        if(existingBook == undefined) return c.text("Book not found ",404)
        //update driver
        const updateBook = await updateUserService(id,Book);
        return c.json({msg: updateBook},200)
        return c.text(Book,200)
    }catch  (error:any) {
        return c.text(error?.message,400)
    }
}
//delete a Book

export const deleteUser = async (c:Context) => {
    // return c.text("Not implemented yet",501)
    const id = Number(c.req.param("id"));
    try{
        if(isNaN(id))  return c.text("Invalid ID ",400)
        //search for driver
        const existingBook = await getUserService(id);
        if(existingBook == undefined) return c.text("Driver not found ",404)
        //delete driver
        const deletedDriver = await deleteUserService(id);
        return c.json({msg: deletedDriver},200)
    } catch (error:any) {
        return c.text(error?.message,400)
    }
}