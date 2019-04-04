
class Renderer {

    render = function (arrFoods) {
        const source = $("#food-template").html()
        const template = Handlebars.compile(source)

        $("#food").empty()
        let newHtml = template({ arrFoods })
        $("#food").append(newHtml)

        $("img").on("click", function(){
            const inputValue = $(this).closest(".singleFood").find(".ingredients")[0].children[0].innerText
            console.log(inputValue)
        })
    }
}