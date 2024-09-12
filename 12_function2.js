function cartPrice(...num)  // the ... is called rest array 
{
    return num

}
console.log( cartPrice(100 , 200 , 400))

const user ={
    brand: "tata",
    price: 44
}
const ser ={
    brand: "audi",
    price: 55
}

function handleObject(anyobject){
console.log(` brand name ${anyobject.brand} price is ${anyobject.price} `)
}

handleObject(user)
handleObject(ser)

handleObject(
    {
        brand: "maruti",
        price: 9999
    }
)

// FUNCTION IN ARRAY

const newArray =[100, 200, 300,400]

function secondValue (getArray){
    return getArray[1]
}

console.log(secondValue(newArray))