const mysql = require("mysql2/promise");

async function dbConnect(){
    if(global.connection && global.connection.state !== "disconnected")
        return global.connection;
 
    const connection = await mysql.createConnection("mysql://camilo:1234@localhost:3306/db_projeto_shopper");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

module.exports = dbConnect;