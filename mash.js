function mash() {

    return " You will live in " + getHome(place)

}
let places = ["Mansion", "Apartment", "Shack", "House"]
    places = places[Math.floor(Math.random()*places.length)];

function getHome(places){
     return places
}
    
let place = getHome(places)
let result = mash();
console.log(result + place);
