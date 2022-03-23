import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Account } from '../screens/Account'
import { stylesContent } from '../Styles/global';

const Stack = createStackNavigator();

export default function AccountNav() {
  return (
    <Stack.Navigator >
            <Stack.Screen name="Account" 
            component={Account}
            options={{title: "Account"}}
            style={stylesContent.stack}
             />
        </Stack.Navigator>
  )
}