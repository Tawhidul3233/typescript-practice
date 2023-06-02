let userName : string = 'Akash'
// userName can't assing number
// userName = 55  
userName = 'Babul'
// console.log(userName)

let rollNumber: number = 5;
// rollNumber = '5' con't assing as a string value
rollNumber= 1;
// console.log(rollNumber)

let data : {name: string, id: number} 
// data = 'all data' can't assing string value must assing object and must have name string and id number,
data = {name: 'akash', id: 555};
// console.log(data);

let dataArray: string[];
// dataArray = 5 can't assing with out array
dataArray = ['e','r'];
// console.log(dataArray);

let arrayOfObject : object[];
arrayOfObject = [{name: 'akash', id: 40}];
// console.log(arrayOfObject)

let a: any;
a= 'akash';
a= 66;
a= {name: 'akash', id: 66};
a= ['c', 't'];
a= undefined;
a = null;
a = true;
// if type any we can assign any type of value


// now typescript tuple

let data2: [number, boolean, string];
// data2= [55, 'akash', true] need to assign correct order
data2 = [55, true, 'akash']
// console.log(data2)


// optional proparties

let data3 : {name: string, id: number, url?: string};
data3= {name: 'akash', id: 55};
// console.log(data3)


// ypeScript Type Aliases and Interfaces
type displayName = string;
type model = string;
type year = number;
type newCar = boolean;

let car2 : {name: displayName, model: model, buy: year, new: newCar};
car2 = {name: 'Tesla', model: 're3', buy: 2020, new: false}
// console.log(car2)


type car =  {
  name: string,
  model: string | number,
  year : number
}

let car3 : car ;
car3 = {name: "Tesla", model: 3030, year: 203}
// console.log(car3)

interface carex {
  name: string,
  model : number | string
}

let car4 : carex;
car4 = {name: 'Tesla', model: 2020}
// console.log(car4)


// typescript union 

function printStatusCode(code: string | number) {
  // console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');


// TypeScript funcation 

function data6 (): string {
return ''
}

// paramiter and return value must number
function data7 (a: number, b:number): number{
  return a + b;
}
// console.log(data7(5,6))

// optional paramiter 
function data8(a:number, b:number, c?:string): string {
  return `${c} get ${a+b}`
}
// data8(5,7,'Akash')
// data8(5,7,) 3rd paramiter is optional

// Type Alias
type data9 = (value: number) => number;

function data10(a:number) {
  return a;
}



// TypeScript class

class Person {
  useName: string;
  age: number

  constructor(useName: string, age: number){
    this.useName = useName,
    this.age = age
  }

  display(){
    // console.log(`I am  ${this.useName} and ${this.age} years old`)
  }

}

const user1 = new Person('Akash', 22)
// console.log(user1.display())



class CreateCar {
  private carName: string;
  protected model: number | string;
  public carOld: boolean;

  constructor(carName: string, model: number | string, carOld: boolean){
    this.carName = carName,
    this.model = model,
    this.carOld = carOld
  }

  private display(){
    console.log(`This is  ${this.carName} and model is ${this.model} `)
  }

}

const car1 = new CreateCar('Tesla', 2022, false)
// car1.display()