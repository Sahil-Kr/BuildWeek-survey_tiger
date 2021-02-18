import React from "react";

const RadioQuestions = (props) => {
  const options = props.question.options.map((option) => {
    return (
      <>
        <input
          type="radio"
          id={option.id}
          value={option.content}
          name={"ques" + props.question.id}
        />
        <label for={option.id}>{option.content}</label>
      </>
    );
  });
  return (
    <>
      <h4>
        {" "}
        <span>Q{props.question.id + 1}.&nbsp;</span> {props.question.ques}
      </h4>
      {options}
    </>
  );
};

export default RadioQuestions;
