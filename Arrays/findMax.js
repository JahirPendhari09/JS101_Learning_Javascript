let arr = [1,2,4,7,23,96,5];
let N= arr.length;

let max =-Infinity;
for(let i=0; i<N; i++){
    if(max <arr[i]){
        max = arr[i];
    }
}
console.log(max);