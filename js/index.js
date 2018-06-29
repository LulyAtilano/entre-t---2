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
    
var provider = new firebase.auth.GoogleAuthProvider();

$("btn-login").click(function(){
    //console.log('login');
    firebase.auth().signInWithPopup(provider).then(function(result){
        saveUser(result.user);
        //$('#photo-user').append("<img src='" + result.user.photoURL + "' />");
        //$('.user-name').html('Lourdes Atilano');
        //$('.user-name').append(result.user.displayName);
        //console.log(result.user.displayName);
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });

});

document.getElementById("btn-logout").addEventListener('click',function (){
    //console.log('logout');
    firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    window.location="user.html";
    } else {
    console.log('desloggeado');
    }
});

$(document).ready(function () {

    // // ******************FUNCION PARA SPLASH******************//
    // setTimeout(function () {
    //     $('#splash').fadeOut(500);
    // }, 1000);
});    

document.getElementById("btn-signup").addEventListener('click',function(){
    //console.log("sign up");
    $('#modal-SignUp').modal('show');
});