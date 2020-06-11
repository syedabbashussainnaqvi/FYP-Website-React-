const initialState = {
  tasks: {
    classification: {
      abstract:
        "Optical images acquired from satellites like sentinel-2 are usually affected by atmosphere and the clouds. While the radar images acquired\
         through satellites like sentinel-1 are not affected because radiometric waves can penetrate through atmosphere and the clouds. Both SAR images\
          and optical images contain different information with respect to scene understanding. Both images can be merged to form a complex understanding.\
           We worked on BigEarthNet dataset which contain optical images of sentinel-2 for 10 European countries. We collected the SAR images of sentinel-1 \
           for the equivalent scenes of BigEarthNet dataset. We collected about 248,390 SAR images and the same no. of image pairs, each pair with spatial \
           resolution of 10m. Later on, we merged the two images channel-wise to train the VGG-16 architecture for multilabel classification. Combining the\
            2 different images improves the classification result by nearly 3%.",
      dataset: {
        text:
          "We worked on BigEarthNet dataset. BigEarthNet is largest archive of sentinel-2 images. It covers 10 European countries i.e. Austria, Belgium, Finland, Ireland, Kosovo, Lithuania, Luxembourg, Portugal, Serbia, and Switzerland. Sentinel-2 satellite acquire data in form of tile. Each tile covers 100x100 km2 of area. In BigEarthNet 125 sentinel-2 image tiles were acquired while it contains 56 unique image tiles. These tiles were acquired June 2017 and May 2018. After acquiring these tiles, each tile was divided into nearly 8000 small patches of dimension 120x120. Now, each patch was associated one or more land cover class labels (multilabel) which were provided from the CORINE Land Cover database of year 2018. There are 43 land cover classes. The resultant archive contained the 590,326 image patches. An example image tile of sentinel-2 image is shown on left:",
        datasetImage: "datasetImage.png",
      },
      dataCollection: {
        text:
          "Now, in order to see whether combining data from SAR and Optical satellites improves the result we have to collect the SAR image patches for the corresponding areas covered by patches in the BigEarthNet. So we developed a semi-automatic workflow to collect the SAR images. The step by step procedure is given below:",

        headings: [
          {
            heading: "Rearranging BigEarthNet patches:",
            text:
              "The archive contains the 590,326 directories; each directory containing 12 bands and corresponds to a single patch. In order to automate the process, we had to rearrange data. Since we knew it contain 125 image tiles with 56 unique tiles. So, we made a directory for each tile within that tile there are different directories of tile corresponding to different time period. Then in the last each tile contains the specific number of patches inside the directory of tile.  The arrangement is shown in the image.",
            image: "heading1Image.jpg",
          },
          {
            heading: "Source Tile Extraction:",
            image: "none",
            text:
              "As mentioned above that the dataset contained the 125 tiles. The web link for each tile was provided by the team of BigEarthNet in csv file available on GitLab. Using those links, we extracted 56 unique tiles. Each tile had the dimensions of 10980x10980.",
          },
          {
            heading: "Extents Extraction:",
            text:
              "After extracting the 56 sentinel-2 tiles. We extracted the extents of all the tiles using qgis tool. The extents obtained was in utm format. So, in order to get the corresponding sentinel-1 tiles through earth engine we converted the utm coordinates to latitudes and longitudes.",
            image: "heading3image.png",
          },
          {
            heading: "Sentinel-1 tile extraction:",
            text:
              "In order to collect the sentinel-1 tile we chose a timespan ranging from 1 to 3 months since sometimes complete sentinel-1 image could be obtained for some region for specific dates. So, we had to collect the images for a larger timespan and then created a mosaic. ",
            image: "heading4image.png",
          },
          {
            heading: "Clipping raster by extent:",
            text:
              "After obtaining the 56 SAR image raster corresponding to sentinel-2 image tiles, we needed to clip patches equivalent to that of BigEarthNet dataset. Since we have rearranged the patches inside the tiles, it became easy to automate the clipping of raster using the extents of individual patches. Following the same procedure for 56 tiles we were able to collect the 248,390 image pairs.",
            image: "heading5image.png",
          },
        ],
      },
      methodology: {
        text:
          "After collecting SAR and optical image pairs, VGG-16 model was trained for multilabel classification. The VGG-16 model was trained for three settings i.e. one was purely trained on Sentinel-1 data, second was trained purely on Sentinel-2 data, last was trained on channel wise concatenate image of Sentinel-1 and Sentinel-2. The overall architecture is depicted in the diagram below:",
        methodologyImage: "methodologyImage.png",
      },
      results: {
        text:
          "Train and test results are depicted in the graphs below. Graphs for all the three settings are given. Training is not smooth for the optical images while it is smooth for the SAR images. In the third graph when both SAR and optical images are merged, training process become smooth.",
        image1: "image1.jpg",
        image2: "image2.jpg",
        image3: "image3.jpg",
        text2: "Results are summarized in the table below as well.",
        image4: "resultsTable.PNG",
      },
      prediction: {
        image1: "predictionImage1.jpg",
        image2: "predictionImage2.jpg",
      },
      classNomenclature: {
        text:
          "As mentioned above that the individual patches were annotated with multilabel provided by CORINE Land Cover database of year 2018. For labelling, most thematic Level-3 class nomenclature gives 43 labels. Later, 19 classes proposed by arranging previous labels based on properties of Sentinel-2 images. Latest labels are shown in the image below:",
        classNomenclatureImage: "classNomenclatureImage.jpg",
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
