
function name(firstname, lastname) {
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


var person1 = name('vasyl', 'pryhara');
console.log(person1);
var person2 = name('bohdan');
console.log(person2);
var person3 = name(null, 'Dorosh');
console.log(person3);
var person4 = name();
console.log(person4);

// #1 fix logic
function name(firstname, lastname) {
    if (firstname == undefined && lastname == undefined) {
        return '';
    }
    if (lastname == undefined) {
        return 'Hello my name is ' + firstname;
    }
    if (firstname == undefined) {
        return "Hello, my lastname is " + lastname;
    }
    return 'Hello, my name is ' + firstname + ' ' + lastname;
}

// #2 Store common things in variables. Do not hardcode values.
function name(firstname, lastname) {
    var firstPart = 'Hello my name is ';
    if (firstname == undefined && lastname == undefined) {
        return '';
    }
    if (lastname == undefined) {
        return firstPart + firstname;
    }
    if (firstname == undefined) {
        return firstPart + lastname;
    }
    return firstPart + firstname + ' ' + lastname;
}

// #3 use falsy values feature.
function name(firstname, lastname) {
    var firstPart = 'Hello my name is ';
    if (!firstname && !lastname) {
        return '';
    }
    if (!lastname) {
        return firstPart + firstname;
    }
    if (!firstname) {
        return firstPart + lastname;
    }
    return firstPart + firstname + ' ' + lastname;
}