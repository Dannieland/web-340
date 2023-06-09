/*
 Title: index.js
 Date: 6/9/2023
 Author: Danielle Taplin
 Description: this file contains code to display team data and the championship game data
*/

// importing team-manager module and assigning it to teamManager variable
const teamManager = require("./team-manager");

// console logging teams names and mascots return from findTeams
function displayTeamData() {
	console.log("-- DISPLAYING TEAMS --");
	for (let team of teamManager.findTeams()) {
		console.log(`Name: ${team.name}
Mascot: ${team.mascot}
Player Count: ${team.playerCount}
        `);
	}
}

// console logging Championship game team names and mascots
function displayChampionshipGame() {
	console.log(`-- CHAMPIONSHIP GAME --
${teamManager.getGame()}`);
}

// calling the functions to console log data
displayTeamData();
displayChampionshipGame();