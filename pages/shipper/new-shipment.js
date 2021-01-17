import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ShipperAppBar from "../../components/shipper/shipper_appbar";
import NewShipmentForm from "../../components/shipper/new_shipment_form";

// const initialValues = {};
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
