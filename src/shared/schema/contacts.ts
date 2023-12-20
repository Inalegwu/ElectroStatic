import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";


export const contacts=sqliteTable("contacts",{
    id:text("id"),
    name:text("name"),
    phoneNumber:integer("phone_number",{
        mode:"number"
    })
})