import { Action } from "@interfaces/favoritesStore.interfaces";
import { Product } from "@interfaces/products.interfaces";

export enum ActionTypes {
  addProduct = "ADD_PRODUCT",
}

export const addProduct = (product: Product): Action => ({
  type: ActionTypes.addProduct,
  payload: product,
});
