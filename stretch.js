import { fifaData } from './fifa.js';
import functions from './index';

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

// For a function that determines how many goals a country has scored, see getGoalsByCountry function in index.js

// Use `.map()` to format country names into `<h1>` HTML headers.

function formatNames(data) {
  let countryHeaders = new Map();
  
  data.map((game) => {
    let homeName = game["Home Team Name"];
    if (!countryHeaders.get(homeName)) {
      countryHeaders.set(homeName, `<h1>${game["Home Team Name"]}</h1>`);
    } 

    let awayName = game["Away Team Name"];
    if (!countryHeaders.get(awayName)) {
      countryHeaders.set(awayName, `<h1>${game["Away Team Name"]}</h1>`);
    }
  })

  return countryHeaders;
}

console.log(formatNames(fifaData));