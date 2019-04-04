const express = require('express')
const router = express.Router()
const request = require('request')

const arrOfFood = []

router.get('/sanity', function (req, res) {
    res.send("OK!")
})

router.get('/foodbytype/:foodtype', function (req, res) {
    const argFoodType = req.params.foodtype
    console.log(`getting by type: ${argFoodType}`)
  
    const url = `http://www.recipepuppy.com/api/?q=${argFoodType}`
    request.get(url, (error, response, body) => {
        const arg = JSON.parse(body)    
        this.arrOfFood = arg.results
                
        res.send(this.arrOfFood)
    });


})


// router.get('/teams/:teamName', function (req, res) {

//     const teamToIDs = {
//         "lakers": "1610612747",
//         "warriors": "1610612744",
//         "heat": "1610612748",
//         "suns": "1610612756"
//     }

//     const teamName = req.params.teamName
//     const teamArgId = teamToIDs[teamName]
//     const arrFilteredPlayers = arrPlayers.filter(t => t.teamID == teamArgId)
//     res.send(arrFilteredPlayers)

// })
// router.get('/foods', function (req, res) {
//     // console.log("getting teams first time 1")
//     const url = "http://www.recipepuppy.com/api/";
//     request.get(url, (error, response, body) => {
//         const arg = JSON.parse(body)
//         this.players = (arg.league.standard).map(e => ({
//             firstName: e.firstName,
//             lastName: e.lastName,
//             pos: e.pos,
//             jersey: e.jersey,
//             isActive: e.isActive,
//             teamID: e.teams[e.teams.length - 1].teamId,
//             img: `https://nba-players.herokuapp.com/players/${e.lastName}/${e.firstName}`
//         }))
          
//         res.send(arrFilteredPlayers)
//     });
// })
module.exports = router