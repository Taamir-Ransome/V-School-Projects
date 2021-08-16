var btn = document.getElementById("theBtn");
var bdy = document.getElementById("myBody");
var btn2 = document.getElementById("myBtn");

function setHoverColor() {
    btn.style.background = "blue";
}
 
function setNormalColor() {
    btn.style.background = "";
}

function setClickColor() {
    btn.style.background = "green";
}

function setMouseDown() {
    btn.style.background = "red";
}

function setMouseRelease() {
    btn.style.background = "yellow";
}

function setMouseWheel() {
    btn.style.background = "orange";
}


btn.addEventListener("mouseover", setHoverColor);
btn.addEventListener("mouseout", setNormalColor);
btn.addEventListener("dblclick", setClickColor);
btn.addEventListener("mousedown", setMouseDown);
btn.addEventListener("mouseup", setMouseRelease);
bdy.addEventListener("wheel", setMouseWheel);

document.addEventListener("keydown", function(event) {
    if (event.key === 'b'){
        btn.style.background = 'blue';
    }
    else if (event.key === 'r'){
        btn.style.background = 'red';
    }
    else if (event.key === 'y'){
        btn.style.background = 'yellow';
    }
    else if (event.key === 'g'){
        btn.style.background = 'green';
    }
    else if (event.key === 'o'){
        btn.style.background = 'orange';
    }
});

