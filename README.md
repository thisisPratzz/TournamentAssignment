# TournamentAssignment

To Insert a Player
POST :https://nodejs-tournament.herokuapp.com/players
Request Body sample
 {
  "name": "rakesh",
  "country": "Shrilanaka",
  "type": "bowler",
  "team": "Pakistan",
  "year": 2021
}


To get all players 
GET 
https://nodejs-tournament.herokuapp.com/players




To get player by id  
GET 
https://nodejs-tournament.herokuapp.com/players/:ID
Example https://nodejs-tournament.herokuapp.com/players/1



To get Team Details 
GET http://nodejs-tournament.herokuapp.com/team


To insert a Team 
POST 
Request Body sample 
{
  "name":"England",
	"owner":"vijay maila2",
  	"captain": "Dhoni"
}    



To get match Summary 
https://nodejs-tournament.herokuapp.com/macthsummary


TO get Tournament Scores 

https://nodejs-tournament.herokuapp.com/tournamentscores
