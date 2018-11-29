function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}




const CHART = document.getElementById("lineChart");
CHART.width = 80;

let lineChart = new Chart(CHART, {
    type: 'line',
    data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday", "Sunday"],
        datasets: [
            {
                label: "Steps I took today",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75, 192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 'miter',
                pointBorderColor:"rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth:1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                //pointRadius: 1,
                //pointHitRadius:10,
                data: [65,59,80,81,56,55,80]
            }
        ]

    }
})



//----------------------Firebase Code-------------------------//
var i = 0;

//Firebase initialization code
var config = {
    apiKey: "AIzaSyCwZY5A_u3FjRjcVcvaWKFbZKaRlvaiztk",
    authDomain: "fitness-project-2cf42.firebaseapp.com",
    databaseURL: "https://fitness-project-2cf42.firebaseio.com",
    projectId: "fitness-project-2cf42",
    storageBucket: "fitness-project-2cf42.appspot.com",
    messagingSenderId: "241726462285"
};
firebase.initializeApp(config);

// declares a database variable, and connects it to the firebase database
var database = firebase.database();


function journalSubmit() {
    document.getElementById("demo").innerHTML = "Paragraph changed!";
}

//tells the code to be ready for the following commads and functions
$(document).ready(function () {


    //Tells the code to run when the journal-button button is clicked
    $("#journal-button").click(function () {

        //Creates a variable and sets its value to what the user inputs in the activity-type text field
        var activityType = $("#activity-type").val().trim();
        console.log("Activity Type");
        console.log(activityType);

        var activityMeasure = $("#activity-measure").val().trim();
        console.log("Activity Measure");
        console.log(activityMeasure);

        // //Creates a variable and sets its value to what the user inputs in the dest text field
        // var dest = $("#dest").val().trim();

        // //Creates a variable and sets its value to what the user inputs in the first_train text field
        // //Also uses moment.js to format it to hours and minutes
        // var firstTrainTime = moment($("#first_train").val().trim(), "HH:mm").format("HH:mm");

        // //Creates a variable and sets its value to what the user inputs in the frequency text field
        // var freq = $("#frequency").val().trim();


        // //creates a new object called "newTrain", with values from the above user input fields
        // var newTrain = {

        //   name: tname,
        //   destination: dest,
        //   first_train: firstTrainTime,
        //   frequency: freq
        // }

        // //Pushes the newTrain object into the firebase database
        // database.ref().push(newTrain);

        // //resets the values of the text fields to blank, so that new data can easily be entered
        // $("#tname").val("");
        // $("#dest").val("");
        // $("#first_train").val("");
        // $("#frequency").val("");

        // return false;

    });

});


