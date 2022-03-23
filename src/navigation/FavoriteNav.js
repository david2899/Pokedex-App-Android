import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Favorite } from '../screens/Favorite';
import Pokemon from "../screens/Pokemon"

const Stack = createStackNavigator();

export default function FavoriteNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Favorite" 
            component={Favorite}
            options={{title: "Favorites"}}
             />
              <Stack.Screen name="Pokemon" 
            component={Pokemon}
            options={{title: "", headerTransparent: true}}
             />
        </Stack.Navigator>
    )
}