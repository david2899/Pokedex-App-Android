import { View, Image, SafeAreaView, Text } from 'react-native'
import {getColorsByPokemonType} from "../../utils/getColorsType"
import { StyleSheet } from 'react-native'

import React from 'react'
import { capitalize } from 'lodash'

export default function Header({name, order, image, type}) {

    const color = getColorsByPokemonType(type);
    const bgstyle = [{backgroundColor: color, ...styles.bg}]
    
  return (
    <>
      <View style={bgstyle} />

      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
          <View style={styles.contentImg}>
              <Image source={{ uri: image}} style={styles.image} />
          </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
   transform: [{ scaleX: 2}]
  },
  content: {
      marginHorizontal: 20,
      marginTop: 30
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
  },
  contentImg:  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain"
  },
})