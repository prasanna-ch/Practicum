import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-navigation";
import GloStyles from "../GloStyles";
import colors from "../assets/Colors";
import CustomActionButton from "../components/CustomActionButton";

export default class HomeScreen extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <SafeAreaView style={GloStyles.droidSafeArea}>
        <View style={{ flex: 1, backgroundColor: colors.bgHome }}>
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
            <Text st={{ fontWeight: 50 }}>Sai Poojitha Associates</Text>
          </View>
          <View
            style={{ flex: 1, borderColor: "orange", alignItems: "center" }}
          >
            <CustomActionButton
              style={{
                width: 200,
                backgroundColor: "#FFC0CB",
                borderWidth: 1,
                borderColor: colors.bgError,
                marginBottom: 10,
              }}
              title="setPassword"
              onPress={() => this.props.navigation.navigate("SetPassword")}
            >
              <Text style={{ fontWeight: "100" }}>Click to Set Password</Text>
            </CustomActionButton>
            <CustomActionButton
              style={{
                width: 200,
                backgroundColor: "#FFC0CB",
                borderWidth: 1,
                borderColor: colors.bgError,
                marginBottom: 10,
              }}
              title="Login"
              onPress={() =>
                this.props.navigation.navigate("LoginAuthentication")
              }
            >
              <Text style={{ fontWeight: "100" }}>Login</Text>
            </CustomActionButton>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
