import { async } from "regenerator-runtime";
import { API_URL } from "./config.js";
import { getJSON } from "./helper.js";

export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
    },
}

export const loadRecipe = async function (id) {
    try {
        const data = await getJSON(`${API_URL}${id}`);

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
        throw err;
    }
}

export const loadSearchResults = async function (query) {
    try {
        state.search.query = query;
        const data = await getJSON(`${API_URL}?search=${query}`)
        state.search.results = data.data.recipes.map(rec => {
            return {
                id: rec.id,
                title: rec.title,
                image: rec.image_url,
                publisher: rec.publisher,
            }
        })
    } catch (err) {
        console.error("FAlse Error");
        throw err;
    }
}
