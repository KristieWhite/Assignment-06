///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.
function sum (num1, num2) {
return num1 + num2;    
}
sum (4, 4);



// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.
function avg (num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
avg (5, 10, 15);


// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length
function getLength (month) {
    var monthLength = month.length;
    return monthLength;
}
    getLength("January");



// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.
function greaterThan (num1, num2) {
    if (num1 > num2) {
        return "True";
    } else {
        return "False";
    }
}
greaterThan(5, 10);



// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
function greet (name) {
    return "Hello, " + name;
}
greet("Kristie");


// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
function madlib (word1, word2, word3, word4) {
    return "I " + word1 + " drove my " + word2 + "car through a window and made a " + word3 + word4 + ".";
}
madlib ("carelessly", "sports", "huge ", "mess");


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
