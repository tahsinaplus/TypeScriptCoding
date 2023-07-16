let apples: number = 5;
let speed: string = 'hello';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();
// Array
let colors: string[] = ['red','green','white'];
let myNumbers: number[] = [2,3,4,5];
let truths:boolean[]=[true,true,false];

// classes
class Car{

}
let car: Car =  new Car();

// object literal
let point: {x: number;y:number} = {
    x:10,
    y:10
};

// Functions

const logNum: (i:number)=>void = (i:number) =>{
    console.log(i);
};