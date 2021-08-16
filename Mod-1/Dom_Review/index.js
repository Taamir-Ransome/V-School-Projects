/**
 * CHALLENGE:
 * 
 * Play around with all the different DOM methods for selecting and modifying elements.
 * 
 * Make sure to read through the `notes.md` file for a recap and some new information regarding using the DOM API
 */


var thing = document.getElementsByTagName("h1")
console.log(thing)

var thing2 = document.getElementsByClassName("list-items")
console.log(thing2)

var list = document.querySelector("#navbar")
console.log(list)