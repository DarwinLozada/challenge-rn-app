import { Product } from "../../../interfaces/products.interfaces";

export type Action = {
  type: ActionTypes;
  payload: any;
};

export enum ActionTypes {
  addProduct = "ADD_PRODUCT",
}

export const addProduct = (product: Product): Action => ({
  type: ActionTypes.addProduct,
  payload: product,
});
