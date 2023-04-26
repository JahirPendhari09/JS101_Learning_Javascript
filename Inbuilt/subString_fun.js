function subString(str,si,ei){
  let bag ="";
  for(let i=si; i<ei; i++){
    bag += str[i];
  }
  return bag;
}

function subString1(str,si){
  let bag ="";
  for(let i=si; i<str.length; i++){
    bag += str[i];
  }
  return bag;
}

let str ="mozilla";

let result =subString(str,1,5);
console.log(result);

//let result1 =subString1(str,3);
//console.log(result1);

