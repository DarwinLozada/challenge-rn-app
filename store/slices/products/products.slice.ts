import { Reducer } from "redux";
import { Product } from "../../../interfaces/products.interfaces";
import { Action, ActionTypes } from "./products.actions";

export interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [],
};

const productsReducer: Reducer<ProductsState, Action> = (
  state: ProductsState = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.setProducts:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export default productsReducer;
