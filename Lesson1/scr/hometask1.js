
function name (firstname, lastname) {
    if (lastname == undefined) {
        return 'Hello my name is ' + firstname;
    }
    else {
    return 'Hello, my name is ' + firstname + lastname;
    }
}

var person1 = name ('vasyl', 'pryhara');
console.log (person1);
var person2 = name ('bohdan');
console.log (person2);
