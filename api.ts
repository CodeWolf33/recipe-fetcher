// Cooking api
const api = "https://www.themealdb.com/api/json/v1/1/random.php"

export async function returnRecipe(): Promise<
    {
        "name" : string, 
        "instructions": string,
        "ingredients" : Array<string>,
        "measures" : Array<string>
    }> {

    let res = await fetch(api);
    let json = await res.json() as any;

    let obj = {
        "name": "",
        "instructions": "",
        "ingredients": new Array<string>,
        "measures": new Array<string>
    };

    obj.name = json.meals[0].strMeal;
    obj.instructions = json.meals[0].strInstructions;

    for (let i = 1; i <= 20; i++) {
        if (json.meals[0]["strIngredient" + i] == "") break;

        obj.ingredients.push(json.meals[0]["strIngredient" + i]);
    }

    for (let i = 1; i <= 20; i++) {
        if (json.meals[0]["strMeasure" + i] == "") break;

        obj.measures.push(json.meals[0]["strMeasure" + i]);
    }

    return obj;
}
