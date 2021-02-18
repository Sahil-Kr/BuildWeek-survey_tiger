let idx, list;
const handleOptionList = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      idx = state.findIndex((option) => option.id === action.payload);
      list = [...state];
      list.splice(idx, 1);
      return list;
    case "UPDATE":
      idx = state.findIndex((option) => option.id === action.payload.id);
      if (idx === -1) {
        return [...state, action.payload];
      }
      list = [...state];
      list[idx].content = action.payload.content;
      return list;
    case "RESET":
      list = [];
      console.log("reset list");
      return list;
    default:
      return state;
  }
};

export default handleOptionList;
