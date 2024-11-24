const insertRide = require("../models/db_Rides")


module.exports = {

    async insert(request, response){
        const {customer_id} = request.body.customer_id;
        const {origin} = request.body.origin;
        const {destination} = request.body.destination;
        const {distance} = request.body.distance;
        const {duration} = request.body.duration;
        const {driver_id} = request.body.driver.id;
        const {driver_name} = request.body.driver.name;
        const {value} = request.body.value;

        await insertRide({customer: customer_id, 
            origin: origin, 
            destination: destination, 
            distance: distance, 
            duration: duration,
            driver_id: driver_id,
            driver_name: driver_name,
            value: value
        });
    }
}