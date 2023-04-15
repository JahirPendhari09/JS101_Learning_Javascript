function equalTo42(size,arr) {
    //write code here
    let N=42;
    let isPresent = false;
    for(let i=0; i<size; i++){
        if(arr[i] == N){
            isPresent = true;
            break;
        }
    }
    if(isPresent == true){
        console.log("Yes");
    }else{
        console.log("No");
    }
}

let arr = [1,2,3,4,5,42];
let size = arr.length;
equalTo42(size,arr);