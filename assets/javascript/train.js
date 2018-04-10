  //initializing firebase
  var config = {
    apiKey: "AIzaSyC83qS1Aez0I1L43yUXFxCS_76MDPuiQew",
    authDomain: "train-firebase-c9a42.firebaseapp.com",
    databaseURL: "https://train-firebase-c9a42.firebaseio.com",
    projectId: "train-firebase-c9a42",
    storageBucket: "train-firebase-c9a42.appspot.com",
    messagingSenderId: "412002226905"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  $("#user-input").on("click", function(){
     event.preventDefault();


    var name = $("#name").val().trim();
    var destination = $("#place").val().trim();
    var firstTime = $("#time").val().trim();
    var frequency = $("#rate").val().trim();
    //console.log(name);

    database.ref().push({
      name: name,
      destination: destination,
      firstTime: firstTime,
      frequency: frequency,
    });
    //console.log(name);
    //console.log(destination);
    //console.log(firstTime);
    //console.log(frequency);

    alert("Your train has been added!");

    $("#name").val("");
    $("#place").val("");
    $("#time").val("");
    $("#rate").val("");
  });

  database.ref().on("child_added", function(childSnapshot, prevChildKey){

    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var firstTrain = childSnapshot.val().firstTime;
    var trainFrequency = childSnapshot.val().frequency;

    console.log("Name: " + trainName);
    console.log("Destination: " + trainDestination);
    console.log("First Time: " + firstTrain);
    console.log("Frequency: " + trainFrequency);


    var currentMoment = moment();
    
    var changeTime = moment(firstTrain, "hh:mm A");

    var difference = currentMoment.diff(moment(changeTime), "minutes");

    var remainder = difference % trainFrequency;
    var minsAway = trainFrequency - remainder;
    console.log(minsAway);
    var nextTrain = moment().add(minsAway, "minutes").format("hh:mm A");



    $("#schedule").append(
      "<tr><td id='nameDisplay'>" + trainName + 
      "</td><td id='destDisplay'>" + trainDestination +
      "</td><td id='freqDisplay'>" + trainFrequency +
      "</td><td id='firstDisplay'>" + firstTrain + 
      "</td><td id='nextDisplay'>" + nextTrain +
      "</td><td id='awayDisplay'>" + minsAway + "</td></tr>");
  })
