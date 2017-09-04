var queryurl = "https://trainticker.firebaseio.com";

var config = {
    apiKey: "AIzaSyAHsJRaNgQ9IqBwgTJsqeeXWJDjSixjmV4",
    authDomain: "trainticker.firebaseapp.com",
    databaseURL: "https://trainticker.firebaseio.com",
    projectId: "trainticker",
    storageBucket: "trainticker.appspot.com",
    messagingSenderId: "190565608469"
  };
  firebase.initializeApp(config);

var TT = $('#trainTable').val(){
	var trainNo = $("#TrainNo").val();
	var destination = $("#Dest.").val();
	var departure = $("#DT").val();
	var frequency = $("#freq").val();
};

$('#submit').on("click", function submit() {
	database.ref(config.storageBucket).push({
	    trainNo: trainNoInput,
	    destination: destinationInput,
	    departure: departureInput,
	    frequency: frequencyInput
});  
$("#submit").value = '';
};
submit();

//trting to push data inputted into the fields im submit function. realized that data needds to be pushed. Having difficulties past few 
//days pushing data into Firebase Database. Next is to publish it into TrainTable or TT. The function for publishing is below. No errors
//so far. But functionality is not present. I cannot figure out why.

// $('#submit').on('click', function publish(TT) {
// 	$.ajax({
// 		url:queryurl;
// 		method: 'GET';
// 	}).done(function(response) {
// 		$(TT).html($('#trainTable'));
// 	});
// });
// publish();