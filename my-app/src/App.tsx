import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { Login } from "./Components/Login/Login";
import { Logout } from "./Components/Logout/Logout";
import { useScribble } from "./Contexts/notesContext";
import { addNote } from "./serverRequests/queryMutationRequests";

export default function App() {
  const { state, dispatch } = useScribble();
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Logout />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
