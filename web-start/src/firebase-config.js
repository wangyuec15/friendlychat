/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  // const firebaseConfig = {
    apiKey: "AIzaSyCuFG82NcDFRU9BiYXSdqqAihn6gapNVsM",
    authDomain: "friendlychat-f7f9b.firebaseapp.com",
    projectId: "friendlychat-f7f9b",
    storageBucket: "friendlychat-f7f9b.appspot.com",
    messagingSenderId: "1041519718709",
    appId: "1:1041519718709:web:d1cd2d9e8023123c6e9c7c"
  // };
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}