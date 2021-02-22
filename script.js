const clickHere = () => {
    const search = document.getElementById("search").value
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then((response) => response.json())
        .then((data) => showMeals(data.meals))

}

const showMeals = foods => {

    const mealsId = document.getElementById("result")
    foods.forEach(food => {
        // console.log(food)
        const mealsDiv = document.createElement("div")
        mealsDiv.innerHTML = `
        <div onclick="moreDetails('${food.strMeal}')"  id="maelsDivision">
        <img src="${food.strMealThumb}"></img>
        <h2>${food.strMeal}</h2>
        </div>
        `
        mealsId.appendChild(mealsDiv)
    });
}



const moreDetails = details => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${details}`
    fetch(url)
        .then((response) => response.json())
        .then((data) => mealsInformation(data.meals))

}

const mealsInformation = (info) => {
    const foodInfo = document.getElementById("mealsInfo")
    //foodInfo.style.display="block";
    info.forEach(information => {
        console.log(information)
        const divDetails = document.createElement("div")
        divDetails.innerHTML = `
        <div class="detailsArea">
                    <img src="${information.strMealThumb}"></img>
                    <h2>${information.strMeal}</h2>
                    <h3>Ingredient</h3>
                        <ul>
                            <li>${information.strIngredient1}</li>
                            <li>${information.strIngredient2}</li>
                            <li>${information.strIngredient3}</li>
                            <li>${information.strIngredient4}</li>
                            <li>${information.strIngredient5}</li>
                            <li>${information.strIngredient6}</li>
                            <li>${information.strIngredient7}</li>
                            <li>${information.strIngredient8}</li>
                            <li>${information.strIngredient9}</li>
                        </ul>
                    <p>${information.strInstructions}{</p>
        </div>
    `

        foodInfo.appendChild(divDetails)


    });
}