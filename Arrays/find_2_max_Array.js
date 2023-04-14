let arr = [144,2,4,9,24,96,5];
let N= arr.length;

let max =-Infinity;
let sec_max = -Infinity;
for(let i=0; i<N; i++){
    if(max < arr[i]){
        sec_max = max;
        max = arr[i];
    }else if(sec_max<arr[i]){
        sec_max= arr[i];
    }
}
console.log("Second Maxi :",sec_max);
console.log(" Maxi :",max);