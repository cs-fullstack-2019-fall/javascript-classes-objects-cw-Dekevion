class gitHubRepository {
   constructor(username, fileName, repositorydescrip,code ) {
       this.username_prop = username;
       this.fileName_prop = fileName;
       this.repositorydescrip_prop = repositorydescrip;
       this.code_prop = code;
   }
    printProperties (){
       console.log(this.username_prop);
       console.log(this.fileName_prop);
       console.log(this.repositorydescrip_prop);
       console.log(this.code_prop);
    }

}

let newGitRepo = new gitHubRepository("Dekevion","August13file", "objects and classes", 'abc');
console.log(newGitRepo);
// You did not use the method you created to print each property of the instance of your class

// exercise 2

class movie {
    constructor (movieName, rating, yearReleased) {
    this.movieName_prop = movieName;
    this.rating_prop = rating;
    this.yearReleased_prop = yearReleased;

}
// you have to pass this function a value
    changeRating() {
        return this.rating_prop;
    }
// you have to pas this functin a value
    changeYearReleased() {
        return this.yearReleased_prop;
    }
}

//Create a method to change the rating and another one to change the yearReleased properties. Create an object of the class and use the two methods you created.

let myMovie = new movie("Pulp Fiction","10 out of 10", "199something");
myMovie.rating_prop = "5 out of 5"; // you did not use the method that you created 
myMovie.yearReleased_prop = "1994"; // you did not use the method that you created
console.log(myMovie.changeRating());
console.log(myMovie.changeYearReleased());