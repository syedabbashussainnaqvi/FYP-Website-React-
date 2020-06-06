import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  img: {
    width: "200px",
    height: "200px",
    [theme.breakpoints.down("xs")]: {
      width: "100px",
      height: "100px",
    },
  },
  text: {
    fontSize: "14px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5vw",
    },
  },
  heading: {
    fontSize: "18px",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3vw",
    },
  },
}));

export default useStyles;
