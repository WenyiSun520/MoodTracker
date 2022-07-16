import React, { useState} from "react";
import { useFormik } from "formik";


export default function Reminder() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  console.log("the value of isOpen is" + isOpenForm)
  return (
    <div className="reminderBox">
      <button className="reminderBtn" onClick={() => setIsOpenForm(true)}>
        Add Reminder
      </button>
      <ReminderForm trigger={isOpenForm} handleTrigger={setIsOpenForm} />
      <div className="reminder-single">
        <p>Reminder1</p>
      </div>
      <div className="reminder-single">
        <p>Reminder1</p>
      </div>
      <div className="reminder-single">
        <p>Reminder1</p>
      </div>
      <div className="reminder-single">
        <p>Reminder1</p>
      </div>
      <div className="reminder-single">
        <p>Reminder1</p>
      </div>
    </div>
  )
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
      prop.handleTrigger(false); 
      alert(JSON.stringify(values, null, 2));
      
    },
  });

  return prop.trigger ? (
    <div className="pop-up">
      <form
        className="reminder-form greetingBox"
        onSubmit={formik.handleSubmit}
      >
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
          <input type="time" id="appt" name="appt"></input>
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

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  ) : (
    " "
  );
};
