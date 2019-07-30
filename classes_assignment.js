console.log(`\n
# Class Exercises

(1 - 6 are the same as on the previous lab, but creating classes using ES6 syntax instead of constructor functions)
\n----------------------------------------\n\n`);



//## Question 1
console.log('\n\n\n\n========================================\n## Question 1\n===============');
console.log(`\n

a. Write a class called 'Person' that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a 'Person'. Print one of their first names.


b. Write a method in 'Person' called 'fullName' that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.


\n----------------------------------------\n\n`);


//## Question 2
console.log('\n\n\n\n========================================\n## Question 2\n===============');
console.log(`\n

a. Create a class called 'Book' that has properties 'title', 'author' and 'rating'. Create some instances of 'Book'.


b. Add a method to 'Book' called 'isGood' that returns 'true' if its rating is greater than or equal to 7

\n----------------------------------------\n\n`);


//## Question 3
console.log('\n\n\n\n========================================\n## Question 3\n===============');
console.log(`\n

a. Create a 'Dog' class with four properties: 'name (string), breed (string), mood (string), and hungry (boolean)'.

b. Add a method called 'playFetch'. It should set the dog's 'hungry' property to 'true', set its mood property to 'playful', and log "Ruff!"

c. Add a method called 'feed'. If the dog is hungry, it should set 'hungry' to 'false' and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"

d. Add a method called 'toString' that returns a description of the dog:

\n----------------------------------------\n\n`);


//## Question 4
console.log('\n\n\n\n========================================\n## Question 4\n===============');
console.log(`\n

There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:

C = (F - 32) / 1.8
F = 1.8 * C + 32
K = C + 273

a. Make an object called 'freezingPoint' that has three properties: 'celsius', 'fahrenheit', and 'kelvin'. Give them all values equal to the freezing point of water.


b. Make a class called 'Celsius' that has one property: 'celsius', and two methods 'getFahrenheitTemp', and 'getKelvinTemp'.

```js
let outsideTempt = new Celsius(10.0)
outsideTempt.celsius //returns 10.0
outsideTempt.getKelvinTemp() //returns 283.0
outsideTempt.getFahrenheitTemp() //returns 50.0
```

c. Give 'Celsius' a method called 'isBelowFreezing' that returns a 'Bool' (true if the temperature is below freezing).

\n----------------------------------------\n\n`);


//## Question 5
console.log('\n\n\n\n========================================\n## Question 5\n===============');
console.log(`\n

a. Create a class called 'Movie' that has properties for 'name', 'year', 'genre', 'cast', and 'description'. Create an instance of your 'Movie'

b. Create an method inside 'Movie' called 'blurb' that returns a formatted string describing the movie.

Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."


\n----------------------------------------\n\n`);


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

```js
var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
console.log(v1.plus(v2));
// => Vector {x: 3, y: 5}
console.log(v1.minus(v2));
// => Vector {x: -1, y: -1}

var v3 = new Vector(3, 4)
console.log(v3.getLength());
// => 5
```

\n----------------------------------------\n\n`);


//## Question 7
console.log('\n\n\n\n========================================\n## Question 7\n===============');
console.log(`\n

a. Make a class called 'Car' with properties 'make' and 'model'.  Create an instance of a 'Car'

b. Make a class called 'Bike' with properties 'gears' and 'hasBell'.  Create an instance of 'Bike'

c. Give each class a static method called 'numberOfWheels' that returns the number of wheels (2 for bikes, 4 for cars).  Why does it make sense for this to be a static method instead of an instance method?

\n----------------------------------------\n\n`);


//## Question 8
console.log('\n\n\n\n========================================\n## Question 8\n===============');
console.log(`\n

a. Make a class called 'Vehicle' with properties 'color' and 'name'.  Give it a method called 'makeSound' which logs "WHHOOSSSH" to the console

b. Modify your 'Car' and 'Bike' classes from Question 7 to extend the 'Vehicle' class.

c. Create a new 'Bike' instance that has a 'color' of "green" and 'name' "Bikey McBikeface"

d. Create a new 'Car' instance that has a 'color' of "red" and 'name' "Carry McCarface"

\n----------------------------------------\n\n`);