function lowestFoodPrice (foods){
    foods.forEach(e => {
        e.ratio = e.price/e.carbs
        return e
    })
    foods = foods.sort(function (a, b) { return a.capacity - b.capacity  })
    let output = 0
    let remainder = 400
    let done =  false
    for (let i = 0; i < foods.length; i++) {
        if(done){
            break
        }
        if(remainder <= foods[i].carb){
            done = true
        }
        output += remainder > foods[i].carbs ? Math.floor(remainder / foods[i].carbs)*foods[i].price :
        Math.ceil(remainder / foods[i].carbs)*foods[i].price
        remainder = remainder % foods[i].carbs
    }
    return output
}

const foods = [
    {
        name:'rice',
        carbs:28,
        price:5600
    },
    {
        name:'corn',
        carbs:21,
        price:6300
    },
    {
        name:'potato',
        carbs:17,
        price:5100
    },
]

console.log(lowestFoodPrice(foods))