
// for st and ei index pass 
function slice(arr,si,ei){
  let bag =[];
  if(si>0 && ei>0){
    for(let i=si; i<ei; i++){
        bag.push(arr[i]);
    }
    return bag;
  }
  else if(si >0 && ei ==  undefined){
      for(let i=si; i<arr.length; i++){
          bag.push(arr[i]);
       }
       return bag;
  }else if(si<0 && ei==undefined){
       si = arr.length+si;
      for(let i=si; i<arr.length; i++){
         bag.push(arr[i]);
      }
    return bag;
  }else if(si>0 && ei<0){
    ei = arr.length+ei;
    for(let i=si; i<ei; i++){
      bag.push(arr[i]);
    }
    return bag;
  }else if(si == undefined && ei == undefined){
     si =0;
    ei = arr.length;
    for(let i=si; i<ei; i++){
      bag.push(arr[i]);
    }
    return bag;
  }
  
}

let arr=['ant', 'bison', 'camel', 'duck', 'elephant']
let k= slice(arr,2,5);
console.log(k);

let r = slice(arr,-2);
console.log(r);