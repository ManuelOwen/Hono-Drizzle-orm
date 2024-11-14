import dotenv from 'dotenv';
import {verify} from "hono/jwt";
import { Context, Next } from 'hono';
import {ne} from "drizzle-orm"
import { error } from 'console';

interface HonoRequest <T, U> {
    user?: T;
}
// auth middleware
export const verifyToken = async (token: string, secret:string) =>{
    try{
        const decoded = await verify (token as string, secret);
        return decoded;
    }catch(error:any){
        return null;
    };
    
}
export const authMiddleware = async (c: Context & {req:HonoRequest<any , unknown>}, next: Next, requiredRole:string)=>{
    const token = c.req.header("Authorization");
    if(!token) return c.text("Token is required",401);
    const decoded = await verifyToken(token as string, process.env.JWT_SECRET as string);
    if (!decoded) return c.text("Invalid token",401);
    if (requiredRole === "both"){
        if (decoded.role === "admin" || decoded.role==="user"){
            c.req.user = decoded;
            return next();
        }
    }else if (decoded.role === requiredRole){
    c.req. user = decoded;
    return next();
    }
    return c. json({error: "unauthorized"}, 401);
}


export const adminRoleAuth = async (c: Context & {req:HonoRequest<any , unknown>}, next: Next) => {
    return authMiddleware(c, next, "admin");
}
export const userRoleAuth = async (c: Context & {req:HonoRequest<any , unknown>}, next: Next) => { return authMiddleware(c, next, "user"); }

export const bothRoleAuth = async (c: Context & {req:HonoRequest<any , unknown>}, next: Next) => { return authMiddleware(c, next, "both"); }