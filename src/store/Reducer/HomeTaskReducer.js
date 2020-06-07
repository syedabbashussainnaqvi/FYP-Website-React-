const initialState = {
  tasks: {
    classification: {
      abstract: "Classification Abstract",
      dataset: "Dataset info",
      dataCollection: "Data Collection",
      methodology: "Methodology",
      results: "Results",
    },
    changeDetection: {
      abstract: "abbas Abstract",
      dataset: "Dataset info",
      dataCollection: "Data Collection",
      methodology: "Methodology",
      results: "Results",
    },
  },
};

const getData = (state, action) => {
  return {};
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "dataFetchStart":
      return {};
    case "getData":
      return getData(state, action);
    default:
      break;
  }
  return state;
};

export default reducer;
