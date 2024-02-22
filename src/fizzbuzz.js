function generarFizzBuzz(n){
    const FIZZ = 3;
    if(n % FIZZ == 0){
        return "Fizz";
    }
    return n + "";
}

export default generarFizzBuzz;