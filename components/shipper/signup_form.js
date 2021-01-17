import React, { useState } from "react";

// import "fontsource-roboto";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/grid";
import { makeStyles } from "@material-ui/core/styles";
import Link from "../link";

const initialValues = {
  //Le champ est requis
  name: "",
  lastName: "",
  jobTitle: "",
  company: "",
  email: "",
  password: "",
  phone: "",
  created: new Date(),
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5rem 10% 1rem 10%",
    height: "100vh",
    overflow: "auto",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  submitSection: {
    marginTop: "1rem",
    marginLeft: theme.spacing(1),
  },
  submitBtn: {
    marginTop: theme.spacing(2),
    textTransform: "initial",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
  formTitle: {
    marginLeft: theme.spacing(1),
    paddingBottom: "1.5rem",
  },
  endNote: {
    marginLeft: theme.spacing(1),
    fontSize: "13px",
    fontWeight: "500",
  },
}));

const SignupForm = () => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  const [trackingNumber, setTrackingNumber] = useState("");

  const onSubmitBasics = (data) => {
    console.log(data);
    setTrackingNumber(data.trackingNumber);
  };

  return (
    <div className={classes.root}>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        className={classes.formTitle}
      >
        Inscription
      </Typography>
    

      <form onSubmit={handleSubmit(onSubmitBasics)}>
        <Grid container direction="column">
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                variant="outlined"
                fullWidth
                id="firstName"
                label="Prénom"
                name="firstName"
                type="text"
                // autoFocus
                // autoComplete = ?
                //required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                variant="outlined"
                fullWidth
                id="lastName"
                label="Nom"
                name="lastName"
                type="text"
                // autoComplete = ?
                //required
              />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                variant="outlined"
                fullWidth
                id="company"
                label="Société"
                name="company"
                type="text"
                // autoComplete = ?
                //required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                variant="outlined"
                fullWidth
                id="jobTitle"
                label="Titre d'emploi"
                name="jobTitle"
                type="text"
                // autoComplete = ?
                //required
              />
            </Grid>
          </Grid>

          <Grid item>
            <TextField
              size="small"
              required
              variant="outlined"
              fullWidth
              id="email"
              label="Email"
              name="email"
              type="email"
              // autoComplete = ?
              //required
            />
          </Grid>
          <Grid item>
            <TextField
              size="small"
              required
              variant="outlined"
              fullWidth
              id="phone"
              label="Téléphone"
              name="phone"
              type="tel"
              // autoComplete = ?
              //required
            />
          </Grid>
          <Grid item>
            <TextField
              size="small"
              required
              variant="outlined"
              fullWidth
              id="password"
              label="Mot de passe"
              name="password"
              type="password"
              // autoComplete = ?
              //required
            />
          </Grid>
        </Grid>

        <Grid container display="column" className={classes.submitSection}>
          <Grid item>
            <Typography variant="body2" component="p">
              En cliquant sur “Créer mon compte”, j’accepte &nbsp;
              <a href="/terms-conditions.pdf" target="_blank">
                les conditions générales d'utilisation
              </a>
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              // fullWidth
              component={Link}
              href="/shipper/my-shipments"
              className={classes.submitBtn}
            >
              Créer mon compte
            </Button>
          </Grid>
        </Grid>
      </form>

      <Typography variant="body2" component="p" className={classes.endNote}>
        Vous avez déjà un compte avec Oona?
        <Button
          variant="inherit"
          component={Link}
          href="/login"
          style={{ textTransform: "lowercase" }}
        >
          Connectez-vous
        </Button>
      </Typography>
    </div>
  );
};

export default SignupForm;
