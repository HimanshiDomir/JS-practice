class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname + ' '
    }
}
class Model extends Car {
    constructor(brand, model) {
        super(brand)
        this.model = model;
    }
    show() {
        return this.present() + 'I have a ' + this.model
    }
}

const car = new Model('Ford', 'Mustang');
console.log(car.show());