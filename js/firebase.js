var config = {
    apiKey: "AIzaSyDj_C75Jq1mQpeBNjSGEpJPLhjSIm_-IFE",
    authDomain: "entre-t.firebaseapp.com",
    databaseURL: "https://entre-t.firebaseio.com",
    projectId: "entre-t",
    storageBucket: "entre-t.appspot.com",
    messagingSenderId: "1017925579785"
};

firebase.initializeApp(config);

/* Variable global con la información del usuario */
var userInfo = {};

/* Función para guardar la info de los usuarios */
function saveUser(user) {
    var userInfo = {
        uid: user.uid,
        name: user.displayName,
        photo: user.photoURL,
    };

   firebase.database().ref("users/" + user.uid).set(userInfo);
};
