// snippet 3
let dog = {
    name: "Manny",
    age: 5,
    breed: "pug",
    color: "fawn",
    favoriteFoods: ["bacon"],
  };
  
  console.log(dog.age);
  console.log(dog.breed);
  console.log(dog.favoriteFoods);
  
  dog.age++;
  dog.breed = dog.breed.toUpperCase();
  dog.favoriteFoods.push("sausage");
  
  console.log(dog.age);
  console.log(dog.breed);
  console.log(dog.favoriteFoods);
  
  for (let property in dog) {
    console.log(property + " is " + dog[property]);
  }

// PREDICTION
// 5 - correct
// pug - correct
// ['bacon'] - correct
// 6 - correct
// PUG - correct
// ['bacon','sausage'] - correct

// name is Manny - correct
// age is 6 - correct
// breed is PUG - correct
// color is fawn - correct
// favouriteFoods is ['bacon','sausage'] - wrong - favouriteFoods is bacon, sausage

// CORRECT - 90%