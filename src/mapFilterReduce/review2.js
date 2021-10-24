let products=[
    {id:1, name:"Acer LAptop", unitPrice:15000},
    {id:2, name:"Asus LAptop", unitPrice:16000},
    {id:3, name:"Hp LAptop", unitPrice:13000},
    {id:4, name:"Dell LAptop", unitPrice:12000},
    {id:5, name:"Casper LAptop", unitPrice:17000},
]

console.log("<ul>")
products.map(product=>console.log('<li>${product.name}</li>'))
console.log("</ul>")

products.map(product=>{
    console.log(product)
    console.log('<li>${product.name}</li>')
})

let filteredProducts=products.filter(product=>product.unitPrice>12000) //Filter gives a new array by changing the reference
console.log(filteredProducts)

let cartTotal=products.reduce((acc,product)=>acc+product.unitPrice,0) //acc accumulator 
console.log(cartTotal)

let cartTotal2=products.filter(p=>p.unitPrice>13000)
                        .map(p=>{
                            p.unitPrice=p.unitPrice*1.18
                            return p
                        })
                        .reduce((acc,p)=>acc+p.unitPrice,0)
console.log(cartTotal2)



