import React, { Fragment, useState } from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import bubbleSort from "./algorithms/bubbleSort";
import selectionSort from "./algorithms/selectionSort";
import insertionSort from "./algorithms/insertSort";
import mergeSort from "./algorithms/mergeSort";
import quickSort from "./algorithms/quickSort";
import radixSort from "./algorithms/radixSort";
import heapSort from "./algorithms/heapSort";
import { testSortingAlgorithms } from "./arrHelper";
import styles from "./styles/NavStyles";

function Nav(props) {
  const classes = styles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  async function handleClick(sort) {
    props.setDisable(true);
    await sort;
    props.setDisable(false);
  }

  const btnList = [
    { name: "New Bars", click: () => props.resetArr() },
    { name: "Bubble Sort", click: () => handleClick(bubbleSort(props.arr)) },
    {
      name: "Selection Sort",
      click: () => handleClick(selectionSort(props.arr)),
    },
    {
      name: "Insertion Sort",
      click: () => handleClick(insertionSort(props.arr)),
    },
    {
      name: "Merge Sort",
      click: () => handleClick(mergeSort(props.arr, 0, props.arr.length - 1)),
    },
    {
      name: "Quick Sort",
      click: () => handleClick(quickSort(props.arr)),
    },
    {
      name: "Radix Sort",
      click: () => handleClick(radixSort(props.arr)),
    },
  ];

  const buttons = (
    <Fragment>
      {btnList.map((btn) => (
        <Button
          key={`btn-${btn.name}`}
          className={classes.button}
          onClick={btn.click}
          disabled={props.disable}
        >
          {btn.name}
        </Button>
      ))}
    </Fragment>
  );
  // drawer
  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <List disablePadding>
          {btnList.map((btn) => (
            <ListItem
              key={`list-${btn.name}`}
              onClick={() => {
                setOpenDrawer(false);
                btn.click();
              }}
              className={classes.button}
              divider
              button
              disabled={props.disable}
            >
              <ListItemText disableTypography className={classes.drawerItem}>
                {btn.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon></MenuIcon>
      </IconButton>
    </Fragment>
  );
  return (
    <AppBar position="static" color="white" className={classes.Navbar}>
      <Toolbar>
        <Typography className={classes.title} variant="h6" color="inherit">
          Sorting Visualizer
        </Typography>
        {matches ? drawer : buttons}
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
