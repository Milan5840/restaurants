import React from 'react'
import { ActivityIndicator } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Overlay } from 'react-native-elements/dist/overlay/Overlay'

export default function loading({ isVisible, text }) {
    return (
        <Overlay>
          isVisible={isVisible}
          windowBackgroundColor="rgba(0,0,0,0.5)"
          overlayBackgroundColor="transparent"
          overlayStyle={styles.Overlay}
          <View  style={styles.View}>
              <ActivityIndicator
              size="largo"
              color="#442484"
              />
              {
                  text && <text>{text}</text>
              }
          </View>
        </Overlay>
        
    )
}
const styles = StyleSheet.create({
  Overlay : {
    height: 100,
    width: 200,
    backgroundColor: "#fff",
    borderColor: "#442484",
    borderWidth: 2,
    borderRadius: 10
  }

})

