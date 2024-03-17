import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from "./../screens/HomeScreen";
import SettingsScreen from "./../screens/SettingsScreen";
import CameraScreen from "../screens/CameraScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'blue',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Aceuil",
          tabBarIcon: ({ color, size }) => {
            <Icon.Button
              name="home"
              size={size}
              color={color}
            ></Icon.Button>;
          },
        }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Camera" component={CameraScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
