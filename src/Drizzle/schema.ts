import { relations } from "drizzle-orm";
import { serial, text, timestamp, pgTable, pgEnum, integer, varchar,boolean } from "drizzle-orm/pg-core";
export const roleEnum = pgEnum("role", ["admin", "user", "both"])
// usertable
export const userTable =pgTable("user",{
    id:serial("id").notNull().primaryKey(),
    full_name: varchar("full_name", {length:255}).notNull(),
    email: varchar("email", {length:255}).notNull(),
    password: varchar("password", {length:255}).notNull(),
    role: roleEnum("role").default("user"),
    contact_phone: varchar("contact_phone", {length:255}).notNull(),
    createdAt: timestamp("createdAt").defaultNow(),
    updatedAt: timestamp("createdAt").defaultNow()

})
// hospital table
export const hospitalTable = pgTable ("hospital", {
id:serial("id").notNull().primaryKey(),
hospital_name:varchar("hospital_name", {length:255}).notNull(),
location:varchar("location", {length:255}).notNull(),
})
// doctorTable
export const doctorTable = pgTable("doctor", {
    id:serial("id").notNull().primaryKey(),
    doctor_name:varchar("doctor_name", {length:255}).notNull(),
    department_id:integer("department_id").notNull().references(()=>departmentTable.id, {onDelete:"cascade"}),
    hospital_id:integer(" hospital_id").notNull().references(()=>hospitalTable.id, {onDelete:"cascade"}),
})
// department table
   export const departmentTable = pgTable("department" ,{
    id: serial("id").notNull().primaryKey(),
    hospital_id:integer(" hospital_id").notNull().references(()=>hospitalTable.id, {onDelete:"cascade"}),
    department_name:varchar("department_name", {length:255}).notNull(),
    specification:varchar("specification", {length:255}).notNull(),
    doctor_id:varchar("doctor_id")


   }) 
//    Type definitions
export type Tiuser = typeof userTable.$inferInsert;
export type TSuser = typeof userTable.$inferSelect;
 export type TIhospital = typeof hospitalTable.$inferInsert
 export type TShospital = typeof hospitalTable.$inferSelect;
 export type TIdepartment = typeof departmentTable.$inferInsert
 export type TSdepartment = typeof departmentTable.$inferSelect;
 export type TIdoctor = typeof departmentTable.$inferInsert;
 export type TSdoctor = typeof hospitalTable.$inferSelect;






  