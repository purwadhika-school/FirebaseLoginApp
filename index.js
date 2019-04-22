import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebase from '@firebase/app'
import "@firebase/auth"
import { firebase_key } from './secret_key'

if (!firebase.apps.length) {
  firebase.initializeApp(firebase_key)
}

AppRegistry.registerComponent(appName, () => App);
