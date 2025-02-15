class Property {
    constructor (area, price) {
        this.area = area;
        this.price = price;
    }

    getPricePerSquareMeter() {
        return this.price / this.area
    }
}

class House extends Property { }

const land = new Property (200, 500000);

const someHouse = new House (50, 300000);

console.log(land)   
console.log(someHouse.getPricePerSquareMeter)