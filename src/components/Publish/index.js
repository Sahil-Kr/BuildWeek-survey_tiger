import React from "react";
import { useSelector } from "react-redux";
import classes from "./index.module.css";

import CheckboxQuestion from "./CheckboxQuestion";
import RadioQuestions from "./RadioQuestion";

const Publish = () => {
  const questions = useSelector((state) => state.questions);

  const questionComp = questions.map((question) => {
    if (question.type === 1)
      return <CheckboxQuestion key={question.id} question={question} />;
    else return <RadioQuestions key={question.id} question={question} />;
  });

  //   useEffect(() => {
  //       question.map()
  //   }, [question])

  return <div className={classes.Publish}>{questionComp}</div>;
};

export default Publish;
