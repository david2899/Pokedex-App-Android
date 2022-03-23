import React, { useState, useCallback } from "react";
import { SafeAreaView } from "react-native";
import {useFocusEffect} from "@react-navigation/native"
import { stylesContent } from "../Styles/global";
import { getPokemonFavorite } from "../api/favorite";
import { getPokemonsDetais } from "../api/pokemon";
import UseAuth from "../Hooks/UseAuth";
import PokemonsList from "../components/PokemonsList"
import NoLogged from "../components/NoLogged";

export const Favorite = () => {
  const [pokemonsFavorite, setPokemonsFavorite] = useState([]);
  const { auth } = UseAuth();

  useFocusEffect(
    useCallback(() => {
        if (auth) {
          (async () => {
            const response = await getPokemonFavorite();
            let pokemonsArray = [];
            for await (const pokemonID of response) {
              const pokemonDetails = await getPokemonsDetais(pokemonID);
              pokemonsArray.push({
                id: pokemonDetails.id,
                name: pokemonDetails.name,
                type: pokemonDetails.types[0].type.name,
                order: pokemonDetails.order,
                image:
                  pokemonDetails.sprites.other["official-artwork"].front_default,
              });
            }
            setPokemonsFavorite(pokemonsArray);
          })();
        }
      }, [auth])
  )

  return (
    <SafeAreaView style={stylesContent.container}>
      {auth ? <PokemonsList pokemons={pokemonsFavorite} /> : <NoLogged />}
    </SafeAreaView>
  );
};
