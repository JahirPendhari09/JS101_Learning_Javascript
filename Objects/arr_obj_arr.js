let user =["raju", "juli", "Aman", "ramu", "prabhu"];
let age =  [32, 30, 26, 28, 44];

let arr =[];
for(let i=0; i<user.length; i++){
  let obj ={};
  obj.name =user[i];
  obj.age = age[i];
  arr.push(obj);
}
let bag ="";
for(let i=0; i<arr.length; i++){
  if(arr[i].age>30){
    //console.log(arr[i].name);
    bag +=arr[i].name+" ";
  }
}
console.log(bag);