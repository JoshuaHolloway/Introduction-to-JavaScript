/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Create a variable called votingAge and assign it a value
   2. Console log true if age is 18 or higher

   HINT: no function required
*/
const votingAge = 18;
const age = 37;
if (age > votingAge)
  console.log('true');


/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Console log the new value of the 1st variable

   HINT: no function required
*/
// declare a variable
let variable = 5;

// use a conditional to change the value of that variable based on the value assigned to a second variable
const second_variable = 4.999999;
if (variable < second_variable)
    variable = 1e3;

console.log(`variable = ${variable}`);




/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Console log the result

   HINT: look up the Number method
*/
const str2num = str => Number(str);
const x = str2num('1999');
console.log(x);
console.log(typeof x);




/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the parameters: a and b
   3. Multiply a and b and return the answer
*/

const multiply = (a, b) => a * b;
// function multiply(/*add your code here*/){
//   /*add your code here*/
// }



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
*/

const human2dogYear_conversionFactor = 7;
const dogYears = human_age => human_age * human2dogYear_conversionFactor;



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights
  
  Feeding Requirements:

  Adult Dogs 1 year and older 
     up to 5 lbs - 5% of their body weight
     6 - 10 lbs - 4% of their body weight 
     11 - 15 lbs - 3% of their body weight 
     > 15lbs - 2% of their body weight 

  Puppies less than 1 year
     2 - 4 months 10% of their body weight
     4 - 7 months 5% of their body weight 
     7 - 12 months 4% of their body weight
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

const hungryDog = (weight, age) => {
    let pounds_of_food;
    if (age >= 1) { // adult dogs at least 1 year 
        if (weight <= 5) // up to 5 lbs - 5% of their body weight
            pounds_of_food = 0.05 * weight;
        else if (6 <= weight && weight <= 10) // 6 - 10 lbs - 4% of their body weight 
            pounds_of_food = 0.04 * weight;
        else if (11 <= weight && weight <= 15) // 11 - 15 lbs - 3% of their body weight 
            pounds_of_food = 0.03 * weight;
        else if (weight > 15)// > 15lbs - 2% of their body weight
            pounds_of_food = 0.02 * weight;
        // else
        //     return "We don't know!";
    } else { // Puppies less than 1 year

        // Convert months to factions of a year
        const months2years = months => months / 12.0;
        // Ex: 2-months * (year / 12-months) = (2/12)-years = (1/6)-year = 0.1667-years

        console.log(`2-months = ${months2years(2)}`);
        console.log(`4-months = ${months2years(4)}`);
        console.log(`7-months = ${months2years(7)}`);

        if (months2years(2) <= age && age < months2years(4)) // [2, 4)-months
            pounds_of_food = 0.1 * weight; // 2 - 4 months 10% of their body weight
        if (months2years(4) <= age && age <= months2years(4)) // [4, 7)-months
            pounds_of_food = 0.05 * weight;// 4 - 7 months 5% of their body weight 
        if (months2years(4) <= age && age < 1) // [7, 12)-months
            pounds_of_food = 0.04 * weight; // 7 - 12 months 4% of their body weight
    }
    // return pounds_of_food.toFixed(2); // round to nearest tenth of a pound
    return pounds_of_food;
};


// NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
const weight = 15;
const dog_age = 1;
const food_to_eat = hungryDog(weight, dog_age);
// console.log(`Ammount of food to eat is ${food_to_eat}-lbs of food!`);

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()

Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
   - win should return "you win!"
   - lose should return "you lose!"
   - tie should return "it's a tie"
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/

function game(user, computer){
    /*add your code here*/
}
  
  

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kiolmeters received to miles
  3. Return the number of miles
*/

// 1km = 0.62137119223mi
// const miles = km => km * 0.62137;
const miles = km => km * 0.621371;
// const miles = km => km * 0.621371192;

// const miles = km => km * (1 / 1.60934);

// const five_km = 5;
// const num_miles = miles(five_km);
// console.log('num_miles: ', num_miles);


//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of cm
  2. Convert the number of cm to feet
  3. Return number of feet
*/
//   x[cm] * (1[ft] / 30.48[cm]) = x[ft]
// = x[cm] * 0.03280839895013123 [ft/cm]

// const cm = 1;
const feet = cm => cm * 0.03280839895013123;
// console.log('feet: ', feet(cm));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start the count down from the number received 
  2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
      "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
*/

const annoyingSong = num => {
  return `${num} bottles of soda on the wall, ${num} bottles of soda, take one down pass it around ${--num} bottles of soda on the wall`;
};
// const starting_num_of_sodas = 5;
// annoyingSong(starting_num_of_sodas);

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 should return 'you got an A' 
   80-89 should return 'you got a B'
   70-79 should return 'you got a C'
   60-69 should return 'you got a D'
   below should return 'you got an F'
*/
  
const grade = (num_grade) => {
    if (90 <= num_grade) return 'you got an A'; // [90, infinity)
    else if (80 <= num_grade && num_grade < 90) return 'you got a B'; // [80, 90)
    else if (70 <= num_grade && num_grade < 80) return 'you got a C'; // [70, 80)       
    else if (60 <= num_grade && num_grade < 70) return 'you got a D'; // [60, 70)
    else if (num_grade < 60) return 'you got an F'; // (-infity, 60)
};


/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/


// function vowelCounter(str) {
const vowelCounter = str => {

  // /pattern/flags -- Used to specify the parameters of the search pattern.
  const reg_ex = /[aeiou]/gi;
  //  g says to find all matches within the string (instead of only the first).
  //  i flag says to ignore the case of the letters.

  const matches = str.match(reg_ex);
  console.log('--------');
  console.log(matches);
  console.log('--------');

  if (matches != null)    return matches.length;
  else                    return 0;
};

const test_word = 'supercalifragilisticexpialidocious';
const num_vowels = vowelCounter(test_word);
console.log(`number of vowels in the word ${test_word}: `, num_vowels);


/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade
}
