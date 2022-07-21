import React from "react";
import {Routes, Route, Navigate, Outlet} from "react-router-dom";
import Header from './Common/Header'
import Footer from './Common/Footer'
import Greeting from './CheckInPage/Greeting'
import Reminder from './ReminderPage/Reminder'
// props: user info obj
export default function App(props) {
  return (
    <div className="components">
      <Header />
      <main>
        <Routes>
          {/* <Route element={<RequireAuth />}> */}
            <Route exact path="/" element={<Greeting user={props.user} />} />
            <Route path="/reminder" element={<Reminder />} />
            {/* <Route path="/signout" element={<SignOut />} /> */}
          {/* </Route> */}
          {/* <Route path="/signup" element={<SignUp />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}



