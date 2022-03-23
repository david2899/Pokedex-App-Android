import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { stylesContent } from "../Styles/global"
import PokemonsList from "../components/PokemonsList"
import { getPokemonsApi, getPokemonsDetaisApi } from "../api/pokemon"

export const Pokedex = () => {
    const [pokemons, setPokemons] = useState([])
    const [nextURL, setNexturl] = useState()

    const loadPokemons = async () => {
        try {
            const response = await getPokemonsApi(nextURL)
           setNexturl(response.next)
            let pokemonsArray = []
            for await (const pokemon of response.results) {
                const pokemonDetails = await getPokemonsDetaisApi(pokemon.url)
                pokemonsArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    type: pokemonDetails.types[0].type.name,
                    order: pokemonDetails.order,
                    image: pokemonDetails.sprites.other["official-artwork"].front_default
                })
            }

            setPokemons([...pokemons, ...pokemonsArray])
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        (async () => {
            await loadPokemons()
        })();
    }, [])

    return (
        <SafeAreaView style={stylesContent.container}>
            <PokemonsList pokemons={pokemons} loadPokemons={loadPokemons}  isNext={nextURL} />

        </SafeAreaView>
    )
}
