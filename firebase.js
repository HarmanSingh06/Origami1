// lets get the firebase to work over here

var firebaseConfig = {
  apiKey: "AIzaSyDQv5ENzPAnOYVV5RBtlkgFogSblUxCSuo",
  authDomain: "origami-1bad5.firebaseapp.com",
  databaseURL: "https://origami-1bad5-default-rtdb.firebaseio.com",
  projectId: "origami-1bad5",
  storageBucket: "origami-1bad5.appspot.com",
  messagingSenderId: "533124098318",
  appId: "1:533124098318:web:5488f661d4d1005e1bcf5f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

var data;

//This function just makes my work easier by getting the element just ID
function getInputVal(id) {
  return document.getElementById(id).value;
}
document.getElementById('contact').addEventListener('submit', submitForm)

//This functiion is responsible for  getting the data from the user
function submitForm(data) {
  data.preventDefault();

  var mail = getInputVal("mail");
  var firstName = getInputVal("firstName");
  var lastName = getInputVal("lastName");

  update(firstName, lastName, mail);
  getData();
}
async function update(firstName, lastName, mail) {
  //This creates the unique ID
 var info = await db.collection("users");

  //creating field and setting the data
  info.add({
    "mail": mail,
    "firstName": firstName,
    "lastName": lastName
  })
}
