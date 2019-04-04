
const renderer = new Renderer()

const fetch = function () {
    $.get("/foods", function (response) {
        renderer.render(response)
    })
}

$("#search-food-byType-button").on("click", function (){ 
    let foodType = $("#search-food-byType-input").val()
    console.log(foodType)
    $.get(`/foodbytype/${foodType}`,function (response) {
        renderer.render(response)
    })
})

