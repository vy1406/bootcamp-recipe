const source = $("#players-template").html()
const template = Handlebars.compile(source)

const render = function (players) {
    $("#players").empty()
    let newHtml = template({ players })
    $("#players").append(newHtml)
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

