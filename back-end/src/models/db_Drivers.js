const dbConnect = require("../config/dbConfig");

// Pegando todos os dados na tabela drivers_table
async function selectDrivers(distance){
    const conn = await dbConnect();
    const sql = 'SELECT * FROM drivers_table WHERE km_Minimum <= ?';
    return await conn.query(sql,distance);
}

module.exports = selectDrivers;