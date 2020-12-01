import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  Navbar: {
    display: "flex",
    alignItems: "space-around",
    justifyContent: "center",
    height: "8vh",
  },
  title: {
    [theme.breakpoints.up("md")]: {
      marginRight: "2.5vw",
      paddingRight: "2.5vw",
      borderRight: "0.10em solid black",
      padding: "0.5em",
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  button: {
    margin: "0 10px",
    cursor: "pointer",
    border: "none",
    fontSize: "1rem",
    textTransform: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.9rem",
      margin: "0 5px",
    },
  },
}));

export default styles;
