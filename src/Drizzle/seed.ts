import {db} from "../Drizzle/db"
import { userTable,doctorTable, departmentTable, hospitalTable} from "../Drizzle/schema"

// export const userTable =pgTable("user",{
//     id:serial("id").notNull().primaryKey(),
//     full_name: varchar("full_name", {length:255}).notNull(),
//     password: varchar("password", {length:255}).notNull(),
//     email: varchar("email", {length:255}).notNull(),
//     role: roleEnum("role").default("user"),
//     contact_phone: varchar("contact_phone", {length:255}).notNull(),
//     createdAt: timestamp("createdAt").defaultNow(),
//     updatedAt: timestamp("createdAt").defaultNow()

// })
const user = [
    {
        full_name: "john doe",
        email: "jd@gmail.com",
        password: "123456",
        role: "admin",
        contact_phone: "08012345678",
    },
]
const hospital = [
    {
        hospital_name: "St. Mary's Hospital",
        location: "Lagos",
    },
    {
        hospital_name: "St. Mary's Hospital",
        location: "Lagos",
    },
    {
        hospital_name: "St. Mary's Hospital",
        location: "Lagos",
    },
    {
        hospital_name: "St. Mary's Hospital",
        location: "Lagos",
    },
    {
        hospital_name: "St. Mary's Hospital",
        location: "Lagos",
    },
    {
        hospital_name: "St. Mary's Hospital",
        location: "Lagos",
    },
    {
        hospital_name: "St. Mary's Hospital",
        location: "Lagos",
    },
    {
        hospital_name: "St. Mary's Hospital",
        location: "Lagos",
    },
    {
        hospital_name: "St. Mary's Hospital",
        location: "Lagos",
    },
    {
        hospital_name: "St. Mary's Hospital",
        location: "Lagos",
    },
]
// // hospital table
// export const hospitalTable = pgTable ("hospital", {
//     id:serial("id").notNull().primaryKey(),
//     hospital_name:varchar("hospital_name", {length:255}).notNull(),
//     location:varchar("location", {length:255}).notNull(),
//     })
const doctor = [
    {
        doctor_name: "Dr. John Doe",
        department_id: 1,
        hospital_id: 1,
    },
    {
        doctor_name: "Dr. John Doe",
        department_id: 1,
        hospital_id: 1,
    },
    {
        doctor_name: "Dr. John Doe",
        department_id: 1,
        hospital_id: 1,
    },
    {
        doctor_name: "Dr. John Doe",
        department_id: 1,
        hospital_id: 1,
    },
    {
        doctor_name: "Dr. John Doe",
        department_id: 1,
        hospital_id: 1,
    },
    {
        doctor_name: "Dr. John Doe",
        department_id: 1,
        hospital_id: 1,
    },
    {
        doctor_name: "Dr. John Doe",
        department_id: 1,
        hospital_id: 1,
    },
    {
        doctor_name: "Dr. John Doe",
        department_id: 1,
        hospital_id: 1,
    },
    {
        doctor_name: "Dr. John Doe",
        department_id: 1,
        hospital_id: 1,
    },
    {
        doctor_name: "Dr. John Doe",
        department_id: 1,
        hospital_id: 1,
    },
]
// department table
// export const departmentTable = pgTable("department" ,{
//     id: serial("id").notNull().primaryKey(),
//     hospital_id:integer(" hospital_id").notNull().references(()=>hospitalTable.id, {onDelete:"cascade"}),
//     department_name:varchar("department_name", {length:255}).notNull(),
//     specification:varchar("specification", {length:255}).notNull(),
//     doctor_id:varchar("doctor_id")


//    }) 
const department = [
    {
        hospital_id: 1,
        department_name: "Cardiology",
        specification: "Heart",
        doctor_id: 1,
    },
    {
        hospital_id: 1,
        department_name: "Cardiology",
        specification: "Heart",
        doctor_id: 1,
    },
    {
        hospital_id: 1,
        department_name: "Cardiology",
        specification: "Heart",
        doctor_id: 1,
    },
    {
        hospital_id: 1,
        department_name: "Cardiology",
        specification: "Heart",
        doctor_id: 1,
    },
    {
        hospital_id: 1,
        department_name: "Cardiology",
        specification: "Heart",
        doctor_id: 1,
    },
    {
        hospital_id: 1,
        department_name: "Cardiology",
        specification: "Heart",
        doctor_id: 1,
    },
    {
        hospital_id: 1,
        department_name: "Cardiology",
        specification: "Heart",
        doctor_id: 1,
    },
    {
        hospital_id: 1,
        department_name: "Cardiology",
        specification: "Heart",
        doctor_id: 1,
    },
    {
        hospital_id: 1,
        department_name: "Cardiology",
        specification: "Heart",
        doctor_id: 1,
    },
    {
        hospital_id: 1,
        department_name: "Cardiology",
        specification: "Heart",
        doctor_id: 1,
    }
]




async function  seed(){
    await db .insert(userTable).values(user)
    
}
seed().then (()=> console.log("seeded succesfully")).catch (console.error)
    


