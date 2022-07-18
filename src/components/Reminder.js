import React, { useState, onFocus } from "react";
import { useFormik } from "formik";


export default function Reminder() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  console.log("the value of isOpen is" + isOpenForm)

  return (
    <div className="reminderBox">
      <div className="btn-series">
        <button className="reminderBtn" onClick={() => setIsOpenForm(true)}>
          Add Reminder
        </button>
      </div>
      <ReminderForm trigger={isOpenForm} handleTrigger={setIsOpenForm} />
      <div className="reminder-single">
        <h3>
          <em>[07.15.2022] Sample: Appointment with Wendy</em>
        </h3>
        <br></br>
        <p>
          This is my thrid appointment with Wendy, I'm gonna talk about my
          suicidal idea happeing last{" "}
        </p>
      </div>
    </div>
  );
}

function ReminderForm(prop) {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  // const curr = new Date();
  // const presetDate = curr.toISOString().substring(0, 10);
  const formik = useFormik({
    initialValues: {
      date: "",
      type:"",
      title:"",
      note:""
    },
    onSubmit: (values) => {
      prop.handleTrigger(false); 
      formik.initialValues.date = formik.values.date;
      formik.initialValues.type = formik.values.type;
      formik.initialValues.title = formik.values.title;
      formik.initialValues.note = formik.values.note;
      alert(JSON.stringify(values, null, 2));  
    },
  });
  <addReminder formik={formik} />

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
            // defaultValue={presetDate}
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

        <button type="submit">Submit</button>
      </form>
    </div>
  ) : (
    " "
  );
};


function addReminder(props) {
  let date = props.formik.date;
  let title = props.formik.title;
  let type = props.formik.type;
  let note = props.formik.note;
  return (
    <div className="reminder-single">
      <h3>"[" + {date}+"]"+{title}</h3>
      <p>{type}</p>
      <p>{note}</p>
    </div>
  );
}