function fibo(num){
    if(num === 0 || num === 1){
      return num;
    } 
    return fibo(num - 1) + fibo(num - 2);
  }
  
  console.log(fibo(10));
  
  
  function fibo02(num){
    var n1 = 1, n2 = 1, n = 1;
    for(var i = 3; i <= num; i++){
      n = n1 + n2;
      n1 = n2;
      n2 = n;
    }
  
    return n;
  }
  
  console.log(fibo02(10));
  