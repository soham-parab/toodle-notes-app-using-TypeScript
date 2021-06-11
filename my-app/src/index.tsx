import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <Auth0Provider
            domain={domain!}
            clientId={clientId!}
            redirectUri={window.location.origin}
            useRefreshTokens
            cacheLocation="localstorage"
         >
            <App />
         </Auth0Provider>
      </Router>
   </React.StrictMode>,
   document.getElementById("root")
);
