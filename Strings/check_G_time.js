let a = ["google","goku","gohan","google","nami","goku"];
let count =0
for(let i=0; i<a.length; i++){
  if(a[i][0] == "g"){
    count++;
  }
}
console.log(count);