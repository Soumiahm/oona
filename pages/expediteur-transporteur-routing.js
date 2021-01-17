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
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Link from "../components/link";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import MainAppBar from "../components/main_appbar";

const appUrl =
  "https://apps.apple.com/us/app/convoy-driver/id1045368390?ammt=8&ls=1";

const useStyles = makeStyles({
  root: {
    // backgroundColor: "#eee",
    height: "100vh",
    padding: "1rem 10%",
  },
  userCard: {
    boxShadow: "none",
    paddingTop: "20px",
  },
  appStoreButton: {
    maxWidth: "120px",
  },
});

const ShipperCarrierRouting = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <MainAppBar />

      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid item xs={12} md={6}>
          <Card className={classes.userCard}>
            <CardMedia
              className={classes.media}
              image="/shipper.jpg"
              title="Expediteurs"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                Expediteurs
              </Typography>
              <Typography variant="body2" component="p">
                Soumettez le formulaire d'inscription et commencer l'expédition
                dès aujourd'hui. Économisez jusqu’a 30% sur la transport de
                votre marchandise grâce a l’économie collaborative Réservations
                plus flexibles.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                fullWidth
                color="secondary"
                component={Link}
                style={{ margin: "0px 40px 0px 0px" }}
                href="/shipper/register"
              >
                Inscrire
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className={classes.userCard}>
            <CardMedia
              className={classes.media}
              image="/carrier.jpg"
              title="Transporteurs"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                Transporteurs
              </Typography>
              <Typography variant="body2" component="p">
                Réservations plus flexibles, Optimisez le déplacement de vos
                camions grâce a l’économie de partage
              </Typography>
            </CardContent>
            <CardActions>
              <Grid container direction="row" spacing={4}>
                <Grid item>
                  <a href={appUrl}>
                    <img
                      src="/google-play.png"
                      className={classes.appStoreButton}
                    />
                  </a>
                </Grid>
                <Grid item>
                  <a href={appUrl}>
                    <img
                      src="/app-store.png"
                      className={classes.appStoreButton}
                    />
                  </a>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShipperCarrierRouting;
