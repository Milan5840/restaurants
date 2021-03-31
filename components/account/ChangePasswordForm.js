import React, { useState } from 'react'
import { Button } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements'
import { isEmpty } from 'lodash'

import { reauthenticate, updatePassword, updateProfile } from '../../utils/actions'


export default function ChangePasswordForm( setshowModal, toastRef ) {
    const [newpassword, setnewpassword] = useState()
    const [currentPassword, setpassword] = useState(null)
    const [errorNewPassword, seterrorNewPassword] = useState(null)
    const [confirmPassword, setconfirmPassword] = useState(initialState)
    const [errorCurrentPassword, setErrorPassword] = useState(null)
    const [confirmPassword, setconfirmPassword] = useState(initialState)
    const [errorConfirmPassword, seterrorConfirmPassword] = useState(null)
    const [showPassword, setshowPassword] = useState(false)
    const [Loading, setLoading] = useState(false)
    
    const onSubmit = async() => {
        if(!validateForm()) {
            return
        }
        
        setLoading(true)
        const resultReauthenticate = await reauthenticate(currentPassword)
        
        if(!resultReauthenticate.statusResponse) {
            setLoading(false)
            setErrorPassword("Contraseña Incorrecta")
             return 
        }

        const resultUpdatePassword = await updatePassword(newpassword)
        setLoading(false)

        if(!resultUpdatePassword.statusResponse) {
           setErrorNewPassword("Hubo un problema cambiando la contraseña")
            return 
        }

        toastRef.current.show("Se ha actualizado la contraseña", 3000)
        setshowModal(false)
    
    }
    const validateForm = () => {
        setErrorNewPassword(null)
        setErrorCurrentPassword
        setErrorPassword(null)
        let isValid='true'
    

        if(isEmpty(currentPassword)) {
            setErrorCurrentPassword("Debes tu contraseña actual")
            isValid = false
        }

        return isValid
    }

    return (
        <View style={styles.view}>
          <Input
            placeholder="Ingresa tu nueva contraseña"
            containerStyle={styles.input}
            defaultValue={password}
            keyboardType="email-address"
            onChange={(e) => setnewpassword(e.nativeEvent.text)}
            errorMessage={errorEmail}
            rightIcon={{
                type: "material-community",
                name: "at",
                color: "#c2c2c2",
                onPress=(() => setshowPassword)
            }}
/>
            <Input
            placeholder="Ingresa tu contraseña"
            containerStyle={styles.input}
            defaultValue={password}
            onChange={(e) => setpassword(e.nativeEvent.text)}
            errorMessage={errorPassword}
            password={true}
            secureTextEntry={!showPassword}
            rightIcon={
                <Icon
                  type="material-community"
                  name={ showPassword ? "eye-off-outline" : "eye-outline"}
                  iconStyle = {{ color: "#c2c2c2"}}
                  onPress={() => setshowPassword( !showPassword)}
                />
            }
          />
          <Button
             title= "Cambiar Contraseña"
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
