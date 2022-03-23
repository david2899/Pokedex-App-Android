import { View, Text } from 'react-native'
import React from 'react'
import { map, capitalize } from 'lodash';
import { typeStyle } from '../../Styles/pokemonsDetais';
import {getColorsByPokemonType} from "../../utils/getColorsType";


export default function Type({types}) {
    // console.log(types);
 

  return (
    <View style={typeStyle.content}>
      {
          map(types, (item ,index) => (
              <Text key={index} style={{...typeStyle.pill, backgroundColor:  getColorsByPokemonType(item.type.name)}}>
                  {
                      item.type.name
                  }
              </Text>
          ))
      }
    </View>
  )
}