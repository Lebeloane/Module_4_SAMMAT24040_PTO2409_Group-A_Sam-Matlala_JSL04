// # [JSL04] Submission: Monster Ternary Operator

// #### Challenge 1: Flavor Selection
// Given a variable that holds a user's preferred type of Monster Energy drink, 
// print whether the user prefers a "Regular" or "Sugar-free" variety. If the preference is not set, default to "Regular".

let userPreference = 'Sugar-free'; // Possible values: 'Regular', 'Sugar-free', or undefined
const preferredType = userPreference ? 
    (userPreference === 'Sugar-free' ? 'Sugar-free' : 'Regular') 
    : 'Regular';
console.log(`Preferred Type of Monster Energy drink: ${preferredType}`);

// #### Challenge 2: Stock Check
// You have a variable that tracks the number of Monster Energy cans left in the fridge. 
// Use a ternary operator to print "Time to restock!" if the number is less than 5, or "We're stocked!" if the number is 5 or more.

const cansLeft = 10;  
const stockMessage = !isNaN(cansLeft) ? 
    (cansLeft < 5 ? 
        `Time to restock! Cans in stock: ${cansLeft}` 
        : `We're stocked! Cans in stock: ${cansLeft}`)
    : 'Invalid input: Please enter a number';
console.log(stockMessage);


// #### Challenge 3: Workout Intensity
// Based on the current heart rate, determine if the user should drink a Monster Energy drink to boost their workout. 
// If the heart rate is below 100 bpm, print "Boost needed!", otherwise, print "Energy levels are high!".

const heartRate = 100;  // heart rate value in bpm
const heartRateMessage = !isNaN(heartRate) && heartRate > 0 ?
    `Your Heart Rate: ${heartRate} bpm, ${
        heartRate < 100 ? 'Boost Needed!' : 'Energy levels are high!'
    }`
    : 'Invalid heart rate: Please enter a positive number';
console.log(heartRateMessage);

// #### Challenge 4: Temperature Suitability
// Monster Energy drinks are best served cold. Given the current temperature, use a ternary to print "Chilled to perfection!" 
// if the temperature is below or equal to 5°C, or "Needs a cooler!" if above 5°C.

const currentTemp = 6;  // temp value in °C
const tempMessage = !isNaN(currentTemp) ?
    `${currentTemp <= 5 ? 'Chilled to perfection!' : 'Needs a cooler!'} (${currentTemp}°C)`
    : 'Invalid temperature: Please enter a number';
console.log(tempMessage);


// #### Challenge 5: Late Night Coding Session
// Determine if it's a good idea to have a Monster Energy drink based on the current hour.
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!",
// otherwise, print "Better stick to water."

// Define the current hour in 24-hour format
const currentHour = 20; 

// Write your code below this line to determine if it's a good idea to have a Monster Energy drink based on the current hour
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!"
// Otherwise, print "Better stick to water."

const drinkMessage = !isNaN(currentHour) && currentHour >= 0 && currentHour <= 24 ?
    (currentHour >= 7 && currentHour < 24 ? 
        'Unleash the beast!' 
        : 'Better stick to water.')
    : 'Invalid hour: Please enter a number between 0 and 24';
console.log(drinkMessage);




// In each of these challenges, the ternary operator is used to decide between two options based on a condition, 
// demonstrating its utility for concise conditional logic. Remember that while ternaries can make the code more succinct, 
// they should be used judiciously to maintain readability, especially for more complex conditions.