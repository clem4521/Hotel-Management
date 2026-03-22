import mysql2 from "mysql2/promise";

import dotenv from "dotenv";
dotenv.config({quiet:true});

/*fix this later*/
//@ts-expect-error
export const mysqlConfig = await mysql2.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
});
