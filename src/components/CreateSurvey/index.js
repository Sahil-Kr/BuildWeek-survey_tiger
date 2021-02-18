import React from "react";
import classes from "./index.module.css";
import { useDispatch } from "react-redux";
import { toggleEngage } from "../../redux/actions";

const CreateSurvey = (props) => {
  const clickHandler = () => {
    props.onSelectChange(true);
  };

  return (
    <div>
      <button className={classes.Button} onClick={clickHandler}>
        Create Survey
      </button>
    </div>
  );
};

export default CreateSurvey;
