import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { map } from 'lodash';
import { ListItem } from 'react-native-elements';
import Modal from '../Modal';
import ChageDisplayNameForm from './ChageDisplayNameForm';

export default function AccountOptions({user, toastRef}) {
    
    const [showModal, setshowModal] = useState(false)
    const [renderComponent, setrenderComponent] = useState(null)

    const generateOptions = () => {
        return [
            {
                title: "Cambiar Nombres y Apellidos",
                iconNameLeft: "account-circle",
                iconColorLeft: "#a7bfd3",
                iconNameRight: "chevron-right",
                iconColorRight: "#a7bfd3",
                onPress: () => selectedComponent("displayName")
            },
            {
                title: "Cambiar Email",
                iconNameLeft: "at",
                iconColorLeft: "#a7bfd3",
                iconNameRight: "chevron-right",
                iconColorRight: "#a7bfd3",
                onPress: () => selectedComponent("email")
            },
            {
                title: "Cambiar Contraseña",
                iconNameLeft: "lock-reset",
                iconColorLeft: "#a7bfd3",
                iconNameRight: "chevron-right",
                iconColorRight: "#a7bfd3",
                onPress: () => selectedComponent("password")
            },
        ]
    }

    const selectedComponent = (key) => {
        switch (key) {
            case "displayName":
                setrenderComponent(
                    <ChageDisplayNameForm
                      displayName={user.displayName}
                      setshowModal={setshowModal}
                      toastRef={toastRef}
                      setreloadUser={setreloadUser}
                    />
                )
                break;
                case "email":
                    setrenderComponent(
                        <Text>email</Text>
                    )
                    break;
                    case "password":
                        setrenderComponent(
                            <Text>password</Text>
                        )
                        break;
        }
        setshowModal(true)
    }

    const menuOptions = generateOptions();

    return (
        <View>
            {
                map(menuOptions, (menu, index) => {
                    <ListItem
                       key={index}
                       style={styles.menuItem}
                       onPress={menu.onPress}
                    >
                        <Icon
                          type="material-community"
                          name={menu.iconNameLeft}
                          color={menu.iconNameLeft}
                        />
                        <ListItem.Content>
                            <ListItem.Title>{menu.title}</ListItem.Title>
                        </ListItem.Content>
                        <Icon
                          type="material-community"
                          name={menu.iconNameRight}
                          color={menu.iconNameRight}
                        />
                    </ListItem>
                })
            }
            <Modal isVisible={showModal} setVisible={setshowModal}>
                {
                    renderComponent
                }
            </Modal>
        </View>
    )
}

 const generateOptions = () => {
    return [
        {
            title: "Cambiar Nombres y Apellidos",
            iconNameLeft: "account-circle",
            iconColorLeft: "#a7bfd3",
            iconNameRight: "chevron-right",
            iconColorRight: "#a7bfd3",
            onPress: () => selectedComponent("displayName")
        },
        {
            title: "Cambiar Email",
            iconNameLeft: "at",
            iconColorLeft: "#a7bfd3",
            iconNameRight: "chevron-right",
            iconColorRight: "#a7bfd3",
            onPress: () => selectedComponent("email")
        },
        {
            title: "Cambiar Contraseña",
            iconNameLeft: "lock-reset",
            iconColorLeft: "#a7bfd3",
            iconNameRight: "chevron-right",
            iconColorRight: "#a7bfd3",
            onPress: () => selectedComponent("password")
        },
    ]
}



const styles = StyleSheet.create({
    menuItem: {
        borderBottomWidth: 1,
        borderBottomColor: "a7bfd3"
    }
})
