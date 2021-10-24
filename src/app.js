/*console.log("Merhaba kodlama.io")

//JS is not type safe
let dolarBugun=9.30
let dolarDun=9.20
{
    let dolarDun=9.10
}
console.log(dolarDun)

const euroY=11.2
//euroY=11 gives error 
console.log(euroY)

//camelCasing
//PascalCasing
let konutKredileri=["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]


console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>") //li list item
}
console.log("</ul>")*/

let sayi1=10
sayi1="Engin Demirog"
let student={id:1, name:"Engin"} //object notation
//console.log(student)

function save(puan=10,ogrenci) {
    console.log(ogrenci.name + " : " + puan)
}
//save(student,100);
//save(undefined,student); //takes the default

let students=["Engin","Gizem","Gamze","Dobby"]
//console.log(students)

let students2=[student,{id:2, name:"Gizem"},"Ankara",{city:"İstanbul"}]
//console.log(students2)
