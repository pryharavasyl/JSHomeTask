function resultQA (a, b, c) {
    var d = b*b - 4 * a * c;
    var firstx = (-b+(Math.pow(d, 0.5)))/(2*a);
    var secondx = (-b-(Math.pow(d, 0.5)))/(2*a);
    //console.log(firstx, secondx);
    var emptyarrey = [];
    emptyarrey.push (firstx);
    emptyarrey.push (secondx);
    console.log(emptyarrey);


}
var firstexamples = resultQA (1, 6, 5);