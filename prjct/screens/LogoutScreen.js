import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GloStyles from "../GloStyles";
import colors from "../assets/Colors";
import CustomActionButton from "../components/CustomActionButton";
export default class LogoutScreen extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <SafeAreaView style={GloStyles.droidSafeArea}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <CustomActionButton
            style={{
              width: 200,
              backgroundColor: "transparent",
              borderWidth: 0.5,
              borderColor: colors.bgError,
              marginBottom: 10,
            }}
            title="Logout"
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text style={{ fontWeight: "100" }}>Logout</Text>
          </CustomActionButton>
        </View>
      </SafeAreaView>
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
