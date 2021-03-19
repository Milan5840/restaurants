import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase/app'

import UserGuest from './UserGuest'
import userLogged from './UserLogged'

export default function Account() {
    const [login, setLogin] = useState(null)

        firebase.auth().onAuthStateChanged((user) => {
            user !== null ? (setLogin(true)) : setLogin(false)
})

    if(login == null){
        return <Text>Cargando...</Text>
    }

   return login ? <userLogged/> : <UserGuest/>
}

const styles = StyleSheet.create({})