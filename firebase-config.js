// ============================================================
// FIREBASE CONFIGURATION
// ============================================================
// 1. Go to https://console.firebase.google.com
// 2. Create a project (or use an existing one)
// 3. Click "Add app" → Web (</> icon), register the app
// 4. Copy the firebaseConfig object below from "Your apps" section
// 5. Go to Build → Realtime Database → Create database
//    - Choose a region close to you (e.g. europe-west1)
//    - Start in TEST MODE (allows read/write for 30 days, then set rules below)
// 6. After creation, go to Rules tab and set:
//    { "rules": { ".read": true, ".write": true } }
//    then Publish.
// ============================================================

const firebaseConfig = {
  apiKey:            "REPLACE_WITH_YOUR_API_KEY",
  authDomain:        "REPLACE_WITH_YOUR_PROJECT.firebaseapp.com",
  databaseURL:       "REPLACE_WITH_YOUR_DATABASE_URL",   // ends in .firebaseio.com or .firebasedatabase.app
  projectId:         "REPLACE_WITH_YOUR_PROJECT_ID",
  storageBucket:     "REPLACE_WITH_YOUR_PROJECT.appspot.com",
  messagingSenderId: "REPLACE_WITH_YOUR_SENDER_ID",
  appId:             "REPLACE_WITH_YOUR_APP_ID"
};
