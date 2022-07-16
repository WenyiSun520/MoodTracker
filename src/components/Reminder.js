import React, {useState} from "react";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faSquarePlus
} from "@fortawesome/free-regular-svg-icons";

export default function Reminder() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const handleClick =()=>setIsOpenForm(true);
  return (
    <div className="greetingBox">
      <button className="add-reminder-btn" onClick={handleClick}>
        Add Reminder
      </button>
      <RenderForm isTrgger={isOpenForm} openWindow={handleClick} />
    </div>
  );

}

function RenderForm(prop) {
  return prop.isTrigger ? (
    <ReminderForm openWindow={prop.handleClick} />
  ) :(" ");
}

function ReminderForm(prop) {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      date: "",
      type:"",
      title:"",
      note:""
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      prop.openWindow(false);
    },
  });
  return (
    <form className="reminder-form greetingBox" onSubmit={formik.handleSubmit}>
      <h1>Add Reminder</h1>
      <div className="date-time">
        <label htmlFor="date">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          onChange={formik.handleChange}
          value={formik.values.date}
        />

        <label htmlFor="appt">Time</label>
        <input
          type="time"
          id="appt"
          name="appt"
        ></input>
      </div>
      <label htmlFor="email">Type</label>
      <select
        id="type"
        name="type"
        size="3"
        onChange={formik.handleChange}
        value={formik.values.type}
      >
        <option value="Medication">Medic</option>
        <option value="Appointment">Appointment</option>
        <option value="Other">Other</option>
      </select>

      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />

      <label htmlFor="note">Note</label>
      <textarea
        id="note"
        name="note"
        rows="10"
        cols="30"
        onChange={formik.handleChange}
        value={formik.values.note}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
