function includes(arr,key){
  for(let i=0; i<arr.length; i++){
    if(key === arr[i]){
      return true;
    }
  }
  return false;
}

let arr =["cat","dog","apple","fish"];

let key ="apple";
let ans = includes(arr,key);

console.log(ans);