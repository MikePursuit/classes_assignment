console.log(`\n
# Class Exercises

(1 - 6 are the same as on the previous lab, but creating classes using ES6 syntax instead of constructor functions)
\n----------------------------------------\n\n`);

//## Question 1
console.log('\n\n\n\n========================================\n## Question 1\n===============');
console.log(`\n

a.
Write a class called 'Person' that has 3 properties: a first name, a last name and a middle name.
Create 2 instances of a 'Person'.
Print one of their first names.

b.
Write a method in 'Person' called 'fullName' that will return a formatted string of an instance's full name.
Call this method on both the instances you created in part a.

\n----------------------------------------\n\n`);

class Person {
  constructor(firstName, middleName, lastName) {
    this.firstName = firstName
    this.middleName = middleName
    this.lastName = lastName
  }

  fullName() {
    return `${this.firstName} ${this.middleName} ${this.lastName}`
  }
}

let mike = new Person(`Michael`, `David`, `Amparo`)
let steph = new Person(`Stephanie`, `Estela`, `Ramirez`)

//a
console.log(mike.firstName);

//b
console.log(steph.fullName());
console.log(mike.fullName());

//## Question 2
console.log('\n\n\n\n========================================\n## Question 2\n===============');
console.log(`\n

a.
Create a class called 'Book' that has properties 'title', 'author' and 'rating'.
Create some instances of 'Book'.

b.
Add a method to 'Book' called 'isGood' that returns 'true' if its rating is greater than or equal to 7

\n----------------------------------------\n\n`);

class Book {
  constructor(title, author, rating) {
    this.title = title
    this.author = author
    this.rating = rating
  }

  isGood() {
    return this.rating >= 7
  }
}

let fahrenheit451 = new Book(`Fahrenheit 451`, `Ray Bradbury`, 8)

//a
console.log(fahrenheit451);

//b
console.log(fahrenheit451.isGood());

//## Question 3
console.log('\n\n\n\n========================================\n## Question 3\n===============');
console.log(`\n

a.
Create a 'Dog' class with four properties: 'name (string), breed (string), mood (string), and hungry (boolean)'.

b.
Add a method called 'playFetch'.
It should set the dog's 'hungry' property to 'true', set its mood property to 'playful', and log "Ruff!"

c.
Add a method called 'feed'.
If the dog is hungry, it should set 'hungry' to 'false' and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"

d.
Add a method called 'toString' that returns a description of the dog:

\n----------------------------------------\n\n`);

class Dog {
  constructor(name, breed, mood, hungry) {
    this.name = name
    this.breed = breed
    this.mood = mood
    this.hungry = hungry
  }

  playFetch() {
    this.hungry = true
    this.mood = `playful`
    console.log(`Ruff!`);
  }

  feed() {
    if (this.hungry) {
      this.hungry = false;
      console.log(`Woof!`)
    } else console.log(`The dog doesn't look hungry`);
  }

  toString() {
    return `${this.name} is a ${this.breed} and right now it's feeling ${this.hungry ? `` : `not `}hungry and ${this.mood}`
  }
}

let mikey = new Dog(`Mikey`, `Frenchie`, `happy`, true)

//a
console.log(mikey);

//b
mikey.playFetch()
console.log(mikey.mood, mikey.hungry);

//c
mikey.feed()
console.log(mikey.hungry);

//d
console.log(mikey.toString());

//## Question 4
console.log('\n\n\n\n========================================\n## Question 4\n===============');
console.log(`\n

There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:

C = (F - 32) / 1.8
F = 1.8 * C + 32
K = C + 273

a.
Make an object called 'freezingPoint' that has three properties: 'celsius', 'fahrenheit', and 'kelvin'.
Give them all values equal to the freezing point of water.


b.
Make a class called 'Celsius' that has one property: 'celsius', and two methods 'getFahrenheitTemp', and 'getKelvinTemp'.

'''js
let outsideTempt = new Celsius(10.0)
outsideTempt.celsius //returns 10.0
outsideTempt.getKelvinTemp() //returns 283.0
outsideTempt.getFahrenheitTemp() //returns 50.0
'''

c.
Give 'Celsius' a method called 'isBelowFreezing' that returns a 'Bool' (true if the temperature is below freezing).

\n----------------------------------------\n\n`);

let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 273,
}

class Celsius {
  constructor(celsius) {
    this.celsius = celsius
    this.getFahrenheitTemp = function() {return 1.8 * this.celsius + 32}
    this.getKelvinTemp = function() {return this.celsius + 273}
  }

  isBelowFreezing() {
    return this.celsius < freezingPoint.celsius
  };
}

//a
console.log(freezingPoint);

//b
let outsideTempt = new Celsius(10.0)
console.log(outsideTempt.celsius); //returns 10.0
console.log(outsideTempt.getKelvinTemp()); //returns 283.0
console.log(outsideTempt.getFahrenheitTemp()); //returns 50.0

//c
console.log(outsideTempt.isBelowFreezing());

