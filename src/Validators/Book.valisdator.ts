import {z} from 'zod';


export const  UsersSchema = z.object({
    Author: z.string(),
    Tittle: z.string(),
    year_published: z.string(),
})