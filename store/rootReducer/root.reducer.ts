import { combineReducers } from "redux";
import favoritesReducer from "../slices/favorites/favorites.slice";
import productsReducer from "../slices/products/products.slice";

const appReducer = combineReducers({
  favorites: favoritesReducer,
  products: productsReducer,
});

export default appReducer;
