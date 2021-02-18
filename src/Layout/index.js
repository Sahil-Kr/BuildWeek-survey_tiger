import React, { useState } from "react";
import tigerfoot from "../tiger.svg";
import CreateSurvey from "../components/CreateSurvey";
import TakeSurvey from "../components/TakeSurvey";
import AddQuestions from "../components/AddQuestions";
import Publish from "../components/Publish";
import classes from "./index.module.css";
import { useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";

const Layout = () => {
  const [isEngaged, setIsEngaged] = useState(false);

  const isPublish = useSelector((state) => state.publish);

  return (
    <>
      <div className={classes.Title}>
        <img
          src={tigerfoot}
          className={classes.TigerFoot}
          alt="tiget_foot_print"
        />
        <span className={classes.TitleText}>Survey Tiger</span>
      </div>
      {isPublish ? (
        <Publish />
      ) : !isEngaged ? (
        <>
          <CreateSurvey onSelectChange={setIsEngaged} />
          <TakeSurvey onSelectChange={setIsEngaged} />
        </>
      ) : (
        <AddQuestions />
      )}
    </>
  );
};

export default Layout;
