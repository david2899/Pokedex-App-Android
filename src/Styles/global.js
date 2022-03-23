import { StyleSheet } from 'react-native'
import { Platform } from 'react-native';

export const stylesContent = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  stack: {
    textAlign: "center"
  },
  flatListContent: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 30 : 0
  },
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5
  },
  bgStyle: {
   flex: 1,
   borderRadius: 15,
   padding: 10
  },
  imageCard: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  titleCard: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  }, numberCard: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60
  }
});

export const POKEMON_TYPE_COLORS = {
  normal: "#A8A878",
  fighting: "#C03028",
  flying: "#A890F0",
  poison: "#A040A0",
  ground: "#E0C068",
  rock: "#B8A038",
  bug: "#A8B820",
  ghost: "#705898",
  steel: "#B8B8D0",
  fire: "#FA6C6C",
  water: "#6890F0",
  grass: "#48CFB2",
  electric: "#FFCE4B",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  fairy: "#EE99AC",
};