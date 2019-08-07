var config = { 
    apiKey: "AIzaSyBLJcPBBw1RNSbQalesD24m9Sm8bWsp5B8",
    authDomain: "homewerk-146b9.firebaseapp.com",
    databaseURL: "https://homewerk-146b9.firebaseio.com",
    projectId: "homewerk-146b9",
    storageBucket: "",
    messagingSenderId: "819362993445",
    appId: "1:819362993445:web:800e1c60ebd14162"
  };

  firebase.initializeApp(config);

  var dataRef = firebase.database();

 
 
 // 2. Button for adding Employees
 $("#add-train-btn").on("click", function(event) {
   event.preventDefault();
 
   // Grabs user input
   var train = $("#train-input").val().trim();
   var destination = $("#destination-input").val().trim();
   var time = $("#time-input").val().trim();
   var frequency = $("#frequency-input").val().trim();
   moment("", "hmm").format("HH:mm") 

    //var startTime = "14:00";
    var timeStart = moment("", "hh:mm");
    console.log("Start Time: " + timeStart);
  
    var timeLeft = calcMinutesAway(timeStart, frequency);
    console.log("The next train will arrive in: " + timeLeft + " minutes.");
    if (timeLeft === parseInt(frequency)) {
      timeLeft = 0;
    }
 
 
    var timeNow = moment();   // passing in NO arguments to moment() gives you "now"
 // ** TEST ** Log the result
 console.log("Time Now: " + timeNow); // The result is a UNIX timestamp time
 
 var stringDateNow = moment().format();
 // ** TEST ** Log the result
 console.log("Time Now: " + stringDateNow); // The result is in UTC STRING time RIGHT NOW. Compare this vs. the todayDate OBJECT
 
 // Let's just look at the TIME and not the date
 var timeFormated = moment(timeNow).format("hh:mm");
 // ** TEST ** Log the result
 console.log("Time Now Formated: " + timeFormated);
 
//Time Conversion
function calcMinutesAway(timeStart, frequency) {
  console.log("$frequnecy-input, $time Start")
  return parseInt(frequency) - parseInt(timeStart) % parseInt(frequency);
}

function calcNextArrival(timeLeft) {
  return moment().add(timeLeft, "m").format("HH:mm");
}

 
 // Let's find the DIFFERENCE of the two times "startTime" and "timeNow"
 
 // *** DIFFERENCE IN HOURS **** //
 var differenceHRS = moment().diff(timeStart, "hours");
 // ** TEST ** Log the result in 'hours'
 console.log("Difference Start Time vs Now: " + differenceHRS + " hours");
 // *** DIFFERENCE IN MINUTES **** //
 var differenceMIN = moment().diff(timeStart, "minutes");
 // ** TEST ** Log the result in 'minutes'
 console.log("Difference Start Time vs Now: " + differenceMIN + " minutes");
 
  
   var tnextArrival = calcNextArrival(timeLeft);
   console.log("The next train will arrive at: " + tnextArrival);
 
   // Creates local "temporary" object for holding train data
   var newTrain = {
     train: train,
     destination: destination,
     time: time,
     frequency: frequency
   };
 
   // Uploads train data to the database
   dataRef.ref().push(newTrain);
 
   // Logs everything to console
   console.log(newTrain);
   //console.log(newDestination);
   //console.log(newTime);
   //console.log(newFrequency);
 
   alert("Train successfully added");
 
   // Clears all of the text-boxes
   $("#train-input").val("");
   $("#destination-input").val("");
   $("#time-input").val("");
   $("#frequency-input").val("");
 });
 
 // 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
 dataRef.ref().on("child_added", function(childSnapshot) {
   console.log(childSnapshot.val());
 
   // Store everything into a variable.
   var train = childSnapshot.val().train;
   var destination = childSnapshot.val().destination;
   var time = childSnapshot.val().time;
   var frequency = childSnapshot.val().frequency;

   var milliseconds = parseInt("7395000");
   var hours = Math.floor(milliseconds / 3600000);
   var minutes = Math.floor((milliseconds - (hours * 3600000)) / 60000);
   var seconds = parseInt((milliseconds - (hours * 3600000) - (minutes * 60000)) / 1000);


 
   // Train Info
   console.log(train);
   console.log(destination);
   console.log(time);
   console.log(frequency);

   // Time apart (remainder)
var timeLeft = convertdTime % frequency;
console.log(timeLeft);

// Minute Until Train
var tMinutesTillTrain = frequency - timeLeft;
console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// Next Train
var nextTrain = moment().add(tMinutesTillTrain, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
 
   // Prettify the frequency
   //var frequencyPretty = moment.unix(frequency).format(Number);
 
   // Calculate the months worked using hardcore math
   // To calculate the months worked
   //var time = moment().diff(moment(frequency, "X"), "time");
   //console.log(time);
   var convertdTime = moment(time).format("HH:mm");
  console.log(convertdTime);
   // Calculate the total billed rate
   //var timeLeft = convertdTime - frequency;
   //console.log(timeLeft);


   // Let's just look at the TIME and not the date
var timeFormated = moment(convertdTime).format("HH:mm");
// ** TEST ** Log the result
console.log("Time Now Formated: " + timeFormated);



// Time is 3:30 AM
var firstTime = "16:00";

// First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
console.log(firstTimeConverted);

// Current Time
var Time = moment();
console.log("CURRENT TIME: " + moment(Time).format("hh:mm"));



// Let's find the DIFFERENCE of the two times "startTime" and "timeNow"

// *** DIFFERENCE IN HOURS **** //
var differenceHRS = moment().diff(convertdTime, "hours");
// ** TEST ** Log the result in 'hours'
console.log("Difference Start Time vs Now: " + differenceHRS + " hours");
// *** DIFFERENCE IN MINUTES **** //
var differenceMIN = moment().diff(convertdTime, "minutes");
// ** TEST ** Log the result in 'minutes'
console.log("Difference time-input vs frequnecy-input: " + differenceMIN + " minutes");

// ******************* LET'S PLAY WITH AN INPUT ************** //

// Grab the Form "Submit" Button click and LISTEN for an EVENT
$("#add-input-btn").on("click", function (event) {
    // Prevent Default Browser Reload when "submit" button pressed
    event.preventDefault();
    $("#time").empty();
    $("#difference").empty();
    // Let's grab the text of the user input
    var time = $("#user-input").val().trim();
    // ** TEST ** Log the result
    console.log(time);
    // var startTime = "06:00";
    var differenceMIN = moment(timeStart - frequency, "hh:mm");
    console.log("Start Time: " + submitTime);

    // *** DIFFERENCE IN HOURS **** //
    var differenceHRS = moment().diff(submitTime, "hours");
    // ** TEST ** Log the result in 'hours'
    console.log("Difference Start Time vs Now: " + differenceHRS + " hours");
    // *** DIFFERENCE IN MINUTES **** //
    var differenceMIN = moment().diff(frequency, "minutes");
    // ** TEST ** Log the result in 'minutes'
    console.log("Difference Start Time vs Now: " + differenceMIN + " minutes");

    // $("#time").append(moment(startTime, "hh:mm").text);
    var displayStart = $("<p>").text(moment(submitTime).format("hh:mm"));

    var displayDifferenceHR = $("<p>").text(differenceHRS + " Hours since Start Time");
    var displayDifferenceMIN = $("<p>").text(differenceMIN + " Minutes since Start Time");
    $("#time").append(displayStart);
    $("#difference").append(displayDifferenceHR);
    $("#difference").append(displayDifferenceMIN);
});


  
   // Create the new row
   var newRow = $("<tr>").append(
     $("<td>").text(train),
     $("<td>").text(destination),
     $("<td>").text(time),
     $("<td>").text(frequency),
     $("<td>").text(tMinutesTillTrain),
   );
 
   // Append the new row to the table
   $("#train-table > tbody").append(newRow);
 });
 
