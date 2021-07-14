import { useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";
import { FavoritesState } from "./slices/favorites/favorites.slice";
import { ProductsState } from "./slices/products/products.slice";
import appReducer from "./rootReducer/root.reducer";

export const appStore = createStore(appReducer);

export type StoreState = {
  favorites: FavoritesState;
  products: ProductsState;
};

export default function useAppStore() {
  return {
    dispatch: useDispatch(),
    state: useSelector<StoreState, StoreState>((state) => state),
  };
}
