let arr = [1,2,4,7,23,96,5,-12];
let N= arr.length;

let min =Infinity;
for(let i=0; i<N; i++){
    if(min >arr[i]){
        min = arr[i];
    }
}
console.log(min);