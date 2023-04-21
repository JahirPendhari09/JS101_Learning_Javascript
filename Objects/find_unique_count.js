let arr =["luffy","gohan","luffy","goku","gohan","nami"];

let obj ={};

for(let i=0; i<arr.length; i++){
  obj[arr[i]] =i;
}
count=0;
for(let a in obj){
  console.log(a );
  count++;
}
console.log("Count of Unique element is :",count);