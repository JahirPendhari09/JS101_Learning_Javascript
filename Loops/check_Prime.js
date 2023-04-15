function identifyPrime(num) {
    let anst = true;
    for(let i=2; i<num; i++){
        if(num%i ==0){
            anst = false;
        }
    }
    if(anst == true){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
}
identifyPrime(11);