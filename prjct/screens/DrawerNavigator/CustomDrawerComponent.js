import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GloStyles from "../../GloStyles";
import colors from "../../assets/Colors";
import CustomActionButton from "../../components/CustomActionButton";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { DrawerItems } from "react-navigation-drawer";
export default class CustomDrawerComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ScrollView>
        <SafeAreaView style={GloStyles.droidSafeArea}>
          <View
            style={{
              height: 150,
              backgroundColor: colors.bgMain,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons
              name="md-checkmark-circle"
              size={100}
              color={colors.logoColor}
            />
          </View>
          <DrawerItems {...this.props} />
        </SafeAreaView>
      </ScrollView>
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
