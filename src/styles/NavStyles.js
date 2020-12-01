import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  Navbar: {
    display: "flex",
    alignItems: "space-around",
    justifyContent: "center",
    height: "8vh",
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      display: "block",
    },
  },
  button: {
    margin: "0 10px",
    cursor: "pointer",
    border: "none",
    fontSize: "1rem",
    textTransform: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
      margin: "0 1px",
      border: "none",
      cursor: "pointer",
    },
  },
}));

export default styles;
