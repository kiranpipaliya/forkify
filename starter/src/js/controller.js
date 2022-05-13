
import * as modal from "./modal.js"
import recipeView from "./view/recipeView.js"
import searchView from "./view/searcView.js"
import "core-js/stable"; // poliffing all code 
import "regenerator-runtime/runtime"; /// poliffing async and await 





// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return

    // Spiner 
    recipeView.renderSpiner();

    await modal.loadRecipe(id);
    const { recipe } = modal.state;

    // Recipe
    recipeView.render(modal.state.recipe);

    console.log(recipe);
  } catch (err) {
    recipeView.randerError();
  }
}

const controlSearchResults = async function () {
  try {


    const query = searchView.getQuery();
    console.log(query);

    searchView.clearInput();

    if (!query) return
    await modal.loadSearchResults(query);
    console.log(modal.state.search.results);

  } catch (err) {
    console.log("Controller", err);
  }
}

const init = function () {
  recipeView.addHandlerRender(controlRecipe)
  searchView.addHandlerSearch(controlSearchResults);
}
init();
