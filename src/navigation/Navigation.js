import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from"react-native-vector-icons/FontAwesome5"
// import {Account} from "../screens/Account";
import { renderPokebal } from '../Assets/Images';
import  FavoriteNav from "./FavoriteNav"
import PokedNav from './PokedNav';
import AccountNav from './AccountNav';


const Tab = createBottomTabNavigator();

export const  Navigation = () => {
    return (
        <Tab.Navigator initialRouteName="Pokedex" >
            
            {/*Item Favoritos*/}
            <Tab.Screen  name="Favorite" 
            component={FavoriteNav} 
            options={{
                tabBarLabel: "Favoritos",
                tabBarIcon: ({color, size}) => (
                   <Icon name="heart" color={color} size={size}/>
                )}} />

            {/*Item Pokedek Image*/}
            <Tab.Screen name="Pokedex" 
            component={PokedNav}
            options={{
                tabBarLabel:"",
                tabBarIcon: () => renderPokebal()
            }}
             />

            {/*Item Cuenta*/}
            <Tab.Screen name="Account"
             component={AccountNav}
             options={{
                tabBarLabel: "Cuenta",
                tabBarIcon: ({color, size}) => (
                   <Icon name="user" color={color} size={size}/>
                )}}
             />
            
        </Tab.Navigator>
    )
}

