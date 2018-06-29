var config = {
    apiKey: "AIzaSyBA8vnDbnmq0pZqljlRlBdwe1rE6BTjXY0",
    authDomain: "entre-t-2.firebaseapp.com",
    databaseURL: "https://entre-t-2.firebaseio.com",
    projectId: "entre-t-2",
    storageBucket: "entre-t-2.appspot.com",
    messagingSenderId: "499672803740"
};

firebase.initializeApp(config);

//  Variable global con la información del usuario 
var userInfo = {};

// Función para guardar la info de los usuarios 
function saveUser(user) {
    var userInfo = {
        uid: user.uid,
        name: user.displayName,
        photo: user.photoURL,
    };

   firebase.database().ref("users/" + user.uid).set(userInfo);
};

var provider = new firebase.auth.GoogleAuthProvider();
$('.photo-user').append('<img src="' + userInfo.photoURL + '"/>');
$('.user-name').append(userInfo.displayName);

$('.logout').click(function(){
    console.log("boton logout clickeado");
    window.location = "index.html";
    firebase.auth().signOut();
});