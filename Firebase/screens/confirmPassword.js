import React from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import firebase from "firebase";
import PasswordInputText from "react-native-hide-show-password-input";
import md5 from "md5";

export function confirmPassword() {
  navigationOptions = {
    title: "confirmPassword",
    headerStyle: {
      backgroundColor: "#73C6B6",
    },
  };
  state = {
    password: "",
  };

  const [password, setPassword] = React.useState();
  const [confirmPassword, setConfirmPassword] = React.useState();
  const [message, showMessage] = React.useState();
  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <Text style={{ marginTop: 30 }}>Password</Text>
      <PasswordInputText
        style={{ marginVertical: 10, fontSize: 17 }}
        placeholder="set your password"
        secureTextEntry={true}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(password) => setPassword(password)}
      />
      <Text style={{ marginTop: 40 }}>Confirm Password</Text>
      <PasswordInputText
        style={{ marginVertical: 10, fontSize: 17 }}
        placeholder="confirm your password"
        secureTextEntry={true}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
      />

      <Button
        style={{ marginTop: 60 }}
        title="click to Login"
        onPress={async () => {
          try {
            if (password != confirmPassword) {
              alert("Passwords doesn't match");
              return;
            }
            console.log("reached here");
            console.log(md5(password));
            const ref = firebase.database().ref("users/1234");
            ref.update({
              password: md5(password),
            });
          } catch (err) {
            showMessage({ text: `Error: ${err.message}`, color: "red" });
          }
        }}
      />

      {message ? (
        <TouchableOpacity
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 0xffffffee, justifyContent: "center" },
          ]}
          onPress={() => showMessage(undefined)}
        >
          <Text
            style={{
              color: message.color || "blue",
              fontSize: 17,
              textAlign: "center",
              margin: 20,
            }}
          >
            {message.text}
          </Text>
        </TouchableOpacity>
      ) : undefined}
    </View>
  );
}

export default confirmPassword;
