// # String work in Javascript

// ### Return a string from the function

// Very easy: make the function return the string "ZipCode"

function zipcode1() {
    return "";
}

// ### Return a string from the function

// Very easy: use a `+` to return the string "ZipCode"

function zipcode2() {
    let z = "Zip";
    let c = "Code";
    return ""; // change here to return z conbined with c
}

// ### Return a string from the function

// Very easy: pick a number between 1 and 10, and combine it with the string "My favorite number is " and return it

function zipcode3() {
    let fav = 0;
    let phrase = "My favorite number is ";
    return ""; // change to combine phrase with fav
}


// ### Return the length of a String (25pts)

// Using the `.length` method, return the length of the string "ZipCodeRocks" using the given function.

function getLength() {
  let s = "";
  return 0;
}

// #### Example 1

// input: "wow" output: 3

// #### Example 2

// input: "Delaware" output: 8

// #### Example 3

// input: "BlueHen" output: 7


module.exports = {
  getLength,
  zipcode3,
  zipcode2,
  zipcode1
}