import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";
const LandingPage = () => {
  return (
    <div className={style.div}>
      <h1 className={style.header}>toodle</h1>
      <h3 className={style.smallHeader}>
        jot down what's on your mind, seamlessly
      </h3>
      <Link className={style.link} to="/notes">
        My Notes
      </Link>
    </div>
  );
};

export default LandingPage;
