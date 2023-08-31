import 'firebase/auth'
import 'firebase/compat/firestore'

import firebase from 'firebase/compat/app'
import { configEnv } from 'src/utils/configEnv'

import { seedDatabase } from './seed'

// 1) when seeding the database you'll have to uncomment this!

const config = {
    apiKey: configEnv.FIREBASE_API_KEY,
    authDomain: configEnv.FIREBASE_AUTH_DOMAIN,
    databaseURL: configEnv.FIREBASE_REALTIME_DB_URL,
    projectId: configEnv.FIREBASE_PROJECT_ID,
    storageBucket: configEnv.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: configEnv.FIREBASE_MESSAGING_SENDER_ID,
    appId: configEnv.FIREBASE_APP_ID
}

export const firebaseProd = firebase.initializeApp(config)

// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebaseProd)
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data
