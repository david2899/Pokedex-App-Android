import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
// import PropsTypes from 'prop-types'
import {
  addPokemonFavorite,
  isFavoritePokemon,
  removeFavorite,
} from "../../api/favorite";

export default function Favorite({ id }) {
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await isFavoritePokemon(id);
        setIsFavorite(res);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, reloadCheck]);

  const onReloadCheckFavorite = () => {
    setReloadCheck((prev) => !prev);
  };

  const addFavorite = async () => {
    try {
      await addPokemonFavorite(id);
      onReloadCheckFavorite();
    } catch (error) {
       console.log(error);
    }
  };

  const removeFavoritePokemon = async () => {
    try {
     await removeFavorite(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  // Favorite.propTypes = {
  //   id: PropsTypes.number.isRequired
  // }

  return (
    <Icon
      name="heart"
      color={isFavorite ? "red" : "#fff"}
      size={20}
      solid={isFavorite}
      onPress={isFavorite ? removeFavoritePokemon : addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
