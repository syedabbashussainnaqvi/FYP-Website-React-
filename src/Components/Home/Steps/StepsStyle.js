import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  imageDiv: {
    marginTop: "50px",
    marginBottom: "50px",
    marginLeft: "40px",
    background: "#fff",
    display: "block",
    padding: "10px",
    width: "120px",
    height: "130px",
    borderRadius: "10px",
    backgroundColor: "gray",
    boxShadow:
      "3px -14px 4px rgba(0, 0, 0, 0.3), 1px 0px 40px rgba(0, 0, 0, 0.1) inset",
  },
  innerDiv: {
    marginTop: "20px",
    marginBottom: "50px",
    marginLeft: "40px",
    background: "#fff",
    display: "block",
    padding: "5px",
    height: "inherit",
    borderRadius: "10px",
    boxShadow:
      "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset",
  },
}));

export default useStyles;
