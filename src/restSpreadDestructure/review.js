//rest - params(c#) - varArgs(Java)
let showProducts=function (id,...products) {
    console.log(id)
    console.log(products) //array 
}

//console.log(typeof showProducts) gives function
//showProducts(10,"elma","armut","karpuz") rest(holds array): .., .., ..

//spread
let points=[1,2,3,4,50,4,60,14]
console.log(...points) //spread the points(array)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H") //spread the array as A, B, C and "EFG" as well

//Destructuring*** arrayin degerlerini degiskenlere atama
let populations=[10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small) //10000
console.log(medium) //20000
console.log(high) //30000
console.log(veryHigh) //40000
console.log(maximum) //100000

function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)

let category={id:1, name:"icecek"}
console.log(category.id) // both can be used
console.log(category["name"])

let{id,name}=category //destruct the objects
console.log(id)
console.log(name)