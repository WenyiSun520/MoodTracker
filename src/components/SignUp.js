import { Authenticator } from "@aws-amplify/ui-react";
import Auth from "@aws-amplify/auth";
import "@aws-amplify/ui-react/styles.css";
import { Navigate } from "react-router-dom";
import SignOut from "./Signout";


function SignIn() {
  return (
    <div className="signin">
      <Authenticator>
        <Navigate to="/" />
        {/* <div>
          <h1>Hello, Welcome to MoodTracker!</h1>
          <h2>You are login successfully!</h2>
        </div> */}
      </Authenticator>
    </div>
  );
}

export default SignIn;
