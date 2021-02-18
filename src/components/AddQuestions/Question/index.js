import React from "react";
import classes from "./index.module.css";

const Question = (props) => {
  return (
    <div className={classes.Question}>
      <span>?</span>
      <input
        type="text"
        placeholder="Type your question here"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Question;
