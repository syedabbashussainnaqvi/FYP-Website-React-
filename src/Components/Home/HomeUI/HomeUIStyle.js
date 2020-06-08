import { makeStyles } from "@material-ui/core/styles";
import BackgroundImage from "../../../Assets/test.jpg";
const useStyles = makeStyles((theme) => ({
  divStyle: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "500px",
    [theme.breakpoints.down("md")]: {
      height: "200px",
    },
  },
  divCenter: {
    textAlign: "center",
    margin: "0",
    position: "absolute",
    top: "25%",
    left: "35%",
    color: "white",
    fontSize: "30px",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      top: "15%",
      fontSize: "18px",
      left: "20%",
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
