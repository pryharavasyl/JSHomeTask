
function name (firstname, lastname) {
    if (lastname == undefined) {
        return 'Hello my name is ' + firstname;
    }
    else if (firstname == undefined) {
        return "Hello, my lastname is " + lastname;
    }
    else if (name == undefined) {
        return '';
    }
    else {
        return 'Hello, my name is ' + firstname + lastname;
    }
   
    }


var person1 = name ('vasyl', 'pryhara');
console.log (person1);
var person2 = name ('bohdan');
console.log (person2);
var person3 = name (null ,'Dorosh');
console.log (person3);
var person4 = name ();
console.log (person4);