import * as firebase  from "firebase/app";

// const firebaseConfig = {
//     apiKey: "AIzaSyDp9GT0qb9mMCUZVMYTUDGODOw2JbeOqEk",
//     authDomain: "nwitter-be61e.firebaseapp.com",
//     projectId: "nwitter-be61e",
//     storageBucket: "nwitter-be61e.appspot.com",
//     messagingSenderId: "635407896939",
//     appId: "1:635407896939:web:2bdb7d3dcfd2b97f86fc2e"
// };

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID,
};


export default firebase.initializeApp(firebaseConfig);