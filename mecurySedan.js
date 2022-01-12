//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

class sedan extends VehicleModule.Vehicle {
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("mustang", "Sedan", "1965", "color", "mileage");
console.log(v.make)

let sedan = new sedan("mustang", "sedan", "2001", "red", '35000')
console.log(sedan.speed)