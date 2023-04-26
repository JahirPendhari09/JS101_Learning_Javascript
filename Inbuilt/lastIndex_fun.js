function lastIndexOf(arr,val){
  for(let i=arr.length-1; i>=0; i--){
    if(val == arr[i]){
      return i;
    }
  }
  return -1;
}

let arr =['Dodo', 'Tiger', 'Penguin', 'Dodo'];

let key = 'Dodo';

let ans = lastIndexOf(arr,key);

// printing the index which occours the key
console.log(ans);