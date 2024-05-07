// Import Classes Here
const Product = require('./classes/Product'); // Adjust the path if needed


const carrots = new Product("Carrots", 4, "Bushel of carrots that have been freshly harvested for you");

carrots.inStock; // true
carrots.display(); // "Name: Carrots, Price: $4, Description: Bushel of carrots that have been freshly harvested for you"




// DO NOT EDIT BELOW THIS LINE
try {
    module.exports = {
        Product,
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart
    }
} catch(e){

}
n
try {
    module.exports = {
        Product,
        Cart,
        Customer
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer,
        Auth
    }
} catch(e){

}