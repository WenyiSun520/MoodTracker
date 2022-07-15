import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceFrown,
  faMeh,
  faSadTear,
  faSmile,
  faSmileWink,
  faCheckCircle
} from "@fortawesome/free-regular-svg-icons";
import Memo from './Memo'

/*The props of Greeting will include basic user information such as name*/
export default function Greeting(props) {
  return (
    <div className="greetingBox">
      <SayHello userName={props.user} />
      <MoodBar />
      <Memo />
    </div>
  );
}
// it will take a user info as props
// the userinfor props is passed down from Greeting function
export function SayHello(props) {
  //  let user = props.userInfo;
   let day= new Date();
   let hours = day.getHours();
   var message =
     hours < 12
       ? "Good Morning"
       : hours < 18
       ? "Good Afternoon"
       : "Good Evening";
  let ranDom = Math.floor(Math.random() * (5 - 0) );
  let greetingDialog = [
    "What's going on?",
    "What's new?",
    "How have you been?",
    "How is everything?",
    "Are you all right?"
  ]
  return (
    <div className="greeting">
      <div className="dw-info">
        <p className="animate__fadeInLeft">
          <em>{day.toLocaleDateString()}</em>
          <br></br>
          <em>{day.toLocaleTimeString()}</em>
        </p>
      </div>
      <div className="helloUser ">
        <h2 className="animate__fadeInLeft">{message},"User-Name"</h2>
      </div>
      <div className="greetingSetence">
        <h2 className="animate__fadeInLeft">{greetingDialog[ranDom]}</h2>
      </div>
    </div>
  );
}

export function MoodBar(){
  const [moodValue, setMoodValue] = useState(50); // handle input: user mood score
  const [moodStr, setMoodStr] = useState(""); // setup user mood string and return to View
  const [feedback, setFeedback] = useState(""); // let user know, app recived their memo
  const [isOpen, setIsOpen] = useState(false); // handle if open popup window
  const [isClick, setIsClick] = useState(false) // handle if clicking moodBtn

  const handleMoodValue = function (event) {
    let userInput = event.target.value; // user input: a number ranged from 0 to 100
    setMoodValue(userInput);
    // based on user MoodValue providing below feedback
    if (moodValue < 20) {
      setMoodStr("awful");
    } else if (moodValue >= 20 && moodValue < 40) {
      setMoodStr("frustrated");
    } else if (moodValue >= 40 && moodValue < 60) {
      setMoodStr("just soso");
    } else if (moodValue >= 60 && moodValue < 80) {
      setMoodStr("Good");
    } else {
      setMoodStr("Today is great!");
    }
  }
  const handleClick = function(){
    setIsClick(true)
  }

  const saveVal = function () {
    setFeedback("Feedback recorded");
  };
  const renderMemoBox = function () {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    console.log("you try to open the memo box");
    return isOpen;
  };
  return (
    <div className="moodBox">
      <div className="moodBar">
        <label>Worse</label>
        <input
          className="mood-input"
          type="range"
          id="vol"
          name="vol"
          min="0"
          max="100"
          onChange={handleMoodValue}
          value={moodValue}
        ></input>
        <label>Great</label>
      </div>
      <div className="moodFeedback">
        <MoodBarFeedBack
          moodValue={moodValue}
          moodStr={moodStr}
          moodFeedback={feedback}
        />
      </div>
      <button className="moodBtn" onClick={handleClick}>
        Submit your Mood Number
      </button>
      {isClick == true ? <FontAwesomeIcon icon={faCheckCircle} /> : null}
    </div>
  );
}

export function MoodBarFeedBack(props){
  let moodValue = props.moodValue;
  let moodStr = props.moodStr;
  let moodFeedback = props.moodFeedback;
  return (
    <div className="moodBarFeedback">
      <div className="showMoodValue">{moodValue}</div>
      <div>{moodStr}</div>
      {moodStr == "awful" ? <FontAwesomeIcon icon={faSadTear} /> : null}
      {moodStr == "Good" ? <FontAwesomeIcon icon={faSmile} /> : null}
      {moodStr == "Today is great!" ? (
        <FontAwesomeIcon icon={faSmileWink} />
      ) : null}
      {moodStr == "just soso" ? <FontAwesomeIcon icon={faMeh} /> : null}
      {moodStr == "frustrated" ? <FontAwesomeIcon icon={faFaceFrown} /> : null}
      <div>{moodFeedback}</div>
    </div>
  );

}
