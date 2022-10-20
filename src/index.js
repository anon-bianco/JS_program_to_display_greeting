import React from "react";
import ReactDOM from "react-dom";

const currentTime = new Date().getHours();
let hour;
let customStyle;

if (currentTime < 12) {
  hour = "Good Morning";
  customStyle = {
    color: "red"
  };
} else if (currentTime < 18) {
  hour = "Good Afternoon";
  customStyle = {
    color: "green"
  };
} else {
  hour = "Good Night";
  customStyle = {
    color: "blue"
  };
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>{hour}</h1>,
  document.getElementById("root")
);
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
