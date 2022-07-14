import React from "react";
import { useState } from "react";
/*The props of Greeting will include basic user information such as name*/
export default function Greeting(props) {
  const [moodValue, setMoodValue] = useState(50); // handle input state
  const [isOpen, setIsOpen] = useState(false);
  const [moodStr, setMoodStr] = useState("");
  const [feedback, setFeedback] = useState("");
  const handleMoodValue = function (event) {
    let userInput = event.target.value;
    if (userInput < 20) {
      setMoodStr("awful");
    } else if (userInput >= 20 && userInput < 40) {
      setMoodStr("frustrated");
    } else if (userInput >= 40 && userInput < 60) {
      setMoodStr("just soso");
    } else if (userInput >= 60 && userInput < 80) {
      setMoodStr("Good");
    } else {
      setMoodStr("Today is great!");
    }
    setMoodValue(userInput);
  };
  const saveVal = function () {
    setFeedback("Feedback recorded");
  };
  const renderMemoBox = function () {
    if (isOpen == true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    console.log("you try to open the memo box");
    return isOpen;
  };
  return (
    <div className="greetingBox">
      <div className="greetingSentence">
        <h2>Hello, {props.userInfo.name}</h2>
        <h3>How are you today?</h3>
      </div>
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
        <div className="showMoodValue">{moodValue}</div> <span>{moodStr}</span>
        <button id="recordMoodValBtn" onClick={saveVal}>
          Submit
        </button>
        <div>{feedback}</div>
      </div>
      <button id="memoBtn" onClick={renderMemoBox}>
        {" "}
        Memo
      </button>
      {isOpen ? <Memo renderMemoBox={renderMemoBox} /> : null}
    </div>
  );
}

export function Memo(props) {
  const [isSubmit, setIsSubmit] = useState(false);
  const showFeedback = function () {
    setIsSubmit(true);
  };
  // props.renderMemoBox();
  return (
    <div className="memoBox">
      <textarea
        className="memoText" // style="resize:none" cols="50" rows="25"
        placeholder="Do you want to record anything?"
      ></textarea>
      <button id="memoSubmitBtn" onClick={showFeedback}>
        Submit
      </button>
      {isSubmit ? <a>Memo Received!</a> : null}
    </div>
  );
}
