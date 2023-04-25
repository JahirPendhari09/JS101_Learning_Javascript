

function join(arr,key){
  let str ="";
  for(let i=0; i<arr.length; i++){
    if(i==arr.length-1){
      str +=arr[i];
    }else{
      str +=arr[i]+key;
    }
  }
  return str;
}


function join1(arr){
  let str ="";
  for(let i=0; i<arr.length; i++){
    if(i==arr.length-1){
      str +=arr[i];
    }else{
      str +=arr[i]+",";
    }
  }
  return str;
}

let arr =["jahir","shakil", "goku","nami","riya"];
// only for passing array
//let r = join1(arr);
//console.log(r);

// here we passing array and key .  eg.%,*,# 
let k= join(arr,"-");
console.log(k);
