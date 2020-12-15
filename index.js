import { fifaData } from './fifa.js';

/*
Sample Object:
{
  "Year": 1930,
  "Datetime": "13 Jul 1930 - 15:00",
  "Stage": "Group 1",
  "Stadium": "Pocitos",
  "City": "Montevideo",
  "Home Team Name": "France",
  "Home Team Goals": 4,
  "Away Team Goals": 1,
  "Away Team Name": "Mexico",
  "Win conditions": "",
  "Attendance": 4444,
  "Half-time Home Goals": 3,
  "Half-time Away Goals": 0,
  "Referee": "LOMBARDI Domingo (URU)",
  "Assistant 1": "CRISTOPHE Henry (BEL)",
  "Assistant 2": "REGO Gilberto (BRA)",
  "RoundID": 201,
  "MatchID": 1096,
  "Home Team Initials": "FRA",
  "Away Team Initials": "MEX"
}
*/

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final
const homeTeam = fifaData.filter(game => (game.Year === 2014 && game.Stage === 'Final'))[0]["Home Team Name"];
console.log(homeTeam);

//(b) Away Team name for 2014 world cup final
const awayTeam = fifaData.filter(game => (game.Year === 2014 && game.Stage === 'Final'))[0]["Away Team Name"];
console.log(awayTeam);

//(c) Home Team goals for 2014 world cup final
const homeTeamGoals = fifaData.filter(game => (game.Year === 2014 && game.Stage === 'Final'))[0]["Home Team Goals"];
console.log(homeTeamGoals);

//(d) Away Team goals for 2014 world cup final
const awayTeamGoals = fifaData.filter(game => (game.Year === 2014 && game.Stage === 'Final'))[0]["Away Team Goals"];
console.log(awayTeamGoals);

//(e) Winner of 2014 world cup final */
const winner2014 = () => homeTeamGoals > awayTeamGoals ? homeTeam : awayTeam;
console.log(winner2014());


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
  return data.filter(game => game.Stage === 'Final');
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(array, callback) {
  return callback(array).map(final => final.Year);
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(array, callback) {
  return callback(array).map(final => {
    return final["Home Team Goals"] > final["Away Team Goals"] ?
           final["Home Team Name"] : final["Away Team Name"]
  });
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(array, callbackYears, callbackWinners) {
  const finalsYears = callbackYears(array);
  const winnersByYear = callbackWinners(array);
  return finalsYears.map((finalYear, index) => { 
    return `In ${finalYear}, ${winnersByYear[index]} won the world cup!`
  })
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(finals) {
  const sumGoals = finals.reduce((sum, final) => {
    return sum + final["Home Team Goals"] + final["Away Team Goals"]
  },0)
  return (sumGoals / finals.length).toFixed(2);
}




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
