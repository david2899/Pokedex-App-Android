import { View, Text, StyleSheet, Button} from 'react-native';
import { useNavigation } from "@react-navigation/native"
import React from 'react'

export default function NoLogged() {
    const {navigate} = useNavigation()

  return (
    <View style={styles.content}>
      <Text style={styles.title}>To see your favorite Pokemon Log in</Text>
      <Button title="Log In" onPress={() => navigate("Account")} />
    </View>
  )
}

const styles = StyleSheet.create({
    content: {
        marginVertical: 50,
        paddingHorizontal: 50,
    },
    title: {
        textAlign: "center",
        marginBottom: 10,
    }
})