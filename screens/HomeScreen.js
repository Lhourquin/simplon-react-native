// HomeScreen.js
import React, { useState, useEffect } from "react";
import { Platform, Button, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { renderFeature } from "ol/renderer/vector";
// import {LogBox} from 'react-native';

const HomeScreen = () => {
  const [count, setCount] = useState(0);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  let latitudeData;
  let longitudeData;
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    latitudeData = String(location.coords.latitude);
    longitudeData = String(location.coords.longitude);
    // if (location.coords) {
    //   setLatitude(String(location.coords.latitude));
    //   setLongitude(String(location.coords.longitude));
    // }
  }

  useEffect(() => {
    if (location && location.coords) {
      setLatitude(latitudeData);
      setLongitude(longitudeData);
    }
  }, [location]);

  // console.log(location.coords)

  return (
    <View>
      <Text style={styles.homeHeight}>{text}</Text>
      <Button onPress={() => setCount(count + 1)} title={count.toString()} />

      {latitude && (<MapView
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0,
          longitudeDelta: 0,
        }}
        style={styles.map}
      />)
      }
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeHeight: {
    fontSize: 50,
    color: "red",
  },
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
