const orderPizza = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve('Your pizza is ready for delivery!'), 3000})
    })
}

const orderDrink = () => {
    return new Promise()
}

console.log(orderPizza())
