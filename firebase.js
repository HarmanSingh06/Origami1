// lets get the firebase to work over here
var firebaseConfig = {
  apiKey: "AIzaSyDQv5ENzPAnOYVV5RBtlkgFogSblUxCSuo",
  authDomain: "origami-1bad5.firebaseapp.com",
  databaseURL: "https://origami-1bad5-default-rtdb.firebaseio.com",
  projectId: "origami-1bad5",
  storageBucket: "origami-1bad5.appspot.com",
  messagingSenderId: "533124098318",
  appId: "1:533124098318:web:7089c69f22823b801bcf5f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var contactRef = firebase.database().ref('contactInfo');

function getInputVal(id) {
  return document.getElementById(id).value;
}
document.getElementById('contact').addEventListener('submit', submitForm)

function submitForm(data) {
  data.preventDefault();

  var mail = getInputVal("mail");
  var firstName = getInputVal("firstName");
  var lastName = getInputVal("lastName");

  update(firstName, lastName, mail);
  getData();
}
function update(firstName, lastName, mail) {
  contactRef1 = contactRef.push();

  contactRef1.set({
    "mail": mail,
    "firstName": firstName,
    "lastName": lastName
  })
}

async function getData() {
  var fetchedData;
   await contactRef.on('value', (data) => {
     console.log(data.toString())
    fetchedData = data.val()
  });

  var array = [fetchedData]
    var str = array.toString();
}
