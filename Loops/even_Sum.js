function evenSum(num) {
    let i=0;
    let sum=0;
    while(i<=num){
        if(i%2 ==0){
            sum +=i;
        }
        i++;
    }
    console.log(sum);
  
  
}
evenSum(6);
