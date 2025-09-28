const result = document.querySelector('#result');
const searchBtn = document.querySelector('.searchBtn');
const searchInput = document.querySelector('#searchInput');

searchBtn.addEventListener('click', async () => {
  const searchItem = searchInput.value.trim();
  let output = "";

  console.log(searchItem);
  if (searchItem === "") {
    result.innerHTML = `<p>Please enter a recipe name.</p>`;
    return;
  }

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`;
  const res = await fetch(url);
  const data = await res.json();

  if (!data.meals) {
    result.innerHTML = `<p>No recipe found for "${searchItem}". Try something else.</p>`;
    return;
  }


  const meal = data.meals[0];


  let ingredientsList = "";
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredientsList += `<li>${ingredient} - ${measure}</li>`;
    }
  }

  output = `
                    <div class="section">
                      <h2 id="recipeName">${meal.strMeal}</h2>
                    </div>
                    <img id="recipeImage" src="${meal.strMealThumb}" alt="Recipe Image">
    
                    <div class="section">
                      <h4>Category: ${meal.strCategory} | Area: ${meal.strArea}</h4>
                    </div>
    
                    <div class="section">
                      <h3>Ingredients:</h3>
                      <ul>${ingredientsList}</ul>
                    </div>
    
                    <div class="section">
                      <h3>Instructions:</h3>
                      <p>${meal.strInstructions || 'No instructions available.'}</p>
                    </div>
                    <div class="section">
                      <h3>Watch Video:</h3>
                       <a href="${meal.strYoutube}" target="_blank">YouTube Link</a>
                     </div>`

  result.innerHTML = output;
});
