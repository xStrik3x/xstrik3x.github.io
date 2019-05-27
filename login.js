// Your web app"s Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB-NsiHfTLFVeWdw6mwa6zOZhTVJHd-ilY",
    authDomain: "lincenceplate.firebaseapp.com",
    databaseURL: "https://lincenceplate.firebaseio.com",
    projectId: "lincenceplate",
    storageBucket: "lincenceplate.appspot.com",
    messagingSenderId: "295117114665",
    appId: "1:295117114665:web:0b5c3b6e95a31e65"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const loginbutton = document.getElementById("loginbutton")

loginbutton.addEventListener("click", function(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value
    
    if(user == "" || pass == ""){
        alert("โปรดกรอก user และ password")
    } else {
        firebase.auth().signInWithEmailAndPassword(user + "@buadmin.net", pass).then(function(){
            window.location = 'select.html'
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("ไม่มีผู้ใช้งานในระบบ")
            // ...
        });
    }
})



    