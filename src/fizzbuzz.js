function generarFizzBuzz(n){
    const FIZZ = 3;
    if(n % FIZZ == 0){
        return "Fizz";
    }
    if(n == 5){
        return "Buzz";
    }
    return n + "";
}

export default generarFizzBuzz;