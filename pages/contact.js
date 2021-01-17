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

import Link from "../components/link";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import MainAppBar from "../components/main_appbar";




const useStyles = makeStyles({
    root: {
        backgroundColor: "#eee",
        height: "100vh",
      },
//   drawer: {
//     width: "95%",
//   },
});


const Contact = () =>  {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <MainAppBar/>

        <Grid container justify="center" alignItems="center" style={{height:"100%"}}>

            <Grid item><h1>Contact us</h1></Grid>
            

        </Grid>

        
    </div>
  );
}

export default Contact;
