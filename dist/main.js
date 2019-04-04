const source = $("#food-template").html()
const template = Handlebars.compile(source)

const render = function (arrFoods) {
    $("#food").empty()
    let newHtml = template({ arrFoods })
    $("#food").append(newHtml)
}

const fetch = function () {
    $.get("/foods", function (response) {
        render(response)
    })
}

$("#search-food-byType-button").on("click", function (){ 
    let foodType = $("#search-food-byType-input").val()
    console.log(foodType)
    $.get(`/foodbytype/${foodType}`,function (response) {
        render(response)
    })
})

