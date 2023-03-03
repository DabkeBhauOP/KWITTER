var firebaseConfig = {
      apiKey: "AIzaSyARiBZ3knd-2ARi8uL5tcrg3rBeey7pZPw",
      authDomain: "kwitter-6e160.firebaseapp.com",
      databaseURL: "https://kwitter-6e160-default-rtdb.firebaseio.com",
      projectId: "kwitter-6e160",
      storageBucket: "kwitter-6e160.appspot.com",
      messagingSenderId: "29593192027",
      appId: "1:29593192027:web:4d9eade92b421fc0d0217e"
    };
    
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}


function logout()
{
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location = "index.html";
}

