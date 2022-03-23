import { View, Text, Button } from "react-native";
import UseAuth from "../../Hooks/UseAuth";
import { getPokemonFavorite } from "../../api/favorite";
import { stylesUserD } from "../../Styles/userDstyles";
import {useFocusEffect} from "@react-navigation/native"
import React, { useCallback, useState } from "react";

export default function UserData() {
  const { auth, logOut } = UseAuth();
  const [totalFavorite, setTotalFavorite] = useState(0);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const favorites = await getPokemonFavorite();
          setTotalFavorite(favorites.length);
        } catch (error) {
          console.log(error);
        }
      })();
    }, [])
  )
 
  return (
    <View style={stylesUserD.content}>
      <View style={stylesUserD.titleBlock}>
        <Text style={stylesUserD.title}>
          Wellcome {`${auth.firtsName} ${auth.lastName}`}
        </Text>
      </View>
      <View style={stylesUserD.dataContent}>
        <ItemMenu title="Name" text={`${auth.firtsName} ${auth.lastName}`} />
        <ItemMenu title="user Name" text={`${auth.userName}`} />
        <ItemMenu title="Email" text={`${auth.email}`} />
        <ItemMenu title="total favorites" text={`${totalFavorite} Pokemons`} />
      </View>
      <Button title="Log Out" onPress={() => logOut()} />
    </View>
  );
}

function ItemMenu({ title, text }) {
  return (
    <View style={stylesUserD.itemMenu}>
      <Text style={stylesUserD.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
}
