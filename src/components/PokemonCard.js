import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { stylesContent } from '../Styles/global'
import { getColorsByPokemonType } from '../utils/getColorsType'
import { capitalize } from 'lodash'

export default function PokemonCard({ pokemon }) {
    const navigation = useNavigation()
    const gotToPokemon = () => {
        navigation.navigate("Pokemon", {id: pokemon.id})
    }
    const pokemonColor = getColorsByPokemonType(pokemon.type)
    const bgStyle = { backgroundColor: pokemonColor, ...stylesContent.bgStyle }

    return (
        <TouchableWithoutFeedback onPress={() => gotToPokemon()}>
            <View style={stylesContent.card}>
                <View style={stylesContent.spacing}>
                    <View style={bgStyle}>
                        <Text style={stylesContent.numberCard}>
                            #{`${pokemon.order}`.padStart(3, 0)}
                        </Text>
                        <Text style={stylesContent.titleCard}>
                            {capitalize(pokemon.name)}
                        </Text>
                        <Image source={{ uri: pokemon.image }} style={stylesContent.imageCard} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}