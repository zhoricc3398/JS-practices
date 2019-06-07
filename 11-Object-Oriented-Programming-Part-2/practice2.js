{
    let waterAmount = 0;

    function CoffeeMachine(power) {
        waterAmount = 0;
        this.power = power;

        getTimeToBoil = function() {
            return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
        }

    }
    CoffeeMachine.prototype.getTimeToBoil = function() {
        return waterAmount * this.WATER_HEAT_CAPACITY * 80 / this.power;
    };
    CoffeeMachine.prototype.run = function () {
        setTimeout(function () {
            console.log('Coffee is ready!');
        }, this.getTimeToBoil());
    };
    CoffeeMachine.prototype.setWaterAmount = function (amount) {
        waterAmount = amount;
    };
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();