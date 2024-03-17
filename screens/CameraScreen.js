// SettingsScreen.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CameraScreen = () => {
  return (
    <View>
      <Text style={styles.cameraTitle}>Écran des caméras</Text>
    </View>
  );
};

export default CameraScreen;

const styles  = StyleSheet.create({
    cameraTitle : {
        fontSize : 50,
        color : "blue"
      },
})