import React, { useState } from "react";

// import "fontsource-roboto";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Link from "../link";
import { AuthSendSignInLinkToEmail } from "../../firebase/firebase_utils";

// const initialValues = {
//   //Le champ est requis
//   name: "",
//   lastName: "",
//   jobTitle: "",
//   company: "",
//   email: "",
//   password: "",
//   phone: "",
//   created: new Date(),
// };

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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmitBasics = async (data) => {

    alert(JSON.stringify(data));

    //here I should call signup function from redux 
    //give it the new user info 
    //but first add error handling to the form
    //this function will send a request to the backend and try to sign up the user
    //it will then return the user response
    //how about loading? error? ..

    // console.log(data);
    // setFirstName(data.firstName);
    // setLastName(data.lastName);
    // setJobTitle(data.jobTitle);
    // setCompany(data.company);
    // setEmail(data.email);
    // setPhone(data.phone);
    // const config = {
    //   url: process.env.REGISTER_REDIRECT_URL,
    //   handleCodeInApp: true,
    // };
    // try {
    //   await AuthSendSignInLinkToEmail(data.email, config);
    //   //use router to push the new page
    //   console.log(
    //     `email is sent to ${data.email} Click the link to complete your registration`
    //   );
    //   //save email in local storage
    //   window.localStorage.setItem("emailForRegistration", data.email);
    //   //clear state
    //   setEmail("");
    // } catch (e) {
    //   console.log("errrrooooor: " + e.message);
    // }
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
                name="firstName"
                inputRef={register}
                variant="outlined"
                fullWidth
                id="firstName"
                label="Prénom"
                type="text"
                // autoFocus
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                inputRef={register}
                variant="outlined"
                fullWidth
                id="lastName"
                label="Nom"
                name="lastName"
                type="text"
              />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                inputRef={register}
                variant="outlined"
                fullWidth
                id="company"
                label="Société"
                name="company"
                type="text"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                inputRef={register}
                variant="outlined"
                fullWidth
                id="jobTitle"
                label="Titre d'emploi"
                name="jobTitle"
                type="text"
              />
            </Grid>
          </Grid>

          <Grid item>
            <TextField
              size="small"
              required
              inputRef={register}
              variant="outlined"
              fullWidth
              id="email"
              label="Email"
              name="email"
              type="email"
            />
          </Grid>
          <Grid item>
            <TextField
              size="small"
              required
              inputRef={register}
              variant="outlined"
              fullWidth
              id="phone"
              label="Téléphone"
              name="phone"
              type="tel"
            />
          </Grid>
          <Grid item>
            <TextField
              size="small"
              required
              name="password"
              inputRef={register}
              variant="outlined"
              fullWidth
              id="password"
              label="Mot de passe"
              type="password"
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
            {/* <Button
              variant="contained"
              color="secondary"
              // fullWidth
              component={Link}
              href="/shipper/my-shipments"
              className={classes.submitBtn}
            >
              Créer mon compte
            </Button> */}
            <Button
              variant="contained"
              color="secondary"
              // fullWidth
              className={classes.submitBtn}
              type="submit"
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
          href="/auth/login"
          style={{ textTransform: "lowercase" }}
        >
          Connectez-vous
        </Button>
      </Typography>
    </div>
  );
};

export default SignupForm;
