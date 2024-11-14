import { eq } from "drizzle-orm";
import { db } from "../Drizzle/db";
import { TIBook, TSBook, BookTable } from "../Drizzle/schema";

export const UsersService = async (limit?: number): Promise<TSBook[]> => {
    if(limit){
        return await db.query.BookTable.findMany({limit:limit})
    }
    return await db.query.BookTable.findMany();
}

export const getUserService = async (id: number): Promise<TIBook | undefined> => {
    return await db.query.BookTable.findFirst({
        where: eq(BookTable.id, id)
    })
}



 export const createUserService = async (Book:TIBook)=> {
    await db.insert(BookTable).values(Book)
    return "Book created successfully";
 }
    export const updateUserService = async (id:number, Book:TIBook)=>{
        await db.update(BookTable).set(Book).where(eq(BookTable.id, id))
        return "Book updated successfully";
    }
    export const deleteUserService= async (id:number)=>{
        await db.delete(BookTable).where(eq(BookTable.id, id))
        return "Book deleted successfully";
    }