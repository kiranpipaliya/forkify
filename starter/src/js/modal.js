import { async } from "regenerator-runtime";
import { API_URL } from "./config.js";
import { getJSON } from "./helper.js";

export const state = {
    recipe: {},
}

export const loadRecipe = async function (id) {

    try {
        const data = await getJSON(`${API_URL}/${id}`);

        const { recipe } = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            image: recipe.image_url,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients,
            publisher: recipe.publisher,
            servings: recipe.servings,
            sourceUrl: recipe.source_url
        }
        console.log(state.recipe);
    } catch (err) {
        console.error(`This Is error ${err}`);
    }
}