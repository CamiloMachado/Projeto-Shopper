const selectDrivers = require("../models/db_Drivers");
const insertRide = require("../models/db_Rides")

module.exports = {

    async post(request, response){
        
        const customer_id = request.body.customer_id;
        const origin  = request.body.origin;
        const destination = request.body.destination;
        //const retornoAPIGoogle = "";
        
        console.log(customer_id);
        console.log(origin);
        console.log(destination);


        const [drivers] = await selectDrivers(distance);
        
        console.log(drivers);

        const dados_viagem = {
            "origin": {
                "latitude": retornoAPIGoogle.origin.latitude,
                "longitude": retornoAPIGoogle.origin.longitude
            },
            "destination": {
                "latitude": retornoAPIGoogle.destination.latitude,
                "longitude": retornoAPIGoogle.destination.longitude
            },
            "distance": retornoAPIGoogle.distance,
            "duration": retornoAPIGoogle.duration,
            "options": [drivers],
            "routeResponse": retornoAPIGoogle.routeResponse   
        }

        return drivers;
    }
}