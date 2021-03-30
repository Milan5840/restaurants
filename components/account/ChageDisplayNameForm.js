import React, { useState } from 'react'
import { Button } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements'
import { isEmpty } from 'lodash'

import { updateProfile } from '../../utils/actions'

export default function ChageDisplayNameForm({ displayName, setshowModal, toastRef, setreloadUser }) {
    const [newDisplayName, setnewDisplayName] = useState(null)
    const [error, seterror] = useState(null)
    const [Loading, setLoading] = useState(false)

    const onSubmit = async() => {
        if(!validateForm()) {
            return
        }
        
        setLoading(true)
        const result = await updateProfile({ displayName: newDisplayName })
        setLoading(false)

        if(!result.statusResponse) {
            setError("Error al actualizar nombres y apellidos, intenta mas tarde")
            return 
        }

        setreloadUser(true)
        toastRef.current.show("Se han actualizado nombres y apellidos", 3000)
        setshowModal(false)
    }

    const validateForm = () => {
        seterror(null)

        if(isEmpty(newDisplayName)) {
            setError("Debes ingresar nombres y apellidos")
            return false
        }

        if(newDisplayName === displayName) {
            setError("Debes ingresar nombres y apellidos diferentes a los actuales")
            return false
        }

        return true
    }

    return (
        <View style={styles.view}>
          <Input
            placeholder="Ingresa Nombres y Apellidos"
            containerStyle={styles.input}
            defaultValue={displayName}
            onChange={(e) => setnewDisplayName(e.nativeEvent.text)}
            errorMessage={error}
            rightIcon={{
                type: "material-community",
                name: "account-circle-outline",
                color: "#c2c2c2"
            }}
          />
          <Button
             title= "Cambiar Nombres y Apellidos"
             containerStyle={styles.btnContainer}
             buttonStyle={styles.btn}
             onPress={onSubmit}
             Loading={Loading}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        alignItems: "center",
        paddingVertical: 10
    }, 
    input: {
        marginBottom: 10
    },
    btnContainer: {
        width: "95%"
    },
    btn: {
        backgroundColor: "#442484"
    }
})
