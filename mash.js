let home = ["Mansion", "Shack", "House", "Apartment"]
let cars = ["Box", "Towel", "Broken Mini Van", "Rolling Chair"]
 function mash() {

     return " You will live in a " + getHome() + ", and you will have " + getChildren() + " kids from "  + getSpouse() +  " different women. You will drive a " + getCar() + " to " 

 }

 let range = 0
 function randomizer(range) {
     return Math.floor(Math.random() * (range + 1))

 }
 
function getHome() {
    if(Math.random() >= .5)
        return home[randomizer(home.length-1)];
    else
        return process.argv[2]
}

function getChildren() {
    let chance = Math.random();
    if(chance >= .5)
        return randomizer(100);
    else
        return process.argv[3]
}

    function getCar() {
        if(Math.random() >= .5)
            return cars[randomizer(cars.length-1)]
        else
            return process.argv[4]

}

function getSpouse() {
        return randomizer(10);
 
}
    
    console.log(mash())
    