//## Question 5
console.log('\n\n\n\n========================================\n## Question 5\n===============');
console.log(`\n

a.
Create a class called 'Movie' that has properties for 'name', 'year', 'genre', 'cast', and 'description'.
Create an instance of your 'Movie'

b.
Create an method inside 'Movie' called 'blurb' that returns a formatted string describing the movie.

Ex: "Borat came out in 2006.
It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."


\n----------------------------------------\n\n`);

class Movie {
  constructor(name, year, genre, cast, description) {
    this.name = name
    this.year = year
    this.genre = genre
    this.cast = cast
    this.description = description
  }

  blurb() {
    return `${this.name} came out in ${this.year}.\n${this.description}`
  };
}

let pulpFuction = new Movie(`Pulp Fiction`, 1994, `Crime Drama`,
  {SamuelLJackson: `Jules`, JohnTravolta: `Vincent Vega`, UmaTherman: `Mia Wallace`},
  `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`)

//a
console.log(pulpFuction);

//b
console.log(pulpFuction.blurb());

//## Question 6
console.log('\n\n\n\n========================================\n## Question 6\n===============');
console.log(`\n

Write a constructor Vector that represents a vector in two-dimensional space.
It takes two number arguments: 'x' and 'y' parameters, which it should be saved to properties of the same name.

Give the Vector prototype two methods, 'plus' and 'minus', that take another vector as an argument and
returns a new vector that has the sum or difference of the two vectors’ (the one in 'this' and the parameter) x and y values.

Add a method 'getLength' to the prototype that computes the length of the vector ;
that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

[Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html)

'''js
var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
console.log(v1.plus(v2));
// => Vector {x: 3, y: 5}
console.log(v1.minus(v2));
// => Vector {x: -1, y: -1}

var v3 = new Vector(3, 4)
console.log(v3.getLength());
// => 5
'''

\n----------------------------------------\n\n`);

class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  plus(vector) {
    return { x: (this.x + vector.x), y: (this.y + vector.y),}
  };

  minus(vector) {
    return { x: (this.x - vector.x), y: (this.y - vector.y),}
  };

  getLength() {
    return Math.pow(this.x * this.x + this.y * this.y, 1 / 2)
  };
}

var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
console.log(v1.plus(v2));
// => Vector {x: 3, y: 5}
console.log(v1.minus(v2));
// => Vector {x: -1, y: -1}

var v3 = new Vector(3, 4)
console.log(v3.getLength());
// => 5

//## Question 7
console.log('\n\n\n\n========================================\n## Question 7\n===============');
console.log(`\n

a.
Make a class called 'Car' with properties 'make' and 'model'.
Create an instance of a 'Car'

b.
Make a class called 'Bike' with properties 'gears' and 'hasBell'.
Create an instance of 'Bike'

c.
Give each class a static method called 'numberOfWheels' that returns the number of wheels (2 for bikes, 4 for cars).
Why does it make sense for this to be a static method instead of an instance method?

\n----------------------------------------\n\n`);

class Car {
  constructor(make, model) {
    this.make = make
    this.model = model
  }

  static numberOfWheels() {
    return 4
  }
}

class Bike {
  constructor(gears, hasBell) {
    this.gears = gears
    this.hasBell = hasBell
  }

  static numberOfWheels() {
    return 2
  }
}

let mikesAccord = new Car(`Honda`, `Accord`)
let mikesFixie = new Bike(`Fixed`, false)

//a
console.log(mikesAccord);

//b
console.log(mikesFixie);

//c
console.log(Car.numberOfWheels(mikesAccord), Bike.numberOfWheels(mikesFixie));
console.log(`We use a static method becasue this is true of all cars and bike.
Having a non static method would mean that the method maybe different depending on the
car or bike.`);

//## Question 8
console.log('\n\n\n\n========================================\n## Question 8\n===============');
console.log(`\n

a.
Make a class called 'Vehicle' with properties 'color' and 'name'.
Give it a method called 'makeSound' which logs "WHHOOSSSH" to the console

b.
Modify your 'Car' and 'Bike' classes from Question 7 to extend the 'Vehicle' class.

c.
Create a new 'Bike' instance that has a 'color' of "green" and 'name' "Bikey McBikeface"

d.
Create a new 'Car' instance that has a 'color' of "red" and 'name' "Carry McCarface"

\n----------------------------------------\n\n`);

class Vehicle {
  constructor(color, name) {
    this.color = color
    this.name = name
  }

  makeSound() {
    console.log(`WHHOOSSSH`);
  }
}

class Car1 extends Vehicle {
  constructor(make, model, color, name) {
    super(color, name)
    this.make = make
    this.model = model
  }

  static numberOfWheels() {
    return 4
  }
}

class Bike1 extends Vehicle {
  constructor(gears, hasBell, color, name) {
    super(color, name)
    this.gears = gears
    this.hasBell = hasBell
  }

  static numberOfWheels() {
    return 2
  }
}

let vehicle = new Vehicle(`black`, `Bat Mobile`)

let carryMcCarface = new Car1(`Honda`, `Accord`, `red`, `Carry McCarface`)
let bikeyMcBikeface = new Bike1(`Fixed`, false, `green`, `Bikey McBikeface`)

//a
console.log(vehicle);

//b
console.log(Car1, Bike1);

//c
console.log(bikeyMcBikeface);

//d
console.log(carryMcCarface);
