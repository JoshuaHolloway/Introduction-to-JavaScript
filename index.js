/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
const votingAge = 18;
const age = 37;
if (age > votingAge)
    console.log('true');

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)





//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method





//Task d: Write a function to multiply a*b 





/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
const human2_dogYear_conversionFactor = 7;
const human2dog_years = human_age => human_age * human2_dogYear_conversionFactor;

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.
const dog_feeder = (weight, age) => {
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
    return pounds_of_food.toFixed(2); // round to nearest tenth of a pound
};

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
const weight = 15;
const dog_age = 1;
const food_to_eat = dog_feeder(weight, age);
console.log(`Ammount of food to eat is ${food_to_eat}-lbs of food!`);
  




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number
const game = (players_choice) => {
    
};

  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
// 1km = 0.62137119223mi
// Ex: 5km * (0.62137119223mi / 1km) = (5 * 0.62137119223)-mi
const km2mi = km => km * 0.62137119223;

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
const ft2cm = ft => ft * 30.48;
// 1 foot = 30.480 Centimetres
// Ex: 5ft * (30.480cm / 1ft) = (5 * 30.480)-ft
  



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
const annoyingSong = num => {
    for (let i = num; i > 0;/* decrement done in the body of the for-loop */)
        console.log(`There are ${i}-bottles of soda on the wall, ${i}-bottles of soda, take one down pass it around ${--i}-bottles of soda on the wall`);
};
const starting_num_of_sodas = 5;
annoyingSong(starting_num_of_sodas);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
const letter_grade = num_grade => {
    if (90 <= num_grade) // [90, infinity)
        return 'A';
    else if (80 <= num_grade && num_grade < 90) // [80, 90)
        return 'B';
    else if (70 <= num_grade && num_grade < 80) // [70, 80)
        return 'C';
    else if (60 <= num_grade && num_grade < 70) // [60, 70)
        return 'D';
    else if (num_grade < 60) // (-infity, 60)
        return 'F'
};
for (let num_grade = 5; num_grade < 120; num_grade+=10)
    console.log(`${num_grade} receives a letter grade of ${letter_grade(num_grade)}`);

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method
const count_num_vowels = () => {

};

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object