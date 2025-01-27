/* import mysql from "mysql2";
import "dotenv/config";


// configurar conexão
const connection = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT_BD,
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

export const db = connection.promise() */