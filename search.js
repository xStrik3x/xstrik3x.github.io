
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

const db = firebase.firestore()
var table = document.getElementById("myTable")

const searchbutton = document.getElementById("searchbutton")
var result = [{}]
var allcnt = 0

searchbutton.addEventListener("click", function(){
    var chk1 = document.getElementById("type1").checked
    var chk2 = document.getElementById("type2").checked
    var rowcnt = document.getElementById("myTable").rows.length
    var alldoc = [{}]
    var cntdoc = 0

    console.log(rowcnt)

    for(var i = rowcnt - 1; i > 0; i--){
        table.deleteRow(i)
    }

    if(chk1 == false && chk2 == false){
        alert("กรุณาเลือกประเภทรถ")
    } else {
        var type = document.querySelector('input[name="type"]:checked').value
        var search = document.getElementById("search").value

        if(search != ""){
            db.collection(type).doc(search).get().then(function(doc){
                if(doc.exists){
                    var row = table.insertRow(1)
                    var cellPlate = row.insertCell(0)
                    var cellCode = row.insertCell(1)
                    var cellFname = row.insertCell(2)
                    var cellLname = row.insertCell(3)
                    var cellPostition = row.insertCell(4)
                    var cellPhone = row.insertCell(5)
                    var cellDepart = row.insertCell(6)

                    cellPlate.innerHTML = doc.id
                    cellCode.innerHTML = doc.data().no
                    cellFname.innerHTML = doc.data().fname
                    cellLname.innerHTML = doc.data().lname
                    cellPostition.innerHTML = doc.data().state
                    cellPhone.innerHTML = doc.data().number
                    cellDepart.innerHTML = doc.data().depart
                }
                
            }).catch(function(error) {
                console.log("Error getting documents: ", error);
            });

            db.collection(type).get().then(function(querySnapshot){ 
                querySnapshot.forEach(function(doc){
                    alldoc[cntdoc] = doc
                    cntdoc++
                })
            
            // console.log(alldoc)

            alldoc.forEach(function(fordoc){
                if  (fordoc.data().state.includes(search) == true){
                    var row = table.insertRow(1)
                    var cellPlate = row.insertCell(0)
                    var cellCode = row.insertCell(1)
                    var cellFname = row.insertCell(2)
                    var cellLname = row.insertCell(3)
                    var cellPostition = row.insertCell(4)
                    var cellPhone = row.insertCell(5)
                    var cellDepart = row.insertCell(6)

                    cellPlate.innerHTML = fordoc.id
                    cellCode.innerHTML = fordoc.data().no
                    cellFname.innerHTML = fordoc.data().fname
                    cellLname.innerHTML = fordoc.data().lname
                    cellPostition.innerHTML = fordoc.data().state
                    cellPhone.innerHTML = fordoc.data().number
                    cellDepart.innerHTML = fordoc.data().depart
                }
                
                if  (fordoc.data().fname.includes(search) == true){
                    var row = table.insertRow(1)
                    var cellPlate = row.insertCell(0)
                    var cellCode = row.insertCell(1)
                    var cellFname = row.insertCell(2)
                    var cellLname = row.insertCell(3)
                    var cellPostition = row.insertCell(4)
                    var cellPhone = row.insertCell(5)
                    var cellDepart = row.insertCell(6)

                    cellPlate.innerHTML = fordoc.id
                    cellCode.innerHTML = fordoc.data().no
                    cellFname.innerHTML = fordoc.data().fname
                    cellLname.innerHTML = fordoc.data().lname
                    cellPostition.innerHTML = fordoc.data().state
                    cellPhone.innerHTML = fordoc.data().number
                    cellDepart.innerHTML = fordoc.data().depart
                }

                // if  (fordoc.data().no.includes(search) == true){
                //     var row = table.insertRow(1)
                //     var cellPlate = row.insertCell(0)
                //     var cellCode = row.insertCell(1)
                //     var cellFname = row.insertCell(2)
                //     var cellLname = row.insertCell(3)
                //     var cellPostition = row.insertCell(4)
                //     var cellPhone = row.insertCell(5)
                //     var cellDepart = row.insertCell(6)

                //     cellPlate.innerHTML = fordoc.id
                //     cellCode.innerHTML = fordoc.data().no
                //     cellFname.innerHTML = fordoc.data().fname
                //     cellLname.innerHTML = fordoc.data().lname
                //     cellPostition.innerHTML = fordoc.data().state
                //     cellPhone.innerHTML = fordoc.data().number
                //     cellDepart.innerHTML = fordoc.data().depart
                // }
            })

            // console.log(fordoc[0].data().state.includes(''))
            // console.log(docid)
            // console.log(alldoc)
            // console.log(docid.length)
            
            })

            // db.collection(type).where("fname", "==", search).get().then(function(querySnapshot){
            //     var cnt = 1
            //     querySnapshot.forEach(function(doc) {
            //         var row = table.insertRow(cnt)
            //         var cellPlate = row.insertCell(0)
            //         var cellCode = row.insertCell(1)
            //         var cellFname = row.insertCell(2)
            //         var cellLname = row.insertCell(3)
            //         var cellPostition = row.insertCell(4)
            //         var cellPhone = row.insertCell(5)
            //         var cellDepart = row.insertCell(6)

            //         cellPlate.innerHTML = doc.id
            //         cellCode.innerHTML = doc.data().no
            //         cellFname.innerHTML = doc.data().fname
            //         cellLname.innerHTML = doc.data().lname
            //         cellPostition.innerHTML = doc.data().state
            //         cellPhone.innerHTML = doc.data().number
            //         cellDepart.innerHTML = doc.data().depart

            //         cnt++
            //     })
            // }).catch(function(error) {
            //     console.log("Error getting documents: ", error);
            // });
            
            db.collection(type).where("no", "==", search).get().then(function(querySnapshot){
                var cnt = 0
                querySnapshot.forEach(function(doc) {
                    var row = table.insertRow(1)
                    var cellPlate = row.insertCell(0)
                    var cellCode = row.insertCell(1)
                    var cellFname = row.insertCell(2)
                    var cellLname = row.insertCell(3)
                    var cellPostition = row.insertCell(4)
                    var cellPhone = row.insertCell(5)
                    var cellDepart = row.insertCell(6)

                    cellPlate.innerHTML = doc.id
                    cellCode.innerHTML = doc.data().no
                    cellFname.innerHTML = doc.data().fname
                    cellLname.innerHTML = doc.data().lname
                    cellPostition.innerHTML = doc.data().state
                    cellPhone.innerHTML = doc.data().number
                    cellDepart.innerHTML = doc.data().depart
                })
            }).catch(function(error) {
                console.log("Error getting documents: ", error);
            });
            
            // db.collection(type).where("state", "==", search).get().then(function(querySnapshot){
            //     var cnt = 1
            //     querySnapshot.forEach(function(doc) {
            //         var row = table.insertRow(cnt)
            //         var cellPlate = row.insertCell(0)
            //         var cellCode = row.insertCell(1)
            //         var cellFname = row.insertCell(2)
            //         var cellLname = row.insertCell(3)
            //         var cellPostition = row.insertCell(4)
            //         var cellPhone = row.insertCell(5)
            //         var cellDepart = row.insertCell(6)

            //         cellPlate.innerHTML = doc.id
            //         cellCode.innerHTML = doc.data().no
            //         cellFname.innerHTML = doc.data().fname
            //         cellLname.innerHTML = doc.data().lname
            //         cellPostition.innerHTML = doc.data().state
            //         cellPhone.innerHTML = doc.data().number
            //         cellDepart.innerHTML = doc.data().depart

            //         cnt++
            //     })
            // }).catch(function(error) {
            //     console.log("Error getting documents: ", error);
            // });
        } else {
            alert("โปรดกรอกข้อมูล")
        }

    }


})