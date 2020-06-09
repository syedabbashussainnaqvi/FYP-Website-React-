const initialState = {
  tasks: {
    classification: {
      abstract:
        "The ongoing march toward freely available, highly pre-processed satellite imagery has given both researchers\
and the public unprecedented access to a vast and varied data stream teeming with potential. Among many\
sources, the multi-decade Landsat archive is certainly the best known, but legacy and current data from other\
sensors is available as well through the USGS data portals: these include CBERS, ASTER, and more. Though the\
particular band combinations or non-global missions have made their integration into analyses more challenging,\
these data, in conjunction with the entire Landsat record, are available to contribute to multi-decade\
surveys of land-cover change.",
      dataset: "Dataset info",
      dataCollection: "Data Collection",
      methodology: "Methodology",
      results: "Results",
      methodologyImage: "classificationMethodologyImage.png",
    },
    changeDetection: {
      abstract:
        "The ongoing march toward freely available, highly pre-processed satellite imagery has given both researchers\
and the public unprecedented access to a vast and varied data stream teeming with potential. Among many\
sources, the multi-decade Landsat archive is certainly the best known, but legacy and current data from other\
sensors is available as well through the USGS data portals: these include CBERS, ASTER, and more. Though the\
particular band combinations or non-global missions have made their integration into analyses more challenging,\
these data, in conjunction with the entire Landsat record, are available to contribute to multi-decade\
surveys of land-cover change.",
      dataset: "Dataset info",
      dataCollection: "Data Collection",
      methodology: "Methodology",
      results: "Results",
      methodologyImage: "changeDetectionMethodologyImage.png",
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
