// TODO mobile
import sizes from "./sizes";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  Navbar: {
    display: "flex",
    alignItems: "space-around",
    justifyContent: "center",
    height: "8vh",
  },
  title: {
    [sizes.down("sm")]: {
      fontSize: "12px",
      display: "block",
    },
  },
  button: {
    margin: "0 10px",
    cursor: "pointer",
    border: "none",
    fontSize: "15px",
    textTransform: "none",
    [sizes.down("sm")]: {
      fontSize: "8px",
      margin: "0 1px",
      border: "none",
      cursor: "pointer",
    },
  },
}));

export default styles;
