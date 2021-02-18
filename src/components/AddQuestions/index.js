import React, { useEffect, useState } from "react";
import classes from "./index.module.css";
import Options from "./Options";
import Question from "./Question";
import { useDispatch, useSelector } from "react-redux";
import {
  resetOptionList,
  addQuestion,
  publishQuestion,
} from "../../redux/actions/";

const AddQuestions = () => {
  const [selectType, setSelectType] = useState(0);
  const [question, setQuestion] = useState("");
  const [id, setId] = useState(0);
  const optionList = useSelector((state) => state.optionList);
  const questionList = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  const selectChangeHandler = (event) => {
    setSelectType(+event.target.value);
    setQuestion("");
    dispatch(resetOptionList());
  };

  useEffect(() => {
    console.log("type" + selectType);
  });

  const addQuestionHandler = () => {
    if (
      (selectType == 1 && optionList.length < 4) ||
      (selectType == 2 && optionList.length < 2)
    )
      return;
    const questionObj = {
      id: id,
      type: selectType,
      ques: question,
      options: optionList,
    };

    console.log(questionObj);
    setId((id) => id + 1);
    setQuestion("");
    setSelectType(2);
    dispatch(addQuestion(questionObj));
    dispatch(resetOptionList());
  };

  const publishHandler = () => {
    if (questionList.length == 0) return;
    dispatch(publishQuestion());
  };

  return (
    <div className={classes.Questions}>
      <select value={selectType} onChange={selectChangeHandler}>
        <option value="0" disabled hidden>
          Select Question Type
        </option>
        <option value="1">Multi-Select</option>
        <option value="2">Single-Select</option>
      </select>
      {selectType == 2 ? (
        <>
          <Question
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Options type={selectType} />
        </>
      ) : selectType === 1 ? (
        <>
          <Question
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Options type={selectType} />
        </>
      ) : null}
      {selectType === 2 || (selectType === 1 && optionList.length === 4) ? (
        <div className={classes.ButtonRow}>
          <button onClick={addQuestionHandler}>Add Question</button>
          <button onClick={publishHandler} disabled={questionList.length == 0}>
            Publish
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default AddQuestions;
