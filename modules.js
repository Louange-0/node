//a function in ES6 format
const sayhi=(name)=>{
    return `Hello there ${name}`;
}
//a function in preES6 format
function add(num1,num2){
    const sum=num1+num2;
   return `the sum of ${num1} and ${num2} is ${sum}`;
}
function multiplication(num3,num4){
   const product=num3*num4
    return `the product of ${num3} and ${num4} is ${product}`
}
function poem(color1,color2,taste,name){
    return `Roses are ${color1},
    Violets are ${color2},
    Sugar is ${taste},
    And so is ${name}.`
}
function area(width,length){
   const product=width*length
    return `The area a a rectangle whose width is ${width} and length ${length} is ${product}`
}
module.exports = {
    sayhi,add,multiplication,poem,area
}