
import * as modal from "./modal.js"
import recipeView from "./view/recipeView.js"


import "core-js/stable"; // poliffing all code 
import "regenerator-runtime/runtime"; /// poliffing async and await 





// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipe = async function () {
  try {

    const id = window.location.hash.slice(1);
    console.log(id);
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

const controlLoadResult = async function () {
  try {
    await modal.loadSearchResults("pizza");
    console.log(modal.state.search.results);
  } catch (err) {
    console.log("Controller", err);
  }
}
controlLoadResult();

const init = function () {
  recipeView.addHandlerRender(controlRecipe)
}
init();
