/*
 Title: team.js
 Date: 6/9/2023
 Author: Danielle Taplin
 Description: class for team objects
*/
 

// class with constructor that creates and initializes team objects
class Team {
	constructor(name, mascot, playerCount) {
		this.name = name;
		this.mascot = mascot;
		this.playerCount = playerCount;
	}
}

// exporting the Team class
module.exports = Team;