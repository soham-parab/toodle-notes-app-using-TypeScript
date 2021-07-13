import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";

import "./global.css"
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
import Grid from "./Components/Grid/Grid";


export default function App() {
  const { isAuthenticated } = useAuth0();
 
  return (
    <div className="App">
      <Navbar />
      <Login />
      {/* <Logout /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="notes"
          element={isAuthenticated ? <Home /> : <Navigate to="/" />}
          
        >
          <Route path="/:noteId" element={<Note />} />
          <Route path="/new" element={<Editor />} />

          <Route path="/pinned" element={<Grid />} />
          <Route path="/archived" element={<Grid />} />
          <Route path="/label/:labelName" element={<Grid />} />
          
        </Route>
      </Routes>
    </div>
  );
}
