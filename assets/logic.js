// Initialize Firebase
var config = {
apiKey: "AIzaSyCFgQlg_N4Qf6yYDGNrj1bShetvq7Qb9WE",
authDomain: "train-scheduler-89dbf.firebaseapp.com",
databaseURL: "https://train-scheduler-89dbf.firebaseio.com",
projectId: "train-scheduler-89dbf",
storageBucket: "train-scheduler-89dbf.appspot.com",
messagingSenderId: "954966020213"
};
firebase.initializeApp(config);

var database = firebase.database();

$("button").on("click", function(event) {
    event.preventDefault();

    var tName = $("#inputTrainName").val().trim();
    var tDest = $("#inputDestination").val().trim();
    var tTime = $("#inputTrainTime").val().trim();
    var tFreq = $("#inputFrequency").val().trim();

var newTrain = {
    Name: tName,
    Destination: tDest,
    Time: tTime,
    Frequency: tFreq
};

database.ref().push(newTrain);

//console.log(newTrain.Name, newTrain.Destination, newTrain.Time, newTrain.Frequency)
 
//clear the input boxes
$("#inputTrainName").val("")
$("#inputDestination").val("")
$("#inputTrainTime").val("")
$("#inputFrequency").val("")

});

database.ref().on("child_added", function(snapshot) {

    var tName = snapshot.val().Name;
    var tDest = snapshot.val().Destination;
    var tTime = snapshot.val().Time;
    var tFreq = snapshot.val().Frequency;

    console.log(tName);
    console.log(tDest);
    console.log(tTime);
    console.log(tFreq);


//add inputted data to the current schedule
$("#train-schedule tbody").append(
    "<tr><td>" + tName + "</td><td>" + tDest + "</td><td>"
+ tFreq + "</td><td>" + "" + "</td><td>" + "" + "</td></tr>");

});