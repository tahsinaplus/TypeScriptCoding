let apples1 = 5;
let speed = 'hello';
let hasName = true;

let nothingMuch = null;
let nothing = undefined;

// built in objects
let now = new Date();
// Array
let colors = ['red','green','white'];
let myNumbers = [2,3,4,5];
let truths=[true,true,false];

// classes
class Car{

}
let car =  new Car();

// object literal
let point: {x: number;y:number} = {
    x:10,
    y:10
};

// Functions

const logNum: (i:number)=>void = (i:number) =>{
    console.log(i);
};

// Functions that returns the 'any' type
const json = '{"x":20,"y":30}';
const coordinates =  JSON.parse(json);
console.log(coordinates);

// Variable whose type cannot be inferred
let numbers = [-10,-1,12];
let numbersAboveZero;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>0){
        numbersAboveZero = numbers[i];
    }
}
console.log("Number above zero: "+numbersAboveZero);