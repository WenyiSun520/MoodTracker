import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import Greeting from './Greeting'
import Reminder from './Reminder'
import Summary from './Summary'

// props: user info obj
export default function App(props) {
  return (
    <div className="components">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Greeting user={props.user} />} />
          <Route path="/reminder" element={<Reminder />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}



