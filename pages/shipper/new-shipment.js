import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Link from "../../components/link";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import ShipperAppBar from "../../components/shipper/shipper_appbar";
import NewShipmentForm from "../../components/shipper/new_shipment_form";

const initialValues = {};

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#F6F6F6",
    // height: "100vh",
  },

  paper: {
    // padding: "0px 20% 30px 20%",
  },
  container: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const NewShipment = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ShipperAppBar />
      <NewShipmentForm />
    </div>
  );
};

export default NewShipment;
