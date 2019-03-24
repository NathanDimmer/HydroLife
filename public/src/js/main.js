// Initialize Firebase
var config = {
  apiKey: "AIzaSyAtsUjNs_jl04HzC3_g_FPNOpLxw59ohcw",
  authDomain: "hydrolife-7839d.firebaseapp.com",
  databaseURL: "https://hydrolife-7839d.firebaseio.com",
  projectId: "hydrolife-7839d",
  storageBucket: "hydrolife-7839d.appspot.com",
  messagingSenderId: "376106298401"
};
firebase.initializeApp(config);
console.log('h');
let provider = new firebase.auth.GoogleAuthProvider();

let writeDrinkData = (userId, name, email, drinks) => {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    sips: drinks
  });
};
let sipCountRef = firebase.database().ref('users/5ormm86FPpRAygO0HrsuDw3SBci2');
sipCountRef.on('value', (snapshot) => {
    console.log('n');
    console.log(snapshot.val().sips);
});

firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  //console.log(user);

  writeDrinkData(user.uid, user.displayName, user.email, 5);

  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // .
});
