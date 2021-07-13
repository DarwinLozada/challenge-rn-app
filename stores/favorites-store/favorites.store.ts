import favoritesReducer from "./reducer";
import { createStore } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { FavoritesState } from "../../interfaces/favoritesStore.interfaces";

export const favoritesStore = createStore(favoritesReducer);

export default function useFavoritesStore() {

  return {
    dispath: useDispatch(),
    state: useSelector<FavoritesState>((state) => state)}
}
