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

import Link from "../components/link";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import MainAppBar from "../components/main_appbar";
import LoginForm from "../components/login_form";

const useStyles = makeStyles({
  root: {
    // backgroundColor: "#2E3B4C",
    // backgroundColor: "#38476F",
    // backgroundImage: `linear-gradient(rgba(46, 59, 76, 0.95), rgba(46, 59, 76, 0.95)), url(${"/login.jpg"})`,
    // overflowX: "hidden",
    // height: "100vh",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    // position: "relative",

  },
  title: {
      // color: "#fff",
    // color: "rgba(255,255,255,.9)",
    letterSpacing: "0.12rem",
    fontWeight: "bold",
    fontSize: "40px",
    lineHeight: "1.25em",
    marginTop: "8px",
    // marginBottom: "8px",

  },
  subTitle: {
    // color: "#fff",
    letterSpacing: "0.04rem",
    fontSize: "20px",
  },
  container: {
      paddingTop: "80px",
  },
  formContainer: {
    //   backgroundColor: "#fff",
      // padding: "10%",
  },
  inputForm: {
      color: "#fff",
    border:"none",
	padding:"15px 100px",
	borderRadius:"25px",
    backgroundColor:"rgba(255,255,255,.3)",
    marginTop: "10px",
  },
  
});

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MainAppBar />

      <Grid container direction="column"  alignItems="center" spacing={2} className={classes.container}>
        {/* <Grid item>
          <Typography variant="h4" color="textSecondary" component="h2" className={classes.title}>
            Connexion
          </Typography>
        </Grid> */}
        {/* <Grid item>
          <Typography  paragraph  className={classes.subTitle}>
            Bonjour, merci de vous connecter à votre espace avec vos
            identifiants.
          </Typography>
        </Grid> */}
        <Grid item className={classes.formContainer}>
            <LoginForm/>
        </Grid>
      </Grid>

    </div>
  );
};

export default Login;
