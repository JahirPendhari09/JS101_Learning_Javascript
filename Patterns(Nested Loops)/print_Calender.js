// Print Calender Dates and Respective Months

for(let i=1; i<=12; i++){

    if(i==2){
      d =28;
    }else if(i==4 || i==6 || i==9 ||i==11){
      d =30;
    }
    else{
      d =31;
    }
    for(j=1; j<=d; j++){
      console.log(j,"-",i);
    }
    console.log("Month Completed",i);
  }