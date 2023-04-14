 let arr =[1,2,5,3,6,7,9];
 let n= arr.length;
 let si=0;
 let ei = n-1;
 while(si<ei)
 {
    let temp = arr[si];
    arr[si]  = arr[ei];
    arr[ei]  = temp;
        
    si++;
    ei--;
}
 let a="";
 for(let i=0; i<n; i++){
     a +=arr[i]+" "
 }
 console.log(a);