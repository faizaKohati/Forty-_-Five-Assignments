
                 //45 ASSIGNMENTS//
                 //coding by :FAIZA MUHAMMAD FAROOQ//



//task 01:Type hello//
let word1 : string = "Hello world!"
console.log (word1);


//task 02: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let myName: string = "Eric" ;
console.log(`Hello ${myName},would you like to learn some Python today?`) ;


//Task 03: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let firstName: string = "faiza farooq";
console.log(firstName.toLocaleLowerCase());
console.log(firstName.toLocaleUpperCase());
console.log(firstName.replace(/\b\w/g,c=> c.toUpperCase()));


//Task 04:Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let quote1 = 'A person who never made a mistake never tried anything new.'
let author = 'Albert Einstein'
console.log(`${author} once said, "${quote1}"`);


//Task 05:“A person who never made a mistake never tried anything new.”
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let quote: string =`"A person who never made a mistake never tried anything new."`;
let famous_person="Albert Einstein";
let message=`${famous_person} once said,${quote}`;
console.log(message);


//task 06:Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

const personalName :string = `   \n\tFaiza Farooq\t\n   `;

console.log(personalName);
const without_whitespace = personalName.trim();
console.log(without_whitespace);

//Task 07 and 08:
//Question #7
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
//Question #8
//You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.


//ADDITION
console.log(6+2);
//SUBTRACTION
console.log(10-2);
//MULTIPLICATION
console.log(4*2);
//DIVISION
console.log(16/2);


//You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.


//Task 09:Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favoriteNumber: number = 7 ;
console.log(`My favourite number is ${favoriteNumber}.`);


//Task 10:(a)Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.


//Name =faiza Muhammad Farooq.
//dated = 25/3/2024.
console.log(`hello world simple program`);


//Task 10(b)//
//Name =faiza Muhammad Farooq.
//dated = 25/3/2024.
console.log(5+2);


//Task 11:Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let members: string [] =[`nimra`,`asma`,`rabia`,`nazia`];
for(let i=0; i<members.length; i++){
    console.log(members[i]);
}


//Task 12:Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let member = [`nimra`, `asma`, `rabia`, `nazia`];
let messages = `tomorrow will be holiday!`;
for (let i = 0; i <members.length; i++) {
    console.log(messages + member[i]);
}


//Task 13:Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportation : string[] = [`car`, `auto`, `bike`, `van`];
for (let i = 0; i <transportation.length; i++) {
    console.log( `i would like to own a ` + transportation[i]);
}


//Task 14:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinneR


let guestlist1 : string [] = [ `Asma`,`Nimra`,`Nazia`];
for (let i=0; i<guestlist1.length; i++){
    console.log(`Dear Mr.` + guestlist1[i] + `,\n\n It is our pleasure to invite you in our party.\n\n Thank You!\n\n `)
}
export{guestlist1};


//Task  15:Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.

let guestList : string [] = [ `Asma`,`Nimra`,`Nazia`];
let absentGuest  : string = `Asma`;
let newGuest : string = `Laiba`;
 guestList[0] = newGuest;
 for (let i=0; i<guestList.length; i++) {
    console.log(`Dear Miss.` + guestList[i] + `,\n\n It is our pleasure to invite you in our party.\n\n THANK YOU You \n\n`)
 }
 console.log (`Mrs. ${absentGuest} is not coming to the party.`)
console.log(`Good News! we find big table so we are inviting 3 more guests`)


//Task 16:More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest_List : string [] = [ `Asma`,`Nimra`,`Nazia`];
let absent_Guest  : string = `Asma`;
let new_Guest : string = `Laiba`;
 guest_List[0] = new_Guest;
for (let i=0; i<guest_List.length; i++) {
   console.log(`Dear Miss.` + guest_List[i] + `,\n It is our pleasure to invite you in our party.\n THANK YOU!\n\n`)
 }
 console.log (`Mr. ${absent_Guest} is not coming to the party.`)
console.log(`Good News! we find big table so we are inviting 3 more guests\n\n`)

guest_List.unshift(`Asifa`);
guest_List.splice(2,0,`Uzma`);
guest_List.push(`Aisha`);

for (let i=0; i<guest_List.length; i++) {
    console.log(`Dear Miss.` + guest_List[i] + `,\n It is our pleasure to invite you in our party.\n THANK YOU!\n\n`)
 }


