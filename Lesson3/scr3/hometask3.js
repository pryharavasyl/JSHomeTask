function fibonaccinumbers (number1) {
    if (number1 == 1) {
        return 1;

    }

    return fibonaccinumbers (number1 - 2) + fibonaccinumbers (number1 - 1)
   
}
var example1 = fibonaccinumbers(4);
console.log (example1);