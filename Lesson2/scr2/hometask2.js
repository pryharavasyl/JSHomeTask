function resultQE (a, b, c) {
    var d = b*b - 4 * a * c;
    var firstx = (-b+(Math.pow(d, 0.5)))/(2*a);
    var secondx = (-b-(Math.pow(d, 0.5)))/(2*a);
    //console.log(firstx, secondx);
    var emptyarrey = [];
    emptyarrey.push (firstx);
    emptyarrey.push (secondx);
    console.log(emptyarrey);
    return emptyarrey;
}
var firstexamples = resultQE(1, 6, 5);

// #1 implement 3 
function resultQE (a, b, c) {
    var d = b*b - 4 * a * c;
    if (d < 0) {
        return [NaN, NaN];
    }
    var sqrtD = Math.pow(d, 0.5);
    var firstx = (-b+sqrtD)/(2*a);
    var secondx = (-b-sqrtD)/(2*a);
    return [firstx, secondx];
}
