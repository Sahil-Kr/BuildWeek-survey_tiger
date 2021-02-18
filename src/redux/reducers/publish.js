const publish = (state = false, action) => {
  switch (action.type) {
    case "PUBLISH":
      return true;
    default:
      return state;
  }
};

export default publish;
