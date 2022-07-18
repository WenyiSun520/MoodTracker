import { Authenticator } from "@aws-amplify/ui-react";
import Auth from "@aws-amplify/auth";
import "@aws-amplify/ui-react/styles.css";
import { Navigate } from "react-router-dom";

function SignOut() {
  if (Auth.signOut()) {
    console.log("Successfully log OUT!");
    return <Navigate to="signup" />;
  } 
}

export default SignOut;
