const dbConnect = require("../config/dbConfig");

// Pegando todos os dados na tabela rides_table
async function selectRides(){
    const conn = await dbConnect();
    const [rides] = await conn.query('SELECT * FROM rides_table;');
    return rides;
}

// Inserindo dados na tabela customers_table
async function insertRide(ride) {

    // pega a data atual e formata.
    const dataHora = new Date();
    ride.data = dataHora.toISOString().slice(0, 19).replace('T', ' ');

    const conn = await dbConnect();
    const sql = 'INSERT INTO customers_table (customer_id, ride_data_hora, ride_origin, ride_destination, ride_distance, ride_duration, fk_driver_id=? , ride_driver_name=?, ride_value=?) VALUES (?,?,?,?,?,?)';
    const values = [ride.customer, 
        ride.data, 
        ride.origin, 
        ride.destination, 
        ride.distance, 
        ride.duration, 
        ride.driver_id, 
        ride.driver_name, 
        ride.value 
    ];
    return await conn.query(sql, values);
}

module.exports = {selectRides, insertRide};