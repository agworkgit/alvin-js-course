// snippet 4
let recipe = {
    name: "Old Fashioned Pancakes",
    difficulty: "easy",
    tasty: true,
    ingredients: ["eggs", "milk", "butter", "flour", "sugar"],
  };
  
  console.log(recipe.name);
  console.log(recipe["name"]);
  console.log(recipe.ingredients.length);
  console.log(recipe.calories);
  
  let someVariable = "difficulty";
  console.log(recipe[someVariable]);
  console.log(recipe.someVariable);
  
  for (let i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
  }

// PREDICTION

// Old Fashioned Pancakes
// Old Fashioned Pancakes
// 5
// undefined
// easy
// easy -- wrong -- undefined

// eggs
// milk
// butter
// flour
// sugar

// GRADE - 90%