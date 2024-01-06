class Movie {
    // Constructor
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        // Set default rating to "PG" if not provided
        this.rating = rating || "PG";
    }
}

// Create an instance of Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
var casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG­13");

// Example usage of getPG method
var movies = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "PG­13"),
    new Movie("Movie3", "Studio3", "R"),
    new Movie("Movie4", "Studio4", "PG"),
    new Movie("Movie5", "Studio5", "G")
];

// Print the titles of movies with "PG" rating
console.log("Movies with rating 'PG':");

console.log(movies.filter(movie => movie.rating === "PG"));

/*output: 
         Movies with rating 'PG':
         Movie1
         Movie4
*/

//Write a “person” class to hold all the details.

class person{
    constructor(name,age,gender,address,maritalStatus){
        this.name = name;
        this.age =age;
        this.gender = gender;
        this.address = address;
        this.maritalStatus = maritalStatus;
    }
    personprint(){
        console.log(`Name : ${this.name}`);
        console.log(`Age : ${this.age}`);
        console.log(`Gender : ${this.gender}`);
        console.log(`Address : ${this.address}`);
        console.log(`Marital status : ${this.maritalStatus}`);
    }
}

var per = new person('manoj',27,'male','XXXXX','married');

per.personprint();

/*output: 
Name : manoj
Age : 27
Gender : male
Address : married
Marital status : undefined
*/


class UberCal {
    constructor(baseFare, costPerKM, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKM = costPerKM;
        this.costPerMinute = costPerMinute;
    }

    // Method to calculate the total fare
    calculateFare(distanceInMiles, timeInMinutes) {
        var distanceCost = distanceInMiles * this.costPerKM;
        var timeCost = timeInMinutes * this.costPerMinute;
        var totalFare = this.baseFare + distanceCost + timeCost;

        return totalFare;
    }
}

// Example usage
var uberCalc = new UberCal(50, 10, 5); // Base fare: 50, Cost per KM: 10, Cost per minute: 5

var distance = 10; // in KM
var time = 15; // in minutes

const fare = uberCalc.calculateFare(distance, time);

console.log(`Uber Fare: ${fare.toFixed(2)}`);

/*
output: 
Uber Fare: 225.00
*/


