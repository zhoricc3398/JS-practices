{
    let waterAmount = 0;
    let getTimeToBoil;

    function CoffeeMachine(power) {
        waterAmount = 0;
        var WATER_HEAT_CAPACITY = 4200;

        getTimeToBoil = function() {
            return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
        }

    }
    CoffeeMachine.prototype.run = function () {
        setTimeout(function () {
            console.log('Coffee is ready!');
        }, getTimeToBoil());
    }
    CoffeeMachine.prototype.setWaterAmount = function (amount) {
        waterAmount = amount;
    };
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();