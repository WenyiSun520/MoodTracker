import React from "react";
import {Routes, Route, Navigate, Outlet} from "react-router-dom";
import Auth from '@aws-amplify/auth';
import Header from './Header'
import Footer from './Footer'
import Greeting from './Greeting'
import Reminder from './Reminder'
import Summary from './Summary'
import SignUp from './SignUp'
import SignOut from './Signout'

function RequireAuth() {
  //...determine if user is logged in (eg., via AJAX)
  //if no user, send to sign in
  if (Auth.currentAuthenticatedUser()) {
    return <Outlet />;
  } else {
    return <Navigate to="signUp" />;
  }
}


 

// props: user info obj
export default function App(props) {
  return (
    <div className="components">
      <Header />
      <main>
        <Routes>
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Greeting user={props.user} />} />
            <Route path="/reminder" element={<Reminder />} />
            <Route path="/signout" element={<SignOut />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}