// Task 17:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests. • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guest_list : string[] = [`Asma`, `Nimra`, `Bisma`, `Alina`];
//for (let i = 0; i <guest_list.length; i++) {
   // console.log( `Respected Madam \n` + guest_list[i] + `,\nWe invited you on dinner tomorrow. \nThank You \n`);}
//Changing Guest List:You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.• Print a second set of invitation messages, one for each person who is still in your list.

let not_present : string = `Asma`;
let newGuest1 : string = `Aliza`;
guest_list[0] = newGuest1;
//for (let i = 0; i <guest_list.length; i++) 
{
   // console.log( `Respected Madam \n` + guest_list[0] + `,\nWe invited you on dinner tomorrow. \nThank You \n`);
}

      // { console.log( `${not_present} will not come on dinner.`);}

       guest_list.unshift(`aimain`,`toba`,`jiya`);
       //for (let i = 0; i <guest_list.length; i++) 
      // {
       // console.log( `Respected Madam \n` + guest_list[0] + `,\nWe invited you on dinner tomorrow .we found a bigger dinner table, so now more space is available . \nThank You \n`);
   // }
    console.log (`\nwe just found out that your new dinner table won’t arrive in time for the dinner, and we have space for only two guests`);
    while (guest_list.length>2){
        let remove_guest = guest_list.pop();
            console.log(`sorry madam . ${remove_guest} you are not invited .`);
    }
    for (let i = 0; i <guest_list.length; i++) 
    console.log( `Respected Madam \n` + guest_list[i] + `,\n you are still invited for tommorrow dinner\n`);
    guest_list.splice(0,2)
    console.log(guest_list)

    
// Task 18:Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

