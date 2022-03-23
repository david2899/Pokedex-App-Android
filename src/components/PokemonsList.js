import React from 'react'
import { FlatList, ActivityIndicator} from 'react-native'
import { stylesContent } from '../Styles/global'
import PokemonCard from './PokemonCard'

export default function PokemonsList({ pokemons, loadPokemons, isNext }) {

    const loadMore = () => {
        loadPokemons()
    }
    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            contentContainerStyle={stylesContent.flatListContent}
            onEndReached={isNext && loadMore}
            onEndReachedThreshold={1}
            ListFooterComponent={
                isNext && (<ActivityIndicator
                    size="large"
                    color="#AEAEAE"
                    style={stylesContent.spinner} />)
            }
        />
    )
}