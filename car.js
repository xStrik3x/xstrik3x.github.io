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
const docRef = firebase.firestore().collection("รถยนต์");

const addbutton = document.getElementById("addbutton");
const updatebutton = document.getElementById("updatebutton");
const deletebutton = document.getElementById("deletebutton");
const checkbutton = document.getElementById("checkbutton");
// const inputfile = document.getElementById("input");

var cnt = 0
var storedata


checkbutton.addEventListener("click", function(){

    var lplate = document.getElementById("lplate").value;
    var code = ""
    var fname = ""
    var lname = ""
    var stat = ""
    var phone = ""
    var depart = ""

    document.getElementById("code").value = ""
    document.getElementById("fname").value = ""
    document.getElementById("lname").value = ""
    document.getElementById("stat").value = ""
    document.getElementById("phone").value = "" 
    document.getElementById("depart").value = ""


    if(lplate != ""){
        var docDoc = docRef.doc(lplate)
        docDoc.get().then(function(doc) {
            if (doc.exists) {
                alert("มีเลขทะเบียนในระบบ")

                code = doc.data().no
                stat = doc.data().state
                fname = doc.data().fname
                lname = doc.data().lname
                phone = doc.data().number
                depart = doc.data().depart

                document.getElementById("code").value = code;
                document.getElementById("fname").value = fname;
                document.getElementById("lname").value = lname
                document.getElementById("stat").value = stat
                document.getElementById("phone").value = phone
                document.getElementById("depart").value = depart

                console.log("Document data:", doc.data());
            } else {
                alert("ไม่มีเลขทะเบียนในระบบ")
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    } else {
        alert("โปรดกรอกป้ายทะเบียน")
    }
})

addbutton.addEventListener("click", function(){

    var lplate = document.getElementById("lplate").value;
    var code = document.getElementById("code").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var stat = document.getElementById("stat").value;
    var phone = document.getElementById("phone").value;
    var depart = document.getElementById("depart").value;

    if(lplate == "" || code == "" || fname == "" || lname == "" || stat == "เลือกตำแหน่ง" || phone == "" || depart == "เลือกคณะ"){
        alert("โปรดกรอกให้ครบทุกช่อง")
    } else {

        var alertCon = confirm("ยืนยันการเพิ่มข้อมูล")
        if (alertCon == true){
            var docDoc = docRef.doc(lplate)
            docDoc.get().then(function(doc) {
                if (doc.exists) {
                    alert("มีเลขทะเบียนในระบบ")
                    console.log("Document data:", doc.data());
                } else {
                    docRef.doc(lplate).set({
                    no: code,
                    fname: fname,
                    lname: lname,
                    state: stat,
                    number: phone,
                    depart: depart
                }).then(function(){
                    console.log("Status saved!");
                }).catch(function (error){
                    console.log("Got an error", error);
                })
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });

            
            document.getElementById("lplate").value = ""
            document.getElementById("code").value = ""
            document.getElementById("fname").value = ""
            document.getElementById("lname").value = ""
            document.getElementById("stat").value = ""
            document.getElementById("phone").value = "" 
            document.getElementById("depart").value = ""
            alert("เพิ่มป้ายทะเบียนสำเร็จ")
        }
    } 
})

updatebutton.addEventListener("click", function(){

    var alertCon = confirm("ยืนยันการอัปเดท")
    if (alertCon == true){
         
        var lplate = document.getElementById("lplate").value;
        var code = document.getElementById("code").value;
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var stat = document.getElementById("stat").value;
        var phone = document.getElementById("phone").value;
        var depart = document.getElementById("depart").value;
        docRef.doc(lplate).set({
            no: code,
            fname: fname,
            lname: lname,
            state: stat,
            number: phone,
            depart: depart
        }, {merge: true}).then(function(){
            console.log("Status saved!");
        }).catch(function (error){
            console.log("Got an error", error);
        })

        document.getElementById("lplate").value = ""
        document.getElementById("code").value = ""
        document.getElementById("fname").value = ""
        document.getElementById("lname").value = ""
        document.getElementById("stat").value = ""
        document.getElementById("phone").value = "" 
        document.getElementById("depart").value = ""
        alert("อัพเดทสำเร็จ")
    }

})

deletebutton.addEventListener("click", function(){

    var alertCon = confirm("ยืนยันการลบ")
    if (alertCon == true){
        var lplate = document.getElementById("lplate").value;
        docRef.doc(lplate).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });

        document.getElementById("lplate").value = ""
        document.getElementById("code").value = ""
        document.getElementById("fname").value = ""
        document.getElementById("lname").value = ""
        document.getElementById("stat").value = ""
        document.getElementById("phone").value = "" 
        document.getElementById("depart").value = ""
        alert("ลบป้ายทะเบียนสำเร็จ")
    }
    
})
