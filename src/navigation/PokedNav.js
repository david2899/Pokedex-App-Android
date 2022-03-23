import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Pokedex } from '../screens/Pokedex';

const Stack = createStackNavigator();

export default function PokedNav() {
  
    return (
        <Stack.Navigator>

            <Stack.Screen name="Pokedex"
                component={Pokedex}
                options={{title: "", headerTransparent: true}}
            />

          
        </Stack.Navigator>
    )
}