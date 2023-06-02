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