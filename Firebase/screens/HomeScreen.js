import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground, SafeAreaView } from "react-navigation";
import GloStyles from "../GloStyles";
import colors from "../assets/Colors";
import login from "./Login";

import CustomActionButton from "../components/CustomActionButton";
// const image = {
//   uri: "C:UsersDELLDesktopWebDevelopementProjectFirebaseWelcomeScreenBI.jpeg",
// };
export default class HomeScreen extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      // <ImageBackground source={require("../Images/image.jpeg")}>
      <SafeAreaView style={GloStyles.droidSafeArea}>
        <View style={{ flex: 1, backgroundColor: colors.bgMain }}>
          <View
            style={{
              flex: 1,
              borderColor: "black",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View>
              <Ionicons name="md-checkmark-circle" size={150} color="green" />
            </View>
            <Text st={{ fontWeight: 50 }}>Sai Pujitha Associates</Text>
          </View>
          <View
            style={{ flex: 1, borderColor: "orange", alignItems: "center" }}
          >
            <CustomActionButton
              style={{
                width: 200,
                backgroundColor: "transparent",
                borderWidth: 0.5,
                borderColor: colors.bgError,
                marginBottom: 10,
              }}
              title="setPassword"
              onPress={() => this.props.navigation.navigate("SetPassword")}
            >
              <Text style={{ fontWeight: "100" }}>setPassword</Text>
            </CustomActionButton>
            <CustomActionButton
              style={{
                width: 200,
                backgroundColor: "transparent",
                borderWidth: 0.5,
                borderColor: colors.bgError,
                marginBottom: 10,
              }}
              title="Login"
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={{ fontWeight: "100" }}>Login</Text>
            </CustomActionButton>
          </View>
        </View>
      </SafeAreaView>
      // </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    width: 50,
    backgroundColor: colors.bgError,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
