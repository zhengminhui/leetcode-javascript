function fib(n){
  if(n <= 2) return n;
  var fib = 2, 
      preFib = 1, 
      tmp;
  
  for(var i=3; i <n;i ++){
    tmp =fib;
    fib = fib + preFib;
    preFib = tmp;
  }
  
  return fib; 
  
}

console.log(fib(10))