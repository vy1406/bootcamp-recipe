
class Renderer {

    render = function (arrFoods) {
        const source = $("#food-template").html()
        const template = Handlebars.compile(source)

        $("#food").empty()
        let newHtml = template({ arrFoods })
        $("#food").append(newHtml)
    }
}