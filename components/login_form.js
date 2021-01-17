import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useRouter } from 'next/router'
import {useForm} from "react-hook-form";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    textTransform: "capitalize",
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginForm() {
  const classes = useStyles();
  const router = useRouter();

  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    router.push("/shipper/my-shipments");
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h6">
        Connexion
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={register}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={register}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Connexion
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        {/* <Copyright /> */}
      </Box>
    </Container>
  );
}





// import React, { useState } from "react";

// // import "fontsource-roboto";

// import { useForm } from "react-hook-form";
// import Button from "@material-ui/core/Button";
// import Link from "./link";


// const initialValues = {
//   referenceNumber: "",
//   shipmentNotes: "",
//   weight: 0,
//   rate: 0,
//   trailerType:"",
//   pickupDate: "",
//   dropOffDate: "",
//   notes:"",
//   //Pick up Address
//   pickupAdress: {
//     streetNumber: "",
//     streetName: "",
//     city: "",
//     province: "",
//     postalCode: "",
//     country: "",
//   },
//   //Drop off Address
//   dropoffADdress: {
//     streetNumber: "",
//     streetName: "",
//     city: "",
//     province: "",
//     postalCode: "",
//     country: "",
//   },
// };

// const LoginForm = () => {
//   const { register, handleSubmit } = useForm();

//   const [trackingNumber, setTrackingNumber] = useState("");

//   const onSubmitBasics = (data) => {
//     console.log(data);
//     setTrackingNumber(data.trackingNumber);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmitBasics)}>
//         <h2>Shipment</h2>
//         {/* <label>Shipment tracking number</label>
//           <input
//             type="text"
//             placeholder=""
//             name="trackingNumber"
//             ref={register}
//           /> */}
//         <label>Customer Reference Number</label>
//         <input
//           type="text"
//           placeholder="eg. 0123456"
//           name="referenceNumber"
//           ref={register}
//         />
//         <label>Shipment Notes(optional)</label>
//         <textarea
//           type="text"
//           placeholder="Let us know if there is any extra details for the carrier"
//           name="shipmentNotes"
//           ref={register}
//         />

//         <button type="submit">Submit</button>
//       </form>

//       <h1>trackingNumber: {trackingNumber}</h1>

//       <h2>Not having an account: </h2>
//       <Button
//             variant="outlined"
//             color="secondary"
//             component={Link}
//             href="/expediteur-transporteur-routing"
//           >
//             Sign up
//           </Button>
//     </div>
//   );
// };

// export default LoginForm;
