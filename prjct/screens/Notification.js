// buildscript {
//     repositories {
//       // Check that you have the following line (if not, add it):
//       google()  // Google's Maven repository
//     }
//     dependencies {
//       ...
//       // Add this line
//       classpath 'com.google.gms:google-services:4.3.3'
//     }
//   }

//   allprojects {
//     ...
//     repositories {
//       // Check that you have the following line (if not, add it):
//       google()  // Google's Maven repository
//       ...
//     }
//   }

//   apply plugin: 'com.android.application'
// // Add this line
// apply plugin: 'com.google.gms.google-services'

// dependencies {
//   // add the Firebase SDK for Google Analytics
//   implementation 'com.google.firebase:firebase-analytics:17.2.2'
//   // add SDKs for any other desired Firebase products
//   // https://firebase.google.com/docs/android/setup#available-libraries
// }

import { Permissions, Notifications } from "expo";
import React from "react";
import firebase from "firebase";
import { Text, View } from "react-native";
import { render } from "react-dom";

export default class Notification extends React.Component {
  componentDidMount() {
    this.registerforPushNotifications();
  }
  registerforPushNotifications = async () => {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = status;

    if (status !== "granted") {
      const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      return;
    }
    let token = await Notifications.getExpoPushTokenAsync();
    console.log(token);

    let uid = firebase.auth().currentUser.uid;
    firebase.database().ref("Users/123").update({
      expoPushToken: token,
    });
  };
}
