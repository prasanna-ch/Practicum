import React from "react";
import { View, StyleSheet, Button } from "react-native";
import call from "react-native-phone-call";
export default class PhoneCall extends React.Component {
  call = () => {
    const args = {
      number: "9491391997",
      prompt: false,
    };
    call(args).catch(console.error);
  };
  render() {
    return (
      <View style={styles.container}>
        <Button title="Make a Call" onPress={this.call} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
});
