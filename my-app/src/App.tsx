import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";

import "./App.module.css";
import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { Login } from "./Components/Login/Login";
import { Logout } from "./Components/Logout/Logout";
import { useToodle } from "./Contexts/notesContext";
// import { addNote } from "./serverRequests/queryMutationRequests";
import { useAuth0 } from "@auth0/auth0-react";
import LandingPage from "./Components/LandingPage/LandingPage";
import Editor from "./Components/EditorBox/EditorBox";
import Note from "./Components/Note/Note";

export default function App() {
  const { isAuthenticated, user } = useAuth0();
  const { state, dispatch } = useToodle();
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Logout />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/note" element={<Note />} />
        <Route
          path="notes"
          element={isAuthenticated ? <Home /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}
