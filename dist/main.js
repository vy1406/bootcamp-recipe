
const renderer = new Renderer()

const fetch = function () {
    $.get("/foods", function (response) {
        renderer.render(response)
    })
}

$("#search-food-byType-button").on("click", function (){ 
    let foodType = $("#search-food-byType-input").val()
    $.get(`/foodbytype/${foodType}`,function (response) {
        renderer.render(response)
    })
})


$("#filter-food-byIngredients-button").on("click", function (){ 
    let argIngredients = $("#filter-by-ingredients").val()
    $.get(`/filterByIngredients/${argIngredients}`,function (response) {
        renderer.render(response)
    })
})
