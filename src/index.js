import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter} from "react-router-dom";
import './css/style.css';
import "animate.css";
import App from './components/App';
// sample login user data
const user = {
  name: "wenyi",
  email: "winnieee.sun@gmail.com"
};
const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App user={user} />
    </BrowserRouter>
  </React.StrictMode>
);

