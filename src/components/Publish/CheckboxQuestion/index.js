import React from "react";

const CheckboxQuestions = (props) => {
  const options = props.question.options.map((option) => {
    return (
      <>
        <input type="checkbox" id={option.id} value={option.content} />
        <label for={option.id}>{option.content}</label>
        <br />
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

export default CheckboxQuestions;
