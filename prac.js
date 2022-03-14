
const func2=()=>3
const func1=()=>func2  //return reference
const func3=()=>{func2} //returns nothing
const func4=()=>{func2()} //returns nothing
const func5=()=>func2() //returns 3

console.log(func1)
console.log(func1())
console.log(func3)
console.log(func3())
console.log(func4())
console.log(func5())


//func is reference
//func() is calling function

console.log('+++')
const x=1
let y=x
++y
const ff=(x)=>{
    ++x 
    return x}

console.log(ff(x))
console.log(x)
console.log(y)

//JS is pass by value, but when change the internal of the object, it changes it.
//In JavaScript, objects are a reference type. Two distinct objects are never equal

const change=(obj)=>{
    obj.key1='change value'
}
