class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;
    }

    addtoStock(quantity) {    
        this.inStock += quantity
    }

    calculateDiscount(discount) {
        return this.price * ((100 - discount) / 100);
    }
}

// exemplo de uso

const product1 = new Product("Camisa", "Camisa de algodão", 50);  

product1.addtoStock(10);
const discountPrice = product1.calculateDiscount(10); 

console.log(product1)
