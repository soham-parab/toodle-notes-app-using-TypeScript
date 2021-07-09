import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";

import "./App.css";
import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { Login } from "./Components/Login/Login";
import { Logout } from "./Components/Logout/Logout";
import { useScribble } from "./Contexts/notesContext";
import { addNote } from "./serverRequests/queryMutationRequests";
import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
  const { isAuthenticated, user } = useAuth0();
  const { state, dispatch } = useScribble();
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Logout />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="notes"
          element={isAuthenticated ? <Home /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}
