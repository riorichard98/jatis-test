function numberOfBottles(bottles, capacity) {
    bottles = bottles.sort(function (a, b) { return b.capacity - a.capacity })
    let output = 0
    let remainder = capacity
    let done =  false
    for (let i = 0; i < bottles.length; i++) {
        if(done){
            break
        }
        if(remainder <= bottles[i].capacity){
            done = true
        }
        output += remainder > bottles[i].capacity ? Math.floor(remainder / bottles[i].capacity) :
        Math.ceil(remainder / bottles[i].capacity)
        remainder = remainder % bottles[i].capacity
    }
    return output
}

let bottles = [
    {
        num : 1,
        capacity : 5
    },
    {
        num : 2,
        capacity : 7
    },
    {
        num : 3,
        capacity : 11
    }
]
console.log(numberOfBottles(bottles,100));

