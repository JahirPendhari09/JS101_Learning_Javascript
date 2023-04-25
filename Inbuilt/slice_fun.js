
// for st and ei index pass 
function slice(arr,si,ei){
  let bag =[];
  for(let i=si; i<ei; i++){
    bag.push(arr[i]);
  }
  return bag;
}

// for only single index pass

// function slice(arr,si){
//   let bag =[];
//   for(let i=si; i<arr.length; i++){
//     bag.push(arr[i]);
//   }
//   return bag;
// }

// for no any indexes pass

// function slice(arr){
//   let bag =[];
//   for(let i=0; i<arr.length; i++){
//     bag.push(arr[i]);
//   }
//   return bag;
//}
let arr=['ant', 'bison', 'camel', 'duck', 'elephant']
let k= slice(arr,2,5);
//let k= slice(arr);
console.log(k);