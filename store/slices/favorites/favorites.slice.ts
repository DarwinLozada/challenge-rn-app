import { Reducer } from "redux";
import { Product } from "../../../interfaces/products.interfaces";
import { Action, ActionTypes } from "./favorites.actions";

export interface FavoritesState {
  products: Product[];
}

const initialState: FavoritesState = {
  products: [],
};

const favoritesReducer: Reducer<FavoritesState, Action> = (
  state: FavoritesState = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.addProduct:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export default favoritesReducer;
