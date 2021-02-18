import { combineReducers } from "redux";
import handleQuestions from "./handleQuestion";
import handleOptionList from "./handleOptionList";
import publish from "./publish";

const allReducers = combineReducers({
  optionList: handleOptionList,
  questions: handleQuestions,
  publish: publish,
});

export default allReducers;
