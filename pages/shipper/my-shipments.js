import React from "react";
import { fade, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";

import SearchIcon from "@material-ui/icons/Search";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Link from "../../components/link";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import ShipmentCard from "../../components/shipper/shipment_card";
import ShipperAppBar from "../../components/shipper/shipper_appbar";

import TextField from "@material-ui/core/TextField";

/* review list at material ui, and look up how to make lazy loading*/
const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    border: "1px solid #ddd",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },

  container: {
    padding: "20px 20% 30px 20%",
    // backgroundColor: "red",
  },
  listContainer: {
    paddingTop: "30px",
  },

  openFormButton: {
    textTransform: "lowercase",
  },
  viewButton: {
    color: theme.palette.primary.main,
    textTransform: "capitalize",
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div>
      <ShipperAppBar />
      <Box className={classes.container}>
        <Box>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="h2"
                    style={{ fontWeight: "500" }}
                  >
                    Mes expéditions
                  </Typography>
                </Grid>
                <Grid item>
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ "aria-label": "search" }}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                component={Link}
                href="/shipper/new-shipment"
                color="secondary"
                className={classes.openFormButton}
              >
                Créer une expédition
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.listContainer}>
          <List>
            {rows.map((row) => (
              <ListItem key={row.name}>
                <ShipmentCard />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </div>
  );
}
