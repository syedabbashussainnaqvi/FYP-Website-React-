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
    left: "38%",
    color: "white",
    fontSize: "25px",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      top: "15%",
      fontSize: "30px",
      left: "20%",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
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
}));

export default useStyles;
