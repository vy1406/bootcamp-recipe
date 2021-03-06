const express = require('express')
const router = express.Router()
const request = require('request')

const arrOfFood = []

router.get('/sanity', function (req, res) {
    res.send("OK!")
})

router.get('/filterByIngredients/:ingredients', function (req, res) {
    const argIngredients = req.params.ingredients
    const arrIngredientsToFilter = argIngredients.split(',')
    const arrFoodFiltered = []
    // -------------------------
    // need a simplier way
    for ( let i = 0 ; i < this.arrOfFood.length ; i ++ ){
        const curFood = this.arrOfFood[i]
        for ( let j = 0 ; j < arrIngredientsToFilter.length ; j ++ ){
            const curIngredient = arrIngredientsToFilter[j]
            if ( isExist(curFood.ingredients, curIngredient))
                arrFoodFiltered.push(curFood)
        }
    }
    res.send(arrFoodFiltered)
})


router.get('/foodbytype/:foodtype', function (req, res) {
    const argFoodType = req.params.foodtype
    const url = `http://www.recipepuppy.com/api/?q=${argFoodType}`
    request.get(url, (error, response, body) => {
        const arg = JSON.parse(body)    
        this.arrOfFood = arg.results 

        // braking into arrays
        for ( let i = 0 ; i < this.arrOfFood.length ; i ++ ){
            const curFood = this.arrOfFood[i]
            const convertedArray = curFood.ingredients.split(',')
            const modifiedArrayOfIngredients = []

            // trimming each ingredient
            for ( let j = 0 ; j < convertedArray.length ; j ++ ) {
                let curIngredient = convertedArray[j]
                curIngredient = MyTrim(curIngredient)
                modifiedArrayOfIngredients.push({name : curIngredient})
            }
            curFood.ingredients = modifiedArrayOfIngredients
        }
        res.send(this.arrOfFood)
    });
})

// ----------------------------------
// Helping function
// ----------------------------------
function MyTrim(text) {
    //turn into a string in case it's other type:
    let result = text + "";

    //trim leading characters:
    while (result.length > 0 && IsWhiteSpace(result[0]))
        result = result.substr(1, result.length - 1);

    //trim trailing characters:
    while (result.length > 0 && IsWhiteSpace(result[result.length - 1]))
        result = result.substr(0, result.length - 1);

    return result;
}

// ----------------------------------
// Helping function
// ----------------------------------
function IsWhiteSpace(c) {
    return c == " " || c == "\r" || c == "\n" || c == "\t";
}

// ----------------------------------
// Helping function
// ----------------------------------
const isExist = function(argArray, argElement){
    for ( let i = 0 ; i < argArray.length ; i ++ )
        if (argElement == argArray[i].name)
            return true
    return false
}
module.exports = router