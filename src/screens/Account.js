import React from 'react'
import { View  } from 'react-native'
import LoginForm from '../components/Auth/LoginForm';
import UserData from '../components/Auth/UserData';
import useAuth from '../Hooks/UseAuth'

export const Account = () => {

    const {auth} = useAuth();

    return (
        <View>
            {
                auth ? <UserData/>: <LoginForm />
            }
        </View>
    )
}