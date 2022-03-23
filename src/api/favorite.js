import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORTE_STORAGE } from "../utils/constans";

export async function addPokemonFavorite(id) {
  try {
    const favorites = await getPokemonFavorite();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORTE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}

export async function getPokemonFavorite() {
  try {
    const response = await AsyncStorage.getItem(FAVORTE_STORAGE);
    return JSON.parse(response || "[]");
  } catch (error) {
    throw error;
  }
}

export async function isFavoritePokemon(id) {
  try {
    const favorites = await getPokemonFavorite();
    return includes(favorites, id);
  } catch (error) {
    throw error;
  }
}

export async function removeFavorite(id) {
  try {
    const favorites = await getPokemonFavorite();
    const newFavorite = pull(favorites, id);
    await AsyncStorage.setItem(FAVORTE_STORAGE, JSON.stringify(newFavorite));
  } catch (error) {
    throw error;
  }
}
