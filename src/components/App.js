import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import Greeting from './Greeting'

// props: user info obj
export default function App(props) {
  return (
    <div className="components">
        <Header />
        <main>
          <Routes>
          <Route path="/" element={<Greeting user={props.user} />} />
          </Routes>
        </main>
        <Footer />
    </div>
  );
}



