const shoppingCart = [
    { name: 'shoe', price: 1500, quantity: 5 },
    { name: 'shirt', price: 900, quantity: 7 },
    { name: 'pant', price: 1100, quantity: 3 },
    { name: 'watch', price: 1700, quantity: 8 },
    { name: 'blazer', price: 2300, quantity: 2 },
]

function totalCost() {
    let sum = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        const product = shoppingCart[i];
        const productPrice = product.price * product.quantity;
        console.log(product.name, ':', productPrice)
        sum += productPrice;
    }
    return console.log('Grand total=', sum)
}

const expense = totalCost(shoppingCart);
console.log(expense)