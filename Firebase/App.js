import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import SetPassword from "./screens/SetPassword";
import { Ionicons } from "@expo/vector-icons";
import LogoutScreen from "./screens/LogoutScreen";
import CustomDrawerComponent from "./screens/DrawerNavigator/CustomDrawerComponent";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { createDrawerNavigator } from "react-navigation-drawer";

import { createStackNavigator } from "react-navigation-stack";

const App = () => <AppContainer />;

const LoginStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  SetPassword: {
    screen: SetPassword,
    navigationOptions: {},
  },
});

const AppDrawerNavigator = createDrawerNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        title: "Home",
        drawerIcon: () => <Ionicons name="ios-home" size={24} />,
      },
    },
    Logout: {
      screen: LogoutScreen,
      navigationOptions: {
        title: "logout",
        drawerIcon: () => <Ionicons name="ios-home" size={24} />,
      },
    },
  },
  { contentComponent: CustomDrawerComponent }
);
const AppSwitchNavigator = createSwitchNavigator({
  LoginStackNavigator,
  AppDrawerNavigator,
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;
