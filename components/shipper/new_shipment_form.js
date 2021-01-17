import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import InputAdornment from "@material-ui/core/InputAdornment";


import { useForm } from "react-hook-form";

const initialShipmentValues = {
  referenceNumber: "",
  shipmentNotes: "",
  weight: 0,
  rate: 0,
  trailerType: "",
  pickupDate: "",
  dropOffDate: "",
  notes: "",
};
const initialPickupAddress = {
  city: "",
  postalCode: "",
  province: "",
  Country: "",
};

const initialDropoffAddress = {
  city: "",
  postalCode: "",
  province: "",
  Country: "",
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& label": {
      fontSize: "14px",
      color: "#898989",
    },
  },
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  divider: {
    margin: "17px 0 17px 0",
  },
  title: {
    marginBottom: "30px",
    fontWeight: "500",

  },
  form: {
    width: "100%", // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
  },
  formSection: {
    // marginBottom: theme.spacing(2),
    // backgroundColor:"#ffffff",
    // backgroundImage: "linear-gradient(315deg, #ffffff 0%, #d7e1ec 94%)",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const NewShipmentForm = () => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const [shippingValues, setShippingValues] = useState(initialShipmentValues);
  const [pickupAddress, setPickupAddress] = useState(initialPickupAddress);
  const [dropoffAddress, setdropoffAddress] = useState(initialDropoffAddress);

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const sectionTitle = (text) => (
    // <Typography component="div">
    //   <Box
    //     fontWeight="fontWeightMedium"
    //     fontSize={14}
    //     color="#23313E"
    //     lineHeight={1}
    //   >
    //     {text}
    //   </Box>{" "}
    // </Typography>
    <Typography variant="subtitle1" color="textSecondary" component="h2" style={{color: "#393939"}}>
    {text}
  </Typography>
  );

  return (
    <Container component="main" maxWidth="md" className={classes.root}>
      {/* <CssBaseline /> */}
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}

        <Grid container>
          <Grid item>
            {/* <Typography
              variant="h6"
              color="textSecondary"
              className={classes.title}
            >
              Bonjour Ahmad, que souhaitez-vous expédier?
            </Typography> */}

            <Typography
                    variant="body1"
                    color="textSecondary"
                    component="h2"
                   className={classes.title}

                  >
              Bonjour Ahmad, que souhaitez-vous expédier?
                    
                  </Typography>

          </Grid>
        </Grid>

        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={1} className={classes.formSection}>
            <Grid item xs={12}>
              {sectionTitle(" Information de base")}
            </Grid>
            <Grid item container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <label>Numéro de référence</label>
                <TextField
                  size="small"
                  required
                  variant="outlined"
                  fullWidth
                  id="firstName"
                  // label="Prénom"
                  name="firstName"
                  type="text"
                  placeholder="eg 12345678"
                  // autoComplete = ?
                  //required
                />
              </Grid>
              {/* <Grid item xs={12} sm={6} md={4}>
                <label>weight</label>
                <TextField
                  size="small"
                  required
                  variant="outlined"
                  fullWidth
                  id="lastName"
                  // label="Nom"
                  name="lastName"
                  type="text"
                  placeholder="eg. 400 kg"
                  // autoComplete = ?
                  //required
                />
              </Grid> */}
              <Grid item xs={12} sm={6} md={4}>
                <label>Tarif</label>
                <TextField
                  size="small"
                  required
                  variant="outlined"
                  fullWidth
                  id="lastName"
                  // label="Nom"
                  name="lastName"
                  type="text"
                  placeholder="eg. 8500"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">DH</InputAdornment>
                    ),
                  }}

                  // autoComplete = ?
                  //required
                />
              </Grid>
            </Grid>

            <Grid item container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <label>Type de marchandise</label>
                <TextField
                  size="small"
                  required
                  variant="outlined"
                  fullWidth
                  id="firstName"
                  // label="Prénom"
                  name="firstName"
                  type="text"
                  placeholder="eg. bois"
                  // autoComplete = ?
                  //required
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <label>Poids total</label>
                <TextField
                  size="small"
                  required
                  variant="outlined"
                  fullWidth
                  id="lastName"
                  // label="Nom"
                  name="lastName"
                  type="text"
                  placeholder="eg. 400"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Kg</InputAdornment>
                    ),
                  }}

                  // autoComplete = ?
                  //required
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <label>Quantité</label>
                <TextField
                  size="small"
                  required
                  variant="outlined"
                  fullWidth
                  id="lastName"
                  // label="Nom"
                  name="lastName"
                  type="text"
                  placeholder="eg. 50"
                  // autoComplete = ?
                  //required
                />
              </Grid>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <Grid container spacing={6} className={classes.formSection}>
            <Grid item container xs={12} sm={6} spacing={1}>
              <Grid item>{sectionTitle("Adresse de ramassage")}</Grid>

              <Grid item xs={12}>
                <label>Addresse</label>
                <TextField
                  variant="outlined"
                  size="small"
                  multiline
                  rows={2}
                  // margin="normal"
                  inputRef={register}
                  required
                  fullWidth
                  id="description"
                  // label="Email Address"
                  placeholder="Adresse de ramassage"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item container xs={12} spacing={1}>
                <Grid item xs={12} sm={4}>
                  <label>Code Postal</label>
                  <TextField
                    variant="outlined"
                    size="small"
                    // margin="normal"
                    inputRef={register}
                    required
                    fullWidth
                    id="postalCode"
                    // label="Email Address"
                    placeholder="code postal"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <label>ville</label>
                  <TextField
                    variant="outlined"
                    size="small"
                    // margin="normal"
                    inputRef={register}
                    required
                    fullWidth
                    id="postalCode"
                    // label="Email Address"
                    placeholder=" ville"
                    name="city"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <label>pays</label>
                  <TextField
                    variant="outlined"
                    size="small"
                    // margin="normal"
                    inputRef={register}
                    required
                    fullWidth
                    id="postalCode"
                    // label="Email Address"
                    placeholder="pays"
                    name="city"
                    autoComplete="email"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item container xs={12} sm={6} spacing={1}>

              <Grid item xs={12}>{sectionTitle("Adresse de livraison")}</Grid>
              <Grid item xs={12}>
                <label>Addresse</label>
                <TextField
                  variant="outlined"
                  size="small"
                  multiline
                  rows={2}
                  // margin="normal"
                  inputRef={register}
                  required
                  fullWidth
                  id="description"
                  // label="Email Address"
                  placeholder="address de livraison"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item container xs={12} spacing={1}>
                <Grid item xs={12} sm={4}>
                  <label>Code Postal</label>
                  <TextField
                    variant="outlined"
                    size="small"
                    // margin="normal"
                    inputRef={register}
                    required
                    fullWidth
                    id="postalCode"
                    // label="Email Address"
                    placeholder="code postal"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <label>ville</label>
                  <TextField
                    variant="outlined"
                    size="small"
                    // margin="normal"
                    inputRef={register}
                    required
                    fullWidth
                    id="postalCode"
                    // label="Email Address"
                    placeholder=" ville"
                    name="city"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <label>pays</label>
                  <TextField
                    variant="outlined"
                    size="small"
                    // margin="normal"
                    inputRef={register}
                    required
                    fullWidth
                    id="postalCode"
                    // label="Email Address"
                    placeholder="pays"
                    name="city"
                    autoComplete="email"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Divider className={classes.divider} />

          <Grid container spacing={6} className={classes.formSection}>
            <Grid item container xs={12} sm={6} spacing={1}>
              <Grid item xs={12}>
                {sectionTitle("Date et heure de ramassage")}
              </Grid>
              <Grid item xs={12} sm={6}>
                <label>Date de ramassage</label>
                <TextField
                  variant="outlined"
                  size="small"
                  // margin="normal"
                  inputRef={register}
                  required
                  fullWidth
                  id="postalCode"
                  // label="Email Address"
                  placeholder="date"
                  name="city"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <label>Heure de ramassage</label>
                <TextField
                  variant="outlined"
                  size="small"
                  // margin="normal"
                  inputRef={register}
                  required
                  fullWidth
                  id="postalCode"
                  // label="Email Address"
                  placeholder="time"
                  name="city"
                  autoComplete="email"
                />
              </Grid>
            </Grid>
            <Grid item container xs={12} sm={6} spacing={1}>
              <Grid item xs={12}>
                {sectionTitle("Date et heure de livraison")}
              </Grid>
              <Grid item xs={12} sm={6}>
                <label>Date de livraison</label>
                <TextField
                  variant="outlined"
                  size="small"
                  // margin="normal"
                  inputRef={register}
                  required
                  fullWidth
                  id="postalCode"
                  // label="Email Address"
                  placeholder="date"
                  name="city"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <label>Heure de livraison</label>
                <TextField
                  variant="outlined"
                  size="small"
                  // margin="normal"
                  inputRef={register}
                  required
                  fullWidth
                  id="postalCode"
                  // label="Email Address"
                  placeholder="time"
                  name="city"
                  autoComplete="email"
                />
              </Grid>
            </Grid>
          </Grid>

          <Divider className={classes.divider} />

          <Grid container spacing={1} className={classes.formSection}>
            <Grid item xs={12}>
              {sectionTitle("Personne à contacter")}
            </Grid>
            <Grid item container xs={12} spacing={2}>
              <Grid item xs={12} sm={4}>
                <label>Nom</label>
                <TextField
                  variant="outlined"
                  size="small"
                  // margin="normal"
                  inputRef={register}
                  required
                  fullWidth
                  id="postalCode"
                  // label="Email Address"
                  placeholder="nom"
                  name="name"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <label>Telephone</label>
                <TextField
                  variant="outlined"
                  size="small"
                  // margin="normal"
                  inputRef={register}
                  required
                  fullWidth
                  id="postalCode"
                  // label="Email Address"
                  placeholder="phone"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <label>Email</label>
                <TextField
                  variant="outlined"
                  size="small"
                  // margin="normal"
                  inputRef={register}
                  required
                  fullWidth
                  id="postalCode"
                  // label="Email Address"
                  placeholder="email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <Grid container spacing={1} className={classes.formSection}>
            <Grid item xs={12}>
              {sectionTitle("Détails Supplémentaires")}
            </Grid>
            <Grid item xs={12}>
              {/* <label>Détails Supplémentaires</label> */}
              <TextField
                variant="outlined"
                size="small"
                // margin="normal"
                inputRef={register}
                required
                fullWidth
                multiline
                rows={3}
                id="description"
                // label="Email Address"
                placeholder="Faites-nous savoir s'il y a des détails supplémentaires pour le transporteur"
                name="email"
                autoComplete="email"
              />
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ paddingBottom: "5rem" }}>
            <Grid item>
              <Button
                type="submit"
                // fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Enregistrer cette expédition
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default NewShipmentForm;
