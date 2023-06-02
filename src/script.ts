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
a = null,
a = true,
// if type any we can assign any type of value

