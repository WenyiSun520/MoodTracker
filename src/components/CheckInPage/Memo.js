import React from "react";
import { useState, useEffect, useRef } from "react";

export default function Memo() {
const [isOpen, setIsOpen] = useState(false)
console.log("popup is "+ isOpen)

return (
  <div className="memo">
    <button id="memoBtn" onClick={() => setIsOpen(true)}>
      Add Memo
    </button>
    <Popup trigger={isOpen} setTrigger={setIsOpen} />
  </div>
);
}
function Popup (prop) {
    const [textInput, setTextInput] = useState("")  //useState to control textarea input
    const ref = useRef(null);
    const handleClick = function(event){ // close popup window and record memo
        let textStr = ref.current.value;
        setTextInput(textStr)
        prop.setTrigger(false)
    }
    console.log(textInput)
     useEffect(() => {
       prop.setTrigger(false); // cloase popup window
     }, []);


return prop.trigger ? (
  <div className="pop-up">
    <div className="pop-up-inner">
      <textarea
        ref={ref}
        id="memoText"
        name="memoText"
        cols="50"
        rows="25"
        placeholder="Do you want to record anything?"
      ></textarea>
      <button className="popUp-submit-btn" onClick={handleClick}>
        submit(close)
      </button>
    </div>
  </div>
) : (
  ""
);
}
