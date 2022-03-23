import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react'
import {getPokemonsDetais} from "../api/pokemon"
import Header  from "../components/PokemonsDetails/Header";
import Type from '../components/PokemonsDetails/Type';
import Stats from '../components/PokemonsDetails/Stats';
import Icon from"react-native-vector-icons/FontAwesome5"
import Favorite from "../components/PokemonsDetails/Favorite";
import useAuth from "../Hooks/UseAuth"

export default function Pokemon({route}) {
  const navigation = useNavigation()
  const {params} = route
  const [pokemon, setPokemon] = useState()
  const {auth} = useAuth()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <Favorite id={pokemon ? pokemon.id : null} />,
      headerLeft: () => <Icon name="arrow-left" color="#fff" size={20} style={{marginLeft: 20}}
      onPress={() => navigation.goBack()} />,
    })
  }, [navigation, params, pokemon, auth])


  useEffect(() => {
    (async () => {
      try {
        const details = await getPokemonsDetais(params.id)
        setPokemon(details)
      } catch (error) {
        navigation.goBack()
      }
    })()
  }, [params])

  if (!pokemon)  return null

    return (
      <ScrollView>
        <Header name={pokemon.name} order={pokemon.order} 
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
         />
         <Type types={pokemon.types} />
         <Stats stats={pokemon.stats} />
      </ScrollView>
    )
 
}