let places : string[] =[`lahore`,`islamabad`,`karachi`,`hydrabad`,`faisal abad`]
console.log(`original:` + places);
//• Print your array in alphabetical order without modifying the actual list.
console.log(`copy ` + [...places].sort());
//• Show that your array is still in its original order by printing it.
console.log(`original:` + places);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`copy ` + [...places].sort().reverse());
//Show that your array is still in its original order by printing it again
console.log(`original:` + places);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log(`original:` +places.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log (`original:` +places.reverse());
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(`original:` +places.sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(`original:` +places.sort().reverse());


//Task 19:Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestlist : string [] = [ `Asma`,`Nimra`,`Nazia`];

let lengthGuest: number = guestlist.length;
console.log(`We are inviting total ${lengthGuest} guests.`);


//Task 20:Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let languages : string[] = [`urdu`,`english`,`chiness`,`french`]
console.log("LIST OF LANGUAGES:")
for (let top of languages){
    console.log(top)
}

//Task21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
interface item{
    name : string;
    price : number;
}
//to create two objects
const book: item ={
    name : "Essential of typescript",
price: 600
}
const pen: item ={
    name : ` Dollar `,
price: 60
}
console.log(`book name:${book.name}, price:${book.price}`)
console.log(`pen name:${book.name}, price:${pen.price}`)

//Task 22:Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let array : (string|number) [] = [`car`,`bike`,1,2]
console.log( array [5]);
console.log( array [4]);
console.log( array [3]);
console.log( array [2]);
console.log( array [1]);
console.log( array [0]);



//Task 23:Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// test 1 :EQUALITY COMPARASION (TRUE)
let car: string = 'subaru' ;
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')//TRUE

// test 2 :STRICT EQUALITY COMPARASION (TRUE)
console.log("Is cars ==='subaru'? I predict True.")
console.log(car ==='subaru')//TRUE

//test 3 :INEQUALITY COMPARASION (FALSE)
console.log("Is car != 'subaru'? I predict False.")
console.log(car != 'subaru')//FALSE

//test 4:STRICT INEQUALITY COMPARASION (FALSE)
console.log("Is car !== 'subaru'? I predict False.")
 console.log(car !=='subaru')//FALSE

//test 5 :LESS THAN COMPARASION (FALSE)
console.log("Is car <'subaru'? I predict False.")
console.log(car <'subaru')//FALSE(lexicographic comparison)

//test 6:GREATER THAN COMPARASION (FALSE)
console.log("Is car >'subaru'? I predict FALSE.")
console.log(car >'subaru')//FALSE(lexicographic comparison)


//test 7:LESS THAN EQUAL TO (TRUE)
console.log("Is car <='subaru'? I predict TRUE.")
 console.log(car <='subaru')//TRUE
 
//test 8 :GREATER THAN EQUAL TO (TRUE)
console.log("Is car >='subaru'? I predict TRUE.")
console.log(car >='subaru')//TRUE

//test 9 :CHECKING TRUTHNESS (TRUE)
console.log("Is car? I predict TRUE.")
console.log(car)//TRUE( non empty string is truthy)

//test 10 :CHECKING FALSINESS (FALSE)
console.log("Is car? I predict FALSE.")
console.log(car)//FALSE( negation of a truthy value)


//Task 24:More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array

let car1: string = 'subaru'
let age1: number = 24
let number1: number [] = [1,2,3,4]

//STRING TEST

//TEST : 1 EQUALITY (TRUE)
console.log("Is car == 'subaru'? I predict True.")
console.log(car1== 'subaru')//TRUE

//TEST :2 STRICT EQUALITY(FALSE) 
console.log("Is cars ==='subaru'? I predict FALSE")
console.log(car1 ==='subaru')//FALSE

//test 3 :INEQUALITY(FALSE)

console.log("Is car != 'SUZUKI'? I predict TRUE.")
console.log(car1 != 'SUZUKI')//TRUE

//test 4 :INEQUALITY(FALSE)

console.log("Is car != 'subaru'? I predict False.")
console.log(car1 != 'subaru')//FALSE CASE SENSATIVE

//TEST :5 LOWER CASE CONVERSION (TRUE)
console.log( "car.toLowerCase()== 'subaru'? I predict True.")
console.log(car1 .toLowerCase()== 'subaru')//TRUE to convert lower cas

//LOWER CASE CONVERSION (FALSE)
console.log( "car.tolowerCase()=== 'subaru'? I predict FALSE.")
console.log(car1.toLowerCase() ==='subaru')//oFALSE riginal value remain upper case

//NUMERICAL TEST
//EQUALITY (TRUE)
console.log("Is age == 24 ? I predict True.")
console.log(age1 == 24)
//TRUE
//INEQUALITY (FALSE)

console.log("Is age != 25? I predict False.")
 console.log(age1!= 25)//TRUE

 //GREATER THAN COMPARASION (FALSE)

 console.log("Is age > 25? I predict False.")
 console.log(age1 > 25)//FALSE

// LESS THAN COMPARASION (TRUE)

console.log("Is car < 25? I predict False.")
console.log(age1< 25 )//TRUE

// GREATER THAN EQUAL TO COMPARASION (FALSE)

 console.log("Is age>=25? I predict FALSE.")
 console.log(age1>=25)//FALSE


 // LESS THAN EQUAL TOCOMPARASION (TRUE)
 
 console.log("Is age<=25? ?I predict FALSE.")
 console.log(age1>=25)//TRUE


 //LOGICAL OPERATPR
//AND
 console.log("Is age>20 && >30 ?I predict TRUE.")
 console.log("age>20 && < 30")//TRUE
//OR
 console.log("Is age>30 || <20?I predict FALSE.")
 console.log("age > 30 || <20")//FALSE
 //IN ARRAY TRUE
 console.log("Is 3 in number? ?I predict true.")
 console.log(3 in number1)//TRUE

 //NOT IN ARRAY FALSE
 console.log("5 is not in number? ?I predict true.")
 console.log("5 not in number")//TRUE

 
//Task 25:Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// conditional statement
//if statement
let alien1_color: string =`green`;
if(alien1_color == "green"){
console.log( `player just earn 5 points .`); }
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output

if(alien1_color == "red"){
console.log( `player just earn 5 points .`);
}


//Task 26:Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block


let alieen_color: string =`green`;
if(alieen_color == "green"){
console.log(`the player just earned 5 points for shooting the alien.`); 
}
else {
    console.log(`the player just earned 10 points.`);
}
alieen_color =`red`;
if(alieen_color == "red"){
console.log(`the player just earned 5 points for shooting the alien.`); 
}


//Task 27:Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

//• If the alien is green, print a message that the player earned 5 points.

//• If the alien is yellow, print a message that the player earned 10 points.

//• If the alien is red, print a message that the player earned 15 points.

//• Write three versions of this program, making sure each message is printed for the appropriate color alien.

//version 1
let alien_color ="green";
if(alien_color === "green"){
console.log(`version 1: the player earned 5 points..`); 
}
else if(alien_color ==="yellow"){
    console.log(`the player earned 10 points`); 
    }
else if(alien_color ==="red"){
        console.log(`the player earned 15 points`); 
        }
else {
    console.log(`the player just earned 10 points.`);}
    
//version 2
 alien_color ="yellow";
if(alien_color === "green"){
console.log(`the player earned 5 points..`); 
}
else if(alien_color ==="yellow"){
    console.log(`version 2:the player earned 10 points`); 
    }
else if(alien_color ==="red"){
        console.log(`the player earned 15 points`); 
        }
else {
    console.log(`the player just earned 10 points.`);}
    
    //version 3
alien_color ="red";
if(alien_color === "green"){
console.log(`version 1: the player earned 5 points..`); 
}
else if(alien_color ==="yellow"){
    console.log(`the player earned 10 points`); 
    }
else if(alien_color ==="red"){
        console.log(`version 3:the player earned 15 points`); 
        }
else {
    console.log(`the player just earned 10 points.`);}
    


//Task 28:Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.

//Stages of Life:
let persons_age: number = 30;
if(persons_age <2){
console.log(`the person is baby`); 
}
else if(persons_age >=2 && persons_age < 4){
    console.log(`the person is a toddler.`); 
    }
else if(persons_age >= 4 && persons_age < 13 ){
        console.log(`the person is a kid.`); 
        }
        else if(persons_age >= 13 &&  persons_age <20 ){
            console.log(`the person is an teen ager`); 
            }
            else if(persons_age >= 20 && persons_age<65 ) {
                console.log(`the person is an adultr`); 
                }
else {
    console.log(`the person is an elder`);}


//Task 29: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits: string [] = [`apple`,`banana`,`mango`];
if (favorite_fruits.includes(`apple`)){
    console.log(`I REALLY LIKE apple`);
}

if (favorite_fruits.includes(`banana`)){
    console.log(`I REALLY LIKE banana`);
}
if (favorite_fruits.includes(`mango`)){
    console.log(`I REALLY LIKE mango`);
}
if (favorite_fruits.includes(`orange`)){
    console.log(`I REALLY LIKE orange`);
}
if (favorite_fruits.includes(`pine apple`)){
    console.log(`I REALLY LIKE pone apple`);
}


//•Task 30: Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

///Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

const user1_name : string [] =[`admin`,`ali`,`ahmed`,`usama`,`fahad`];
for (let i=0; i<user1_name.length;i++)
//• If the user1name is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

 if(user1_name[i]===`admin`) {
console.log(`Hello admin, would you like to see a status report?
`); 
}
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again
else { 
   console.log(`Hello ${user1_name[i]}, thank you for logging in again.`)
}
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again


//Task 31:No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct message is printed.


let user_name : string [] =[`admin`,`ali`,`ahmed`,`usama`,`fahad`];
if (user_name.length === 0){
    console.log(`we need to find some user!`);
}
else {user_name = [];
    console.log(`All user name have been removed.` + user_name.length);

}


//Task 32: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.

//Stages of Life:
let person_age: number = 30;
if(person_age <2){
console.log(`the person is baby`); 
}
else if(person_age >=2 && person_age < 4){
    console.log(`the person is a toddler.`); 
    }
else if(person_age >= 4 && person_age < 13 ){
        console.log(`the person is a kid.`); 
        }
        else if(person_age >= 13 &&  person_age <20 ){
            console.log(`the person is an teen ager`); 
            }
            else if(person_age >= 20 && person_age<65 ) {
                console.log(`the person is an adultr`); 
                }
else {
    console.log(`the person is an elder`);}


//Task 33:Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.


       //ORDINAL_NUMBER

       let numbers: number [] = [1,2,3,4,5,6,7,8,9];

       for (let num of numbers) {
       
       let ordinalEnding:string;
       
       if (num === 1){
       
           ordinalEnding ="st";
       }
       else if (num === 2){
       
           ordinalEnding ="nd";
       }
       else if (num === 3){
       
           ordinalEnding ="rd";
       }
           else { 
               ordinalEnding ="th";
           }
               console.log(`${num}${ordinalEnding}`
                   
               )
       }


//Task 34:Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let pizzas : string[] = [`spicy`,`cheese`,`BBQ`]

for (let pizza of pizzas){
console.log(`I like ${pizza} pizza.`);
}

//Task 35: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let Animals: string [] = [`cow`,`dog`,`goat`];

for (let Animal of Animals ){

    console.log(`A ${Animal} would make a great pet.`);
}


//Task 36:T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt( size:string, text:string){
    console.log(`creating a ${size} shirt with the message: ${text}`);
}

make_shirt(`large` , `i love type script.`);
make_shirt(`medium` , `i love java.`);
make_shirt(`small` , `i love type python.`);


//Task 37:Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_user: string [] =  [`AlI`,`AhMed`,`saLman`,`sAleem`,`sAjid`];
let new_user: string [] =  [`bilal`,`AhMed`,`sajaad`,`kAleem`,`sAjid`];
//for each methd
new_user.forEach(new_user_name => {
    let lowerCase : string = new_user_name.toLowerCase();
    if (current_user.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
        console.log(`The_user_name ${new_user_name} is not available please write a different user name`);
    }
    else{
        console.log(`The user name ${new_user_name}is avaiable`)
    }
})


//Task 38:Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city_shirt( city: string, country:string = `Default country.`){
    console.log(`${city} is in ${country}`);
}
describe_city_shirt(`karachi`,`pakistan`);
describe_city_shirt(`tokyo`,`japan`);
describe_city_shirt(`paris`);


/*Task 39:City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned*/
// creating a function with parameters which return a values in string
function city_country(city: string, country: string) : string{
    return `${city},${country}`;
    }
    // callimg a function and print the return value
    city_country("karachi","Pakistan");
    console.log(city_country("karachi","Pakistan"));
    
    console.log(city_country("tokyo","Japan"));
    
    console.log(city_country("washington","America"));


//Task 40:Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artist: string, title:string, tracks?:number){
    const album: {artist: string, title:string, tracks?:number} = {
        artist :  artist, 
        title : title
    }

    if(tracks !== undefined){
        album.tracks = tracks;
    }

    return album;
}


const album1 = make_album(`Artist 1`, `Album Title 1`)
console.log(album1);

const album2 = make_album(`Artist 2`, `Album Title 2`)
console.log(album2);

const album3 = make_album(`Artist 3`, `Album Title 3`,12)
console.log(album3);


//Task 41:Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magician1 : string[] = [`Harry potter`,`Hermione Granger`, `Ron Weasley` , `Albus Dumbledore`];

function show_magicians1(magicians1 :string[]){
    magicians1.forEach (element => {
    console.log(element);
}) ;
}

show_magicians(magician1)


//Task 42:Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified*/

function show_magicians0(magicians:string[]){
    magicians.forEach (name => {
    console.log(name);
}) ;
}

function make_great1(magicians: string[]){
return magicians.map(name => `The Great ${name}`);

}
let magician_names : string[] = [`Harry potter`,`Hermione Granger`, `Ron Weasley` , `Albus Dumbledore`];

let great_magician = make_great1(magician_names);
console.log(great_magician)
show_magicians0(great_magician)


//Task 43:Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magician : string[] = [`Harry potter`,`Hermione Granger`, `Ron Weasley` , `Albus Dumbledore`];

function copyArry (arr:string[]){
    return [...arr]
}

function make_great(magicianArry: string []){

for (let i = 0; i< magicianArry.length;i++){

    magicianArry[i]=`The Great` + magicianArry[i]
}

}

function show_magicians(magicians :string[]){
    magicians.forEach (element => {
    console.log(element);
}) ;
}

const copy_magician_Array = copyArry(magician)

make_great(copy_magician_Array);

console.log(`\n\nThis is my original array:`);
show_magicians(magician);


console.log(`\n\nThis is my modify copy of the array:`);
show_magicians(copy_magician_Array);


//Task 44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwich (item: string[]) {
    console.log(`\n\nMaking your sandwich with:`);

    item.forEach(element => console.log("- " + element));
    console.log(`Enjoy your sandwich !`);

}

makeSandwich([`Ham`,`Cheese`,`club`]);
makeSandwich([`Itlay`,`turkey`]);
makeSandwich([`jelly`,`peanut butter`]);


//Task 45:Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

type car = {
    manufacture: string
    model: string
    [key: string]: any;
}

function createCar(manufacture: string, model: string, optional:Record<string, any>): car{
    return{
        manufacture,
        model,
        ...optional
    }
}
const myCar: car = createCar ("toyoto","corolla",{ color:`black`,year: "2024"})
console.log(myCar)















































































































































