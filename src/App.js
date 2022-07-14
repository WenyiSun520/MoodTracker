import React from "react";
// import { useState } from "react";
import Header from './Header'
import Footer from './Footer'
import Greeting from './Greeting'

// sample login user data
const user = {
  name: "wenyi",
  email: "winnieee.sun@gmail.com",
};
export default function App() {
  return (
    <div className="components">
      <Header />
        <Greeting userInfo={user} />
      <Footer />
    </div>
  );
}



