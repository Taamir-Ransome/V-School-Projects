var powerRangers = [
    "Jason Lee Scott", 
    "Kimberly Hart", 
    "Zack Taylor", 
    "Trini Kwan", 
    "Billy Cranston"
]

var rangersList = document.getElementById("rangers")

for (var i = 0; i < powerRangers.length; i++) { //loop to create the list rangers
    var newName = document.createElement("li")
    newName.textContent = powerRangers[i]
    rangersList.append(newName)
}
