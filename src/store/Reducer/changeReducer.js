const initialState = {
  tasks: {
    changeDetection: {
      abstract:
        "The lack of annotated data of Pakistan leads to use the unsupervised technique to detect land cover changes. In order to monitor the forest growth or decline, an automated tool is required for this purpose, pretrained segmentation model is required which has been trained on similar dataset. A UNet model is trained on Potsdam dataset containing land scene images along with ground truth of 6 classes. After training, the model inferred on two temporal images of same region. Later, channel wise Euclidean distance was calculated between two images which produced the difference image. After that K-Means Clustering algorithm was applied on difference image which produced the change map.",
      dataset: {
        text:
          "There two datasets we needed for this task. Available LandSat data of Pakistan to acquire extents and extract Sentinel-1 and Sentinel-2 data. The second dataset was the Potsdam dataset needed to train UNet model for semantic segmentation",
        list: [
          {
            heading: "Available Pakistan Data:",
            text:
              "The team who worked on the same project last year collected the dataset of Pakistan. They collected the data for 11 northern regions of Pakistan. The regions include Abbottabad, Buner, Chitral, Hangu, Haripur, Karak, Lower Dir, Malakand, Shangla, Swat and Tor Ghar. They collected the data of LandSat satellite. Along with collecting the data the students also annotated the data for the forest region. The spatial resolution of LandSat satellite is 30m. Also, the annotated data was only available for 2015. So there were low resolution satellite images along with low resolution binary masks. The SAR and Optical data from Sentinel-1 and Sentinel-2 satellite from 2016 and onward through google earth engine.",
          },
          {
            heading: "Potsdam Dataset:",
            text:
              "Potsdam dataset was classified manually into six most common land cover classes. The images in the dataset have four channels (RGB-NIR). This dataset 38 patches extracted from large true orthophoto (TOP) mosaic. 6 classes have been identified i.e. low vegetation, tree, building, surface, car and background.",
          },
        ],
        image: "dataset.png",
      },
      dataCollection: {
        text:
          "Following steps were taken to download SAR and Optical data for 11 Northern regions of Pakistan:",

        headings: [
          "Extents (coordinates) were extracted from the available raster of LandSat satellite for the 11 regions of Northern Pakistan",
          "2.	Using the extents SAR data of Sentinel-1 and Optical data of Sentinel-2 satellites was extracted using google earth engine",
          "3.	Clipping both SAR and Optical raster to smaller patches of dimensions 256x256",
        ],
        image: "dateCollectionProcedure.png",
        text2:
          "We collected the data of 3 from 2017 to 2019 for the 11 regions of Northern Pakistan. An example image of 2018 and 2019 of small region of Haripur is shown below:",
        image2: "dataCollectionImage1.jpg",
        image3: "dataCollectionImage2.jpg",
      },
      methodology: {
        text:
          "The methodology to find change map consist of following 2 methods:",
        methodologyImage: "methodologyImage1.jpg",
      },
      results: {
        text:
          "Only the result of UNet model trained on Potsdam is available. Since we do not have any ground truth the measure the change prediction on the Pakistan dataset. The accuracy curve for the UNet model is shown in the picture below. The training accuracy was 0.818 while the validation accuracy was 0.79. So, there is no overfitting and the model learned characteristic and spatial information very well. ",
        image: "resultImage.jpg",
      },
      prediction: {
        text:
          "The first image is of year 2018 of Haripur region while the second image is of 2019 of the same regions. You can visually see the difference between the two images. PM Imran Khan launched the forestation campaign in 2018 from Haripur. Visually it is obvious that back in 2018 the given region was barren with no green resource whereas after one year of campaign we can see the greenery in the 2019 image of the Haripur. The same result is depicted in the change map as well.  ",

        image1: "predictionImage1.jpg",
        image2: "predictionImage2.jpg",
        image3: "predictionImage3.jpg",
      },
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
