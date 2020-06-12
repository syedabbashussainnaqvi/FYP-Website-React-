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

        headings: [
          {
            heading: "UNet Training on Potsdam dataset:",
            text:
              "The properties and characteristics of Potsdam dataset are explained above. We had the RGB images along with the ground truth mask. We trained the UNet model for semantic segmentation of the land scenes. There are 4 different operations in the UNet architecture which are as follow:",
            image: "methodologyImage1.png",
            subheadings: [
              {
                heading: "Convolutions:",
                text:
                  "There are successive convolutions in the network architecture to extract the feature maps. A 3x3 kernel/filter is used to carry out the convolutions. These convolutions are followed by the Rectified Linear Unit (ReLU) as an activation function.",
              },
              {
                heading: "Max-Pooling:",
                text:
                  "Every two convolutions are followed by a max pooling layer. These layers are used to keep the important features from the feature map input while discarding the less important features. A 2x2 pool window is used and the size of input feature map is reduced by half.",
              },
              {
                heading: "Up-Convolutions:",
                text:
                  "The up convolutions are used for the up sampling the feature map. Again, a kernel size of 2x2 is used in these convolutions thereby up sampling output dimensions of input feature by factor 2. And every up convolution is followed by two normal convolutions and each convolution is followed by the ReLU activation function.",
              },
              {
                heading: "Concatenations:",
                text:
                  "The output of every two convolutions is being concatenated with the output of the up convolution. The concatenation is being carried out in the following manner:",
                subSubHeadings: [
                  "Output of last convolutions with the output of first up convolution",
                  "Output of second last convolutions with output of second up convolution",
                  "And so no",
                ],
              },
              {
                heading: "Sigmoid output:",
                text:
                  "At the last layer there is a 1x1 convolution followed by the sigmoid activation to get the segmented mask as the output. For training purposes, only RGB channel of images were used. The dimension of input images was 256x256 whereas the total number of output classes was 6 making the dimension of output as 6x256x256. The output gives 6 binary masks corresponding to the each class named above.",
              },
            ],
          },
          {
            heading: "Finding Difference Image (DI) to produce change map:",
            text:
              "In order to learn the similarity/dissimilarity between two temporal images of same regjon we decide to use some distance measure between the two images. The overall method for creating the change map consist of the following steps:",
            image: "methodologyImage1.jpg",
            subheadings: [
              {
                heading: "Feature Extraction:",
                text:
                  "We extracted the feature by inferring the model on two images of different time period and of same region. First, we get the inference result of trained UNet on image of 2018 say of Haripur after that we get the inference result of trained UNet on image of 2019. Doing this we go 6 binary masks for the both input images. The inference result of each image had dimensions of 6x256x256",
              },
              {
                heading: "Similarity:",
                text:
                  "After getting the inference results, we wanted to calculate the similarity between the results of two images. For similarity we selected the Euclidean distance. We calculated the channel wise Euclidean distance, doing so produced the Difference Image with 256x256 dimension. Since we used the Euclidean distance there can be only three possible values i.e. 0, 1, 1.414. ",
              },
              {
                heading: "K-Means Clustering:",
                text:
                  "Now in order to get the change map we need to have 2 values in the change map instead of 3 in the difference image. We need to have a binary change mask as a result where pixel value 0 shows no-change while pixel value 1 shows change. In order to get the change map, we used K-Means Clustering algorithm and specified k=2, so that the algorithm gives only two values in the resultant change mask.",
              },
            ],
          },
        ],
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
