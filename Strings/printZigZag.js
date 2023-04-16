let str ="school";
let n = str.length;
let b="";
let k= n/2;
for(let i=k-1; i>=0; i--){
  b +=str[i];
}
for(let i=n-1; i>=k; i--){
  b +=str[i];
}
console.log(b);
