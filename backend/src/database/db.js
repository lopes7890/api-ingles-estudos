import mysql from "mysql2";
import "dotenv/config";


// configurar conexão
const connection = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    port: process.env.port,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

// realizando conexão
connection.getConnection((err, result) => {
    if (err) {
        console.log("erro ao conectar")
        return 
    }

    console.log("conectado! ID:", result.threadId)
    result.release()
})

export const db = connection.promise()