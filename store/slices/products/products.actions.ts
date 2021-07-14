import { Product } from "../../../interfaces/products.interfaces";

export enum ActionTypes {
  setProducts = "SET_PRODUCTS",
}

export type Action = {
  type: ActionTypes;
  payload: any;
};

export const setProducts = (product: Product): Action => ({
  type: ActionTypes.setProducts,
  payload: product,
});
