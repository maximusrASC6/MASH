 function mash() {

     return " You will live in a " + getHome(place) + ", and you will have " + getChildrenCount(count) + ", kids from" 

 }
 let places = ["Mansion", "Apartment", "Shack", "House"]
     places = places[Math.floor(Math.random()*places.length)];

 function getHome(places){
      return places
}
let count = Math.floor((Math.random()*100) + 0)

 function getChildrenCount(count) {
     return count
 }



 let child = getChildrenCount(count)
 let place = getHome(places)
 let result = mash();
console.log(result, place, child);


