var theH1 = document.createElement('h1') //creates h1
var theH2 = document.createElement('h2') //creates h2
var myHeader = document.getElementById('header') // set variable for header
var newText = document.getElementsByClassName('message left') //set var for text
var newText2 = document.getElementsByClassName('message right')

theH1.innerHTML = 'Javascript Made This'; //creates my text for h1
theH2.innerHTML = '<span class = "name">Taamir</span> Wrote the Javascript';
myHeader.append(theH1, theH2) //glues my text to h1, h2


newText[0].textContent = 'Hey There I have Been Changed!'; //new text for the text box
newText[1].textContent = 'To some new text! Its crazy.';
newText2[0].textContent = 'Really?! To What?';
newText2[1].textContent = 'Crazy indeed my friend. Crazy indeed.';

let pageClear = document.getElementById('clear-button')
    pageClear.onclick = function () {
        clearText();
    }

function clearText() {
    var eraseText = document.getElementsByClassName('message')
    newText[0].textContent = ''; //new text for the text box
    newText[1].textContent = '';
    newText2[0].textContent = '';
    newText2[1].textContent = '';
}