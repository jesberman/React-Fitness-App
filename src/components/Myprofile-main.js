import React from "react";
import "../styles/Navbar.css";
import Chart from "./Chart";


// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const MyprofileMain = () => (

    <div class="jumbotron myprofile">
        <h1 class="standard-text">Jennifer Prince</h1>

        <br></br>
        <br></br>

        <div id="profile-pic-div">

        </div>

        <h4 class="standard-text">
            Hometown: Seattle, WA
        </h4>
        <br></br>

        <h4 class="standard-text">
            Occupation: Physical Therapist
        </h4>

        <br></br>

        <h4 class="standard-text">
            Education: Dartmouth College
        </h4>

        <br></br>

        <h4 class="standard-text">
            My Goals: Run a marathon
        </h4>

        <br></br>
        <br></br>

        <div id="chart">

            <h2 class="standard-text">
                Profile Fitness Chart
            </h2>
            < Chart />

            {/* <canvas id="lineChart" height="40">
            </canvas> */}
            <br></br>
            <p className="standard-text" >sr = "Steps Run"</p>

        </div>
        <br></br>
        <br></br>

        <script src="../logic.js">
        </script>
    </div>

);

export default MyprofileMain;