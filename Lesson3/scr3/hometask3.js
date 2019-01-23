function fihuyaccinumbers (number1) {
if (number1 == 1 || number1 == 2) {
    return 1
}
    return fihuyaccinumbers (number1 - 2) + fihuyaccinumbers (number1 - 1)
   
}
var example1 = fihuyaccinumbers(10);
console.log (example1);