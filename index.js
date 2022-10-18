// 2. Question \\
var name = "Eric";
var message = "Hello Eric, would you like to learn some Python today?";
console.log(message);

// 3.\\
var name = "owais hasan";
console.log(name.toLowerCase());
console.log(name.toUpperCase());
function titleCase(name) {
    name = name.toLowerCase().split(" ");
    for (let i = 0; i < name.length; i++){
        name[i] = name[i].replace(name[i].charAt(0),
        name[i].charAt(0).toUpperCase());
    } return name.join(" ");
}
console.log(titleCase(name));

// task 4
Author = "Albert Einstein";
quote = (' once said,"A person who never made a mistake never tried anything new."');
console.log(Author + quote ); 

// task 5

famous_person = "Albert Einstein ";
message = ('once said,"A person who never made a mistake never tried anything new."');
console.log(famous_person + message);

// task 6
person_name = "hamza"
console.log(" \t " + person_name + " \n " +  person_name);

// task 7..8
console.log(10-2);
console.log(5+3);
console.log(4*2);
console.log(16/2);

// task 9
fav_num = "8-july-19";
message = " my daughter birthday. "
console.log(fav_num + message);

// task 10

var a = 2;
var b = 10;
var c = (a+b); 
console.log(c);
//"create by owais 03.10.2022 add program ";

var x = 8;
var y = 6;
var z = (x-y);
console.log(z);
// "create by owais on 03.10.2022 subtract program";

// task 11
var freindnames = ["Akhlaq", "Hamza", "Zuhair", "Hayat"];
console.log(freindnames[0]);
console.log(freindnames[1]);
console.log(freindnames[2]);
console.log(freindnames[3]);

// task 12
message = "Hello"
console.log(message +", " + freindnames[0]);
console.log(message +", " + freindnames[1]);
console.log(message +", " + freindnames[2]);
console.log(message +", " + freindnames[3]);

// task 13
fav_transport= [' suzuki bike 110"', ' honda bike 125"', ' suzuki car aulto"'];
message = ('"I would like to own a');
console.log(message + fav_transport[0]);
console.log(message + fav_transport[1]);
console.log(message + fav_transport[2]);

// task 14

freinds_invite = ["Ehtimam", "akhlaq", "hamza"]
message_inv = ('invite for a dinner at my home your presence is precious for me."')
console.log(freinds_invite[0]+ " " + message_inv);
console.log(freinds_invite[1]+ " " + message_inv);
console.log(freinds_invite[2]+ " " + message_inv);

// task 15
freinds_invite = ["Ehtimam", "akhlaq", "hamza"]
message_inv = (' invite for a dinner at my home your presence is precious for me."')
message_upd = ("can't make dinner")
console.log(freinds_invite[0]+ " " + message_inv);
console.log(freinds_invite[1] + " " +message_inv);
console.log(freinds_invite[2]+ " " + message_inv);
console.log(freinds_invite[2]+ " " + message_upd);
// Ehtimam can't make dinner invite kashif
delete(freinds_invite[0]);
console.log(freinds_invite);
freinds_invite.splice(0,1, "kashif");
console.log(freinds_invite);
console.log(freinds_invite[0]+ " " + message_inv);
console.log(freinds_invite[1] + " " +message_inv);
console.log(freinds_invite[2]+ " " + message_inv);

// task 16
// found a bigger dinner table and add one more guest.
freinds_invite.splice(3,0, "zuhair");
console.log(freinds_invite);
message_new = "my dinner table size increase so i invite on more guest"
console.log(freinds_invite[0]+ " " + message_new);
console.log(freinds_invite[1] + " " +message_new);
console.log(freinds_invite[2]+ " " + message_new);
console.log(freinds_invite[3]+ " " + message_new);

// task 17
// sorry message only 2 person invite
message_sorry = "very sorry i invite only two person for dinner"
console.log(freinds_invite[0]+ " " + message_sorry);
console.log(freinds_invite[1] + " " +message_sorry);
console.log(freinds_invite[2]+ " " + message_sorry);
console.log(freinds_invite[3]+ " " + message_sorry);
//remove guest from my list 
delete(freinds_invite[2]);
msg_sorry = (" sorry for remove from guest list");
alert( "hamza" + msg_sorry);
delete(freinds_invite[0]);
alert( "kashif" + msg_sorry);
// last 2 person in list still invited msg.
console.log(freinds_invite);
console.log( "you both still invited akhlaq and zuhair.")
// remove last two print empty list
delete(freinds_invite[1]);
delete(freinds_invite[3]);
console.log(freinds_invite);

// task 18
places = ["Turkey", "Swizerland", "Spain", "Dubai", "Singapore"];
console.log(places);
places.sort();
console.log(places);
places.reverse();
console.log(places);
places.reverse();
console.log(places);
places.sort();
console.log(places);
places.sort();
console.log(places);

// task 19

freinds_dinner = ["akhlaq ", "zuhair ", "hamza"];
message_invite = ("you invited in dinner with me");
console.log(freinds_dinner + " " + message_inv);

// task 20
// write a program in which mountain names
mountain = ["mount everest", "mount k2", "mount kangchenjunga"]

// write a program in which river names in pakistan
rivers = ["indus", "jhelum", "chenab", "ravi", "sutlej", "kabul"]

//write a program in which some countries names 
countries = ["pakistan", "canada", "malaysia", "sirilanka", "australia"]

//write a program in which some cities names in pakistan
cities = ["karachi", "islamabad", "lahore", "sargodha", "muzafrabad", "multan"] 

//write a program in which some language names 
language = ["urdu", "english", "arabic", "sindhi", "farsi", "chineese"]

// task 21
var date = new Date();
console.log(date);

// task 22
// Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.
Awake = ["breakfast", "lunch", "dinner"]
// international error 
delete(Awake[3]);
// note breakfast on position 0, next on 1, next on 2
// now i correct del last one(in real life is not possible)
delete(Awake[2]);
console.log(Awake);

// task 23
// 5 test evaluate false
let office = 'class';
console.log("Is office == 'class'? I predict false.");
console.log(office != 'class');

let  manual = 'computer work' ;
console.log("Is manual work == computer work? I predict false.");
console.log(manual != 'computer work');


let  time_value_money = 'time pass' ;
console.log("time_value_money == 'time pass'? I predict false.");
console.log(time_value_money != 'time pass');

let  study_books = 'pubg_games' ;
console.log("study_books == 'pubg_games'? I predict false.");
console.log(study_books != 'pubg_games');

let  china_bikes = 'honda_bikes' ;
console.log("china_bikes == 'honda_bikes'? I predict false.");
console.log(china_bikes != 'honda_bikes');

// 5 test evaluate true
let work = 'family';
console.log("Is work == 'family' balance of life? I predict true.");
console.log(work == 'family');

let  honda = 'civic';
console.log("Is honda == 'civic'? I predict true.");
console.log(honda == 'civic');

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru');

let samsung = 'laptop';
console.log("Is samsung == 'laptop'? I predict True.")
console.log(samsung == 'laptop');


let  apple = 'Iphone11x';
console.log("Is Apple = 'Iphone 11x'? I predict True.")
console.log(apple == 'Iphone11x');


// task 24
// 1. equality. 2.un equality
let  Apple = 'laptop';
console.log("Is Apple = 'laptop'? I predict True.")
console.log(Apple == 'laptop');

let  App1e = 'q mobile';
console.log("Is Apple = 'q mobile'? I predict false.")
console.log(App1e == 'q mobile');

// lower casde test
console.log("Is akhlaque = 'akhlaque'? I predict True.")
console.log("akhlaque" == 'akhlaque');

console.log("Is akhlaque = 'akhlaqe'? I predict True.")
console.log('akhlaque' == 'akhlaqe');

// numerical test
console.log("Is 3 = 3? I predict true.")
console.log(3 == 3);

console.log("Is 2 = 3? I predict false.")
console.log(2 == 3);

// greater than
console.log("Is 2 > 4? I predict false.")
console.log(2 > 4);

// less than

console.log("Is 2 < 5? I predict true.")
console.log(2 < 5);

// greater than or equal to

console.log("Is 2 <= 6? I predict true.")
console.log(2 <= 6);

// less than equal to

console.log("Is 6 <= 9? I predict true.")
console.log(6 <= 9);

// and   or operator

console.log("Is 10 < 11 && 11> 2. I predict true.")
console.log(10 < 11 && 11> 2);

console.log("Is 10 < 11 && 11> 12. I predict false.")
console.log(10 < 11 && 11> 12);
// or

console.log("Is 11 < 11 || 11> 2. I predict false.")
console.log(11 < 11 || 11> 2);

console.log("Is 10 < 11 || 13> 5. I predict true.")
console.log(10 < 11 || 13> 5);

// array

console.log(["Is  [1] = ['1'] I predict false."])
console.log(([1]) == (['1']));

console.log(['Is  [1] = ("1"). I predict true.'])
console.log((["1"]) == ("1"));

// 25 task
// 'Imagine an alien was shot down in game'
let alienColor = ("green", "yellow", "red");

let aliencolor = "green"
if (aliencolor == "green") {
    console.log("you just earned 5 points")
}
if (aliencolor != "green") {
    console.log("")
}

// 26 task
let aliencolor1 = "red" 
if (aliencolor1 == "green") {
    console.log("you just earned 5 points for shooting the alien")
}

 if (aliencolor1 != "green") {
        console.log("you just earned 10 points");
 }

 let aliencolors = "yellow" 
if (aliencolors == "green") {
    console.log("you just earned 5 points for shooting the alien");
 } else if (aliencolors == "yellow") {
        console.log("you just earned 11points");
}  else if (aliencolors == "red") {
        console.log("you just earned 15points");
}

///
let alienscolor = "red" 
 if (alienscolor == "yellow") {
    console.log("you just earned 11points");
} 
else if (alienscolor == "green") {
    console.log("you just earned 5 points for shooting the alien");
 }  
 else if (alienscolor == "red") {
        console.log("you just earned 15points");
}

//   27 task
//// If the alien is green, print a message that the player earned 5 points.//

let aliencoLor = ("green");
 if (aliencoLor == "green"){
    console.log("the player earned 5 points.");
 }
else if (aliencoLor == "yellow"){
   console.log("the player earned 5 points.");
}
else if (aliencoLor == "red"){
    console.log("the player earned 5 points.");
}

 /// If the alien is yellow, print a message that the player earned 10 points.

let aLiencolor = ("yellow");
if (aLiencolor == "yellow"){
    console.log("the player earned 10 points.")
}
else if (aliencoLor == "green"){
    console.log("the player earned 5 points.");
 }
 else if (aliencoLor == "red"){
     console.log("the player earned 5 points.");
 }
 

//  If the alien is red, print a message that the player earned 15 points.

let aliencolOr = "red";
if (aliencolOr == "red"){
    console.log("the player earned 15 Points.")
}
else if (aliencoLor == "yellow"){
    console.log("the player earned 5 points.");
 }
 else if (aliencoLor == "green"){
     console.log("the player earned 5 points.");
 }
 

// 28 task Stages of Life: Write an if-else chain that determines a person’s stage of life. 
// Set a value for the variable age, and then:
// 1...If the person is less than 2 years old, print a message that the person is a baby.

let age = 1;
 if (age < 2){
    console.log("the person is a baby.")
}
//If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

let Age = 2;
if (Age < 4){
    console.log("the person is a toddler.")
}

//  If the person is at least 4 years old but less than 13, print a message that the person is a kid.

let agE = 4;
if (age < 13){
    console.log("the person is a kid.")
}

//If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

age = 13;
if (age < 20){
    console.log("the person is teenager.")
}


// If the person is at least 20 years old but less than 65, print a message that the person is an adult.

age = 20;
if (age < 65){
    console.log("the person is an adult.")
}

// If the person is age 65 or older, print a message that the person is an elder.

age = 65;
if (age >= 65){
    console.log("the person is an elder.")
}


// 29 Make a array of your favorite fruits, and then write a series of independent if statements that check 
//for certain fruits in your array.

favorite_fruit = ["orange", "peach", "kiwi"];
fav_fruit = favorite_fruit.includes("orange", "kiwi");
console.log(fav_fruit);


//Make a array of your three favorite fruits and call it favorite_fruits.

console.log(favorite_fruit);


// 30.....Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code
// that will print a greeting to each user after they log in to a website. Loop through the array, 
//and print a greeting to each user:

username = ["admin", "akram", "rizwan", "amjad", "sikadar", "hamza"]
greeting = "hello"
for (let i=0; i < username.length; i++){
    console.log(greeting, username[i])
}

//If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

username = ["admin,", "akram", "rizwan", "amjad", "sikadar", "hamza"];
 let findValue = username.find(e => e ==="admin,")
    console.log("Hello",findValue,`would you like to see a status report.`);


// Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

generic_greeting = "Hello Eric, thank you for logging in again.";
    console.log(generic_greeting);



// 31 task
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

list_of_users = [];
list_of_users.push("baby", "toddler", "kid", "teenager", "adult")
console.log(list_of_users);

// If the list is empty, print the message We need to find some users!
 list = []
if (list == 0){
    console.log("We need to find some users!")
}

// Remove all of the usernames from your array, and make sure the correct message is printed.

usernames = ["admin", "hamza", "akhlaq"];
usernames.splice(0, usernames.length);
if (usernames == 0){
    console.log("correct message.")
}

//  32 task
// Checking Usernames: Do the following to create a program that simulates how websites 
// ensure that everyone has a unique username.
// Make a list of five or more usernames called current_users.

current_users = ["akhtar","shohaib","ahmed","imran","afridi"]


// Make another list of five usernames called new_users. Make sure one or two
// of the new usernames are also in the current_users list.

new_users = ["admin","john","shohaib","afridi","ahmed"]


//Loop through the new_users list to see if each new username has already been used.
// If it has, print a message that the person will need to enter a new username.
// If a username has not been used, print a message saying that the username is available.
// Make sure your comparison is case insensitive. If 'John' has been used,
// 'JOHN' should not be accepted.
 
new_users.map((user) =>{
    if (current_users.includes(user.toLowerCase())){
        console.log(user +",username is not available please choose another");
    }else{
        console.log(user+",username is available");
    }
});

// 33 task

// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal 
// numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output
//  should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

ordinal_Numbers = [1,2,3,4,5,6,7,8,9]
ordinal_Numbers.map((num) =>{
    if (num==1){
        console.log("1st");
    }else if (num==2){
        console.log("2nd");
    }else if (num==3){
        console.log("3rd");
    }else{
        console.log(num+"th");
    }
});

//34 task
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
// and then use a for loop to print the name of each pizza.

favorite_pizza = ["pepproni pizza","barbeque pizza","creamy pizza"]

for (let i = 0; i < favorite_pizza.length; i++){
    console.log(favorite_pizza[i])
}

// • Modify your for loop to print a sentence using the name of the pizza instead of printing
//  just the name of the pizza. For each pizza you should have one line of output containing a simple 
// statement like I like pepperoni pizza.

for (let i = 0; i < favorite_pizza.length; i++){
    console.log("I like", favorite_pizza[i])
}

//  • Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
//  The output should consist of three or more lines about the kinds of pizza you like and then an additional
//  sentence, such as I really love pizza!

for (let i = 0; i < favorite_pizza.length; i++){
    console.log(favorite_pizza[i],"its fantastic delicious taste i really love pizza!.")
}

// 35 task
// Animals: Think of at least three different animals that have a common characteristic. Store
// the names of these animals in a list, and then use a for loop to print out the name of each animal.

Animals = ["dog","wolf","cat"]
for (let i = 0; i < Animals.length; i++){
    console.log(Animals[i])
}


//• Modify your program to print a statement about each animal, such as A dog would make a great pet.

Animals = ["dog","wolf","cat"]
for (let i = 0; i < Animals.length; i++){
    console.log("A",Animals[i],"would make a great pet.")
}


// • Add a line at the end of your program stating what these animals have in common. You could print a 
// sentence such as Any of these animals would make a great pet!

Animals = ["dog","wolf","cat"]
for (let i = 0; i < Animals.length; i++){
    console.log("A",Animals[i],"would make a great pet.family pet")
}

// 36 task
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should
//  be printed on the shirt. The function should print a sentence summarizing the size of the shirt and 
// the message printed on it. Call the function.

make_shirt= (size, message)=> {
    console.log("summarizing the size of the shirt"+size+" the message printed on it"+message)
}
make_shirt(" 'small'", " 'Call the function'")


// 37 task
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads
// I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any 
// size with a different message.

make_shirt= (size, message)=> {
    console.log("Make a"+size+" the message printed on it"+message)
}
make_shirt(" 'large shirt & medium'", " 'I love JavaScript.'")

make_shirt= (size, message)=> {
    console.log("Make a"+size+" the message printed on it"+message)
}
make_shirt(" 'Excel Shirt'", " 'I love Metaverse.'")


// task 38
// Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter
// for the country a default value. Call your function for three different cities, at least one of 
// which is not in the default country.

function describe_city(name, countryName = " Pakistan"){
    console.log("such as"+name+ "is in"+countryName)
}
describe_city(" Karachi ");
describe_city(" Toronto ", " Canada");
describe_city(" Berlin ", " Germany");

// 39 task
// City Names: Write a function called city_country() that takes in the name of a city and its country.
//  The function should return a string formatted like this:
//"Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.


function city_country(name, countryName ){
    console.log(name+ countryName)
}
city_country(`"Lahore,`, ` Pakistan"`);
city_country(`"Madrid,`, ` Spain"`);
city_country(`"Kuala lumpur,`, ` Malaysia"`);

//  task 40
// Album: Write a function called make_album() that builds a Object describing a music album. The function should
//  take in an artist name and an album title, and it should return a Object containing these two pieces of 
// information. Use the function to make three dictionaries representing different albums. Print each 
// return value to show that Objects are storing the album information correctly. Add an optional parameter
// to make_album() that allows you to store the number of tracks on an album. If the calling line includes 
// a value for the number of tracks, add that value to the album’s Object. Make at least one new function 
// call that includes the number of tracks on an album.

function make_album(artistName, albumTitle, numberOfTracks) {
    console.log(artistName, albumTitle, numberOfTracks)
}
make_album("Atif Aslam", "Jal Pari", "11");
make_album("Shuja haider", "Alif", "01");
make_album("Just in bieber", "let me love", "07");

// 41 task
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.
 
show_magician = ["(samad)","(ali)", "(hamza)"]
show_magician.forEach(i =>console.log(i));

// 42 task
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
// that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.

// copy_39 exercise
function city_country(name, countryName ){
    console.log(name+ countryName)
}
city_country(`"Lahore,`, ` Pakistan"`);
city_country(`"Madrid,`, ` Spain"`);
city_country(`"Kuala lumpur,`, ` Malaysia"`);

// b
show_magician = ["(samad)","(ali)", "(hamza)"]
make_great = show_magician 
make_great.forEach(i =>console.log("Great",(i)));
console.log(make_great);

// 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy 
// of the array of magicians’ names. Because the original array will be unchanged, return the new array 
// and store it in a separate array. Call show_magicians() with each array to show that you have one
//  array of the original names and one array with the Great added to each magician’s name

make_great = ["(samad)","(ali)", "(hamza)"]
show_magicians = make_great

show_magicians.forEach(i =>console.log(i));
console.log(show_magicians);

// and one array with the Great added to each magician’s name
make_great = show_magician 
make_great.forEach(i =>console.log("Great",(i)));


// task 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should 
// have one parameter that collects as many items as the function call provides, and it should print a summary of
// the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwich(parameter, parameter1){
    console.log(parameter + parameter1);
}
console.log("you order ready in 5 minutes")
sandwich("chicken sandwich, ", "with cheese")
sandwich("barbeque chicken, ", "perypery sauce")
sandwich("barbeque beef, ", "mayoneese")

// task 45
// Cars: Write a function that stores information about a car in a Object. The function should always
//  receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, such as a color
//  or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.



class CarsInformation {
    constructor(manufacturer, modelName, color, year) {
       this.manufacturer = manufacturer
       this.modelName = modelName
       this.color = color
       this.year = year
    } 
    } 
    let carinformation = new CarsInformation("suzuki,","Aulto vxr,","silver,","2022");
    console.log("manufacturer :",carinformation.manufacturer,"modelName :",carinformation.modelName,"color :",carinformation.color,"year :",carinformation.year)

    let carinformation1 = new CarsInformation("honda,","Altis,","pearl,","2022");
    console.log("manufacturer :",carinformation1.manufacturer,"modelName :",carinformation1.modelName,"color :",carinformation1.color,"year :",carinformation1.year)

    let carinformation2 = new CarsInformation("toyota,","Aqua,","black,","2022");
    console.log("manufacturer :",carinformation2.manufacturer,"modelName :",carinformation2.modelName,"color :",carinformation2.color,"year :",carinformation2.year)












