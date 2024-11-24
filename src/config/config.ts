import { config as conf } from "dotenv";

conf()

const _config = {
    port: process.env.PORT || 3000,
    databaseUrl: process.env.DB_URL,
    dbName: process.env.DB_NAME,
    

}

export const config  = Object.freeze(_config) //read only