// Find sum of Numbers 0 to n
curr_Num =0;
 sum=0;
 pre_sum = 0;
 n=7;
while(curr_Num<=n){
    pre_sum = sum;
    sum= curr_Num+pre_sum;
    curr_Num++;      
}
console.log(sum);