import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";
import PasswordInputText from "react-native-hide-show-password-input";
import * as firebase from "firebase/app";
import { firebaseConfig } from "../config/config";
import "firebase/database";
import GloStyles from "../GloStyles";
import md5 from "md5";

export default class LoginAuthentication extends React.Component {
  constructor() {
    super();
    this.state = { loginID: "", password: "" };
    this.initialiszeFirebase();
  }
  initialiszeFirebase() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }
  handleID(Id) {
    this.setState({ loginID: Id });
  }
  handlePassword(pass) {
    this.setState({ password: pass });
  }
  checkCredentials() {
    try {
      const ref = firebase.database().ref("Users/" + this.state.loginID);
      ref.on("value", (snapshot) => {
        storedPass = snapshot.val().password;
        // console.log(phn);
      });
      if (md5(this.state.password) === storedPass) {
        this.props.navigation.navigate("Login");
      }
    } catch (err) {
      alert(err + "llllllllllll");
    }
  }
  render() {
    return (
      <SafeAreaView style={GloStyles.droidSafeArea}>
        <TextInput
          style={{ marginVertical: 10, fontSize: 17 }}
          autoFocus
          placeholder="Enter the login ID"
          onChangeText={(loginID) => this.handleID(loginID)}
        />
        <PasswordInputText
          style={{ marginVertical: 10, fontSize: 17 }}
          placeholder="Enter your password"
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(password) => this.handlePassword(password)}
        />
        <Button title="login" onPress={() => this.checkCredentials()} />
      </SafeAreaView>
    );
  }
}
