const questions = [];
const handleQuestion = (state = questions, action) => {
  switch (action.type) {
    case "ADD-QUESTION":
      return [...state, action.payload];
    case "UPDATE-QUESTION":
      return [...state, action.payload];
    case "DELETE-QUESTION":
      return state;
    default:
      return state;
  }
};

export default handleQuestion;
