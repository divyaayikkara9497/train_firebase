//collecting data
$("#user-input").on("click", function(){
	trainName = $("#name").val().trim();
	destination = $("#place").val().trim();
	firstTime = $("#time").val().trim();
	frequency = $("#rate").val().trim();
	console.log(trainName);
})

//initializing firebase
var config = {
    apiKey: "AIzaSyC83qS1Aez0I1L43yUXFxCS_76MDPuiQew",
    authDomain: "train-firebase-c9a42.firebaseapp.com",
    databaseURL: "https://train-firebase-c9a42.firebaseio.com",
    projectId: "train-firebase-c9a42",
    storageBucket: "train-firebase-c9a42.appspot.com",
    messagingSenderId: "412002226905"
  };

  //firebase.initializeApp(config);