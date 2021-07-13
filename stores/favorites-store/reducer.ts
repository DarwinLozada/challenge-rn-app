import {
  Action,
  FavoritesState,
} from "../../interfaces/favoritesStore.interfaces";
import { Reducer } from "redux";
import { ActionTypes } from "./actions";

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
        ...action.payload,
      };
    default:
      return state;
  }
};

export default favoritesReducer;
