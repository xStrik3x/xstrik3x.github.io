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

const inputfileCar = document.getElementById("inputcar")
const inputfileMotor = document.getElementById("inputmotor")

inputfileCar.addEventListener("click", function(){
    inputfileCar.value = ""
})

function handleFileCar(e) {

  var cnt = 0
  var cnterror = 0
  var files = e.target.files, f = files[0];
  var reader = new FileReader();

  reader.onload = function(e) {
    var data = new Uint8Array(e.target.result);
    var workbook = XLSX.read(data, {type: 'array'});
    var first_sheet_name = workbook.SheetNames[0]
    var worksheet = workbook.Sheets[first_sheet_name]
    var storedata = XLSX.utils.sheet_to_json(worksheet)
    try{
      storedata.forEach(function(){

        var doc = JSON.stringify(storedata[cnt].licenceplate)

        // console.log(doc)
        if(typeof doc === "undefined") throw BreakException
        else {
          var removedoc = doc.replace(/['"]+/g, "")
          firebase.firestore().collection("รถยนต์").doc(removedoc).set({
          no: storedata[cnt].id,
          fname: storedata[cnt].fname,
          lname: storedata[cnt].lname,
          state: storedata[cnt].position,
          number: storedata[cnt].phonenumber,
          depart: storedata[cnt].department
          })
          cnt++
          console.log(cnt)
        }

    })
    alert("ได้เพิ่ม "+ cnt + " ทะเบียนรถยนต์ลงในระบบสำเร็จ")
    } catch (e) {
      cnterror = cnt + 1 
      alert("มีข้อมูลผิดพลาดที่แถว "+ cnterror)
    }
  };
  reader.readAsArrayBuffer(f);
}

inputfileCar.addEventListener('change', handleFileCar, false);

inputfileMotor.addEventListener("click", function(){
    inputfileMotor.value = ""
})

function handleFileMotor(e) {
  var cnt = 0
  var cnterror = 0
  var files = e.target.files, f = files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    var data = new Uint8Array(e.target.result);
    var workbook = XLSX.read(data, {type: 'array'});
    var first_sheet_name = workbook.SheetNames[0]
    var worksheet = workbook.Sheets[first_sheet_name]
    var storedata = XLSX.utils.sheet_to_json(worksheet)
    
    try{
      storedata.forEach(function(){

        var doc = JSON.stringify(storedata[cnt].licenceplate)

        // console.log(doc)
        if(typeof doc === "undefined") throw BreakException
        else {
          var removedoc = doc.replace(/['"]+/g, "")
          firebase.firestore().collection("รถจักยานยนต์").doc(removedoc).set({
          no: storedata[cnt].id,
          fname: storedata[cnt].fname,
          lname: storedata[cnt].lname,
          state: storedata[cnt].position,
          number: storedata[cnt].phonenumber,
          depart: storedata[cnt].department
          })
          cnt++
          console.log(cnt)
        }

    })
    alert("ได้เพิ่ม "+ cnt + " ทะเบียนรถยนต์ลงในระบบสำเร็จ")
    } catch (e) {
      cnterror = cnt + 1 
      alert("มีข้อมูลผิดพลาดที่แถว "+ cnterror)
    }
  };
  reader.readAsArrayBuffer(f);
}
inputfileMotor.addEventListener('change', handleFileMotor, false);



