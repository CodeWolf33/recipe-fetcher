import { returnRecipe } from "./api";

let recipeObj = await returnRecipe();

console.log("Name ->", recipeObj.name);

console.log("Ingredients:")
for (let i = 0; i < recipeObj.ingredients.length; i++) {
    console.log("\t- " + recipeObj.ingredients[i] + " -> " + recipeObj.measures[i]);
}

console.log("\nInstructions: ", recipeObj.instructions)