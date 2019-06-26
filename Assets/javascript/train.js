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
   var train = $("#train-name-input").val().trim();
   var destination = $("#destination-input").val().trim();
   var time = $("#time-input").moment().hour(Number);
   var frequency = $("#frequency-input").val().trim();
 
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
   console.log(newDestination);
   console.log(newTime);
   console.log(newFrequency);
 
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
 
   // Train Info
   console.log(train);
   console.log(destination);
   console.log(time);
   console.log(frequency);
 
   // Prettify the frequency
   var frequencyPretty = moment.unix(frequency).format(Number);
 
   // Calculate the months worked using hardcore math
   // To calculate the months worked
   var time = moment().diff(moment(frequency, "X"), "time");
   console.log(time);
 
   // Calculate the total billed rate
   var timeLeft = time - frequency;
   console.log(timeLeft);
 
   // Create the new row
   var newRow = $("<tr>").append(
     $("<td>").text(train),
     $("<td>").text(destination),
     $("<td>").text(time),
     $("<td>").text(frequency),
   );
 
   // Append the new row to the table
   $("#train-table > tbody").append(newRow);
 });
 