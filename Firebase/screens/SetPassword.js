import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GloStyles from "../GloStyles";
import colors from "../assets/Colors";
import CustomActionButton from "../components/CustomActionButton";
import firebase from "firebase";
import { firebaseConfig } from "../config/config";
import "firebase/storage";
import "firebase/database";
import "firebase/auth";
import confirmPassword from "./confirmPassword";

import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

function PhnAuth() {
  const recaptchaVerifier = React.useRef(null);
  // const [phoneNumber, setPhoneNumber] = React.useState();
  const [loginID, setLoginID] = React.useState();
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();
  const [message, showMessage] = React.useState();

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <Text style={{ marginTop: 10 }}>Login ID</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        autoFocus
        placeholder="Enter the login ID"
        onChangeText={(loginID) => setLoginID(loginID)}
      />
      <Button
        title="Send Verification Code"
        // disabled={!phoneNumber}
        onPress={async () => {
          var phn = "";
          try {
            const ref = firebase.database().ref("Users/" + loginID);
            ref.on("value", (snapshot) => {
              phn = snapshot.val().Mobile;
              // console.log(phn);
            });
            const phoneProvider = new firebase.auth.PhoneAuthProvider();
            const verificationId = await phoneProvider.verifyPhoneNumber(
              phn,
              recaptchaVerifier.current
            );
            setVerificationId(verificationId);
            showMessage({
              text: "Verification code has been sent to your phone.",
            });
          } catch (err) {
            showMessage({ text: `Error: ${err.message}`, color: "pink" });
          }
        }}
      />
      <Text style={{ marginTop: 20 }}>Enter Verification code</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        editable={!!verificationId}
        placeholder="123456"
        keyboardType="number-pad"
        onChangeText={setVerificationCode}
      />
      <Button
        title="Confirm Verification Code"
        disabled={!verificationId}
        onPress={async () => {
          try {
            const credential = firebase.auth.PhoneAuthProvider.credential(
              verificationId,
              verificationCode
            );
            await firebase.auth().signInWithCredential(credential);
            showMessage({ text: "Phone authentication successful 👍" });
            window.set.setStates(loginID);
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
              marginTop: 60,
            }}
          >
            {message.text}
          </Text>
        </TouchableOpacity>
      ) : undefined}
    </View>
  );
}

export default class SetPassword extends React.Component {
  constructor() {
    super();
    this.initialiszeFirebase();
    this.state = {
      status: "fail",
      loginID: "",
    };
    window.set = this;
    this.getValue = this.getValue.bind(this);
  }
  initialiszeFirebase() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }
  getValue() {
    return this.state.loginID;
  }

  setStates(ID) {
    this.setState({ status: "pass", loginID: ID });
    const { navigate } = this.props.navigation;
    navigate("confirmPassword", { currentUserId: this.state.loginID });
  }
  render() {
    return (
      <SafeAreaView style={GloStyles.droidSafeArea}>
        <PhnAuth />
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
