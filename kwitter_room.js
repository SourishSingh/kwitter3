const firebaseConfig = {
    apiKey: "AIzaSyAUK5P1zs3n3mmcQ1zjGPoGh6hXpmk9vSg",
    authDomain: "social-website-b3cca.firebaseapp.com",
    projectId: "social-website-b3cca",
    storageBucket: "social-website-b3cca.appspot.com",
    messagingSenderId: "218474140304",
    appId: "1:218474140304:web:bde6c3b7e3639673bb7e15",
    measurementId: "G-XZVSKRKLQK"
  };

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("room_name"+Room_names);
    row="<div class='room_name' id="+Room_name+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+= row;
   });});}
getData();

function addRoom{
  Room_names=document.getElementById("room_name").value;
  
  firebase.database().ref("/").child("Room_name").update{
        localStorage.setItem("room_name",Room_name);

        window.location("kwitter_room.html");

  }
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location("kwitter_room.html");

}