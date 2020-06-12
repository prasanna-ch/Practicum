import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import firebase from "firebase";
import { firebaseConfig } from "../config/config";
import GloStyles from "../GloStyles";
import PasswordInputText from "react-native-hide-show-password-input";
import md5 from "md5";
import colors from "../assets/Colors";
import SetPassword from "./SetPassword";

function Confirm({ Id }) {
  alert({ Id });
  console.log("hi");
  const [password, setPassword] = React.useState();
  const [confirmPassword, setConfirmPassword] = React.useState();
  const [message, showMessage] = React.useState();
}

export default class confirmPassword extends React.Component {
  constructor() {
    super();
    this.initialiszeFirebase();
    this.state = {
      set: "",
      confirm: "",
    };
    window.confirm = this;
  }
  initialiszeFirebase() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }
  returnToHome() {
    this.props.navigation.navigate("Home");
  }
  handleSetPassword(password) {
    this.setState({ set: password });
  }
  handleSetConfirmPassword(password) {
    this.setState({ confirm: password });
  }

  render() {
    return (
      <SafeAreaView style={GloStyles.droidSafeArea}>
        <View style={{ padding: 20, marginTop: 50 }}>
          <Text style={{ marginTop: 30 }}>Password</Text>
          <PasswordInputText
            style={{ marginVertical: 10, fontSize: 17 }}
            placeholder="set your password"
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(password) => this.handleSetPassword(password)}
          />
          <Text style={{ marginTop: 40 }}>Confirm Password</Text>
          <PasswordInputText
            style={{ marginVertical: 10, fontSize: 17 }}
            placeholder="confirm your password"
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(confirmPassword) =>
              this.handleSetConfirmPassword(confirmPassword)
            }
          />

          <Button
            style={{ marginTop: 60 }}
            title="submit password"
            onPress={async () => {
              try {
                if (this.state.set != this.state.confirm) {
                  alert("Passwords doesn't match");
                  return;
                }
                if (this.state.set === "") {
                  alert("Password field could not be empty");
                  return;
                }
                // console.log("reached here");
                // console.log(md5(password));
                const ref = firebase
                  .database()
                  .ref(
                    "Users/" + this.props.navigation.state.params.currentUserId
                  );
                ref.update({
                  password: md5(this.state.confirm),
                });
                alert("success, please login");
                this.returnToHome();
              } catch (err) {
                alert(err);
                this.returnToHome();
              }
            }}
          />
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
  input: {
    height: 40,
    borderColor: "#2E424D",
    borderWidth: 1,
    marginVertical: 10,
    fontSize: 17,
  },
});
