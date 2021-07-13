import { ActionTypes } from "@stores/favorites-store/actions";
import { Product } from "./products.interfaces";

export interface FavoritesState {
  products: Product[];
}

export type Action = {
  type: ActionTypes;
  payload: any;
};
