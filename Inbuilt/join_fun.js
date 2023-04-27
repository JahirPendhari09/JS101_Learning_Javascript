

function join(arr,key){
  let str ="";

  if(key ==undefined){
    for(let i=0; i<arr.length; i++){
    if(i==arr.length-1){
      str +=arr[i];
    }else{
      str +=arr[i]+",";
    }
  }
  return str;
  }else{
    for(let i=0; i<arr.length; i++){
        if(i==arr.length-1){
            str +=arr[i];
        }else{
            str +=arr[i]+key;
         }
    }
  return str;
  }

}
let arr =["jahir","shakil", "goku","nami","riya"];

let k= join(arr,"-");
console.log(k);