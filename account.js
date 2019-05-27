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


const addbutton = document.getElementById("addbutton")
const deletebutton = document.getElementById("deletebutton")

addbutton.addEventListener("click", function(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value
    var cfmpass = document.getElementById("cfmpass").value

    if(user == "" || pass == "" || cfmpass == ""){
        alert("โปรดกรอกให้ครบ")
    } else {
        if(pass != cfmpass){
            alert("รหัสผ่านกับยืนยันรหัสผ่านไม่ตรงกัน")
        } else {
            firebase.auth().createUserWithEmailAndPassword(user + "@bumail.net", pass).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
              });
              alert("ได้เพิ่มผู้ใช้งานเรียบร้อยแล้ว")
        }
    }
})

deletebutton.addEventListener("click", function(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value
    var cfmpass = document.getElementById("cfmpass").value

    if(user == "" || pass == "" || cfmpass == ""){
        alert("โปรดกรอกให้ครบ")
    } else {
        if(pass != cfmpass){
            alert("รหัสผ่านกับยืนยันรหัสผ่านไม่ตรงกัน")
        } else {
            firebase.auth().signInWithEmailAndPassword(user + "@bumail.net", pass).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert("ไม่มีผู้ใช้งานในระบบ")
                // ...
              });
              firebase.auth().currentUser.delete().then(function() {
                alert("ได้ลบผู้ใช้เรียบร้อยแล้ว")
            }).catch(function(error) {
                // An error happened.
            });
        }
    }

})