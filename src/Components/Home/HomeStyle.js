import { makeStyles } from "@material-ui/core/styles";
import BackgroundImage from "../../Assets/test.jpg";
const useStyles = makeStyles((theme) => ({
  divStyle: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "800px",
    [theme.breakpoints.down("md")]: {
      height: "400px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "200px",
    },
  },
  divCenter: {
    textAlign: "center",
    margin: "0",
    position: "absolute",
    top: "25%",
    left: "0%",
    color: "white",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      top: "15%",
      fontSize: "30px",
    },
  },
  divCenter2: {
    textAlign: "center",
    margin: "0",
    position: "absolute",
    top: "30%",
    left: "40%",
    color: "white",
    fontSize: "25px",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      top: "50%",
      left: "0%",
      fontSize: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      top: "40%",
      left: "0%",
      fontSize: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      top: "50%",
      left: "0%",
      fontSize: "20px",
    },
  },
  buttonCenter: {
    fontSize: "20px",
    color: "white",
    border: "solid",
    "& a": {
      color: "white",
    },
  },
  read: {
    display: "inline-block",
    marginLeft: "3px",
    color: "#286DA8",
    cursor: "pointer",
    "&:hover": {
      color: "#0a8cfc",
    },
  },
}));

export default useStyles;
