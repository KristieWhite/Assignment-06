// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num1 < num2) {
        return num2;
    } else {
        return "The numbers are equal";
    }
}
max(12, 32);

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else if (num3 > num1 && num3 > num2) {
        return num3;
    } else {
        return "There is a tie"
    }
}
maxOfThree (221, 333, 450);

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel (char) {
var vowels = ["a", "e", "i", "o", "u"];
    for (i = 0; i < vowels.length; i++) {
        if (char === vowels[i] {
            return "true";
        } 
    }
  return "false";
}
isVowel ("a");

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------rovarspraket

function translate (phrase) {
var vowels = ["a", "e", "i", "o", "u"];    
    for (i = 0; i < phrase.length; i++) {
        if (phrase !=== vowels.charAt[i]) {
            
            
        }
        
    }
}
translate ("The Iron Yard");

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverseIt (theShining) {
    for (i = 0; i < stringer.length; i++) {
        var reversal = stringer.reverse;
        return reversal;
    }
}
reverseIt ("redrum");
// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
/*---------------------I found this on stackoverflow. Kind of makes sense, but not all of it. I messed something up too. Grr*/

function findLongestWord (animal) {
var animals = ["parrots", "dogs", "cats", "monkeys", "armadillos"];
    var critters = animal.split(" ");
    var longest = 0;
    var theLongest = " ";
    for (i = 0; i < animals.length - 1; i++) {
        if (longest < critters[i].length) {
            longest = critters[i].length;
            theLongest = animal[i];
        }
    }    
    return theLongest;
    console.log(theLongest);
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i) {
    var words ["a", "long", "list", "of", "miscellaneous", "words"];
    for (i = 0; i < ) {
        if () {
            
        }
    }
    
    
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}
