export const deleteOption = (id) => {
  return {
    type: "DELETE",
    payload: id,
  };
};

export const updateOptionList = (option) => {
  return {
    type: "UPDATE",
    payload: option,
  };
};

export const resetOptionList = () => {
  return {
    type: "RESET",
  };
};

export const addQuestion = (question) => {
  return {
    type: "ADD-QUESTION",
    payload: question,
  };
};

export const publishQuestion = () => {
  return { type: "PUBLISH" };
};

// export const updateQuestion = (question) => {
//   return {
//     type: "UPDATE-QUESTION",
//     payload: question,
//   };
// };

// export const deleteQuestion = (questionId) => {
//   return {
//     type: "DELETE-QUESTION",
//     payload: questionId,
//   };
// };
