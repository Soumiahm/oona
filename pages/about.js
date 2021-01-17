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
import Box from "@material-ui/core/Box";
import MainAppBar from "../components/main_appbar";
import { AllInboxOutlined } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import Footer from "../components/footer.js";
// import SectionImage from "../components/section_image";
import HeroImage from "../components/hero_image";
// import Link from "../components/link";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
    padding: "100px 20% 20px 20%",
    // height: "100vh",
  },
  title: {
    fontSize: "29px",
    fontWeight: "900",
    lineHeight: "32px",
    color: "#C5211C",
    margin: "12px 0 15px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: "24px",
    // alignContent: "center",

    lineHeight: "32px",
    margin: "15px 10px",
    color: "#0b2127",
    textAlign: "center",
  },
  //   drawer: {
  //     width: "95%",
  //   },
});

const About = () => {
  const classes = useStyles();

  return (
    <div>
      <MainAppBar />

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item>
          <Typography variant="h6" component="h2" className={classes.title}>
            Bienvenue à notre entreprise
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.subtitle}
          >
            Nous développons la technologie pour trouver des moyens plus
            intelligents de connecter les expéditeurs aux transporteurs tout en
            résolvant certains des problèmes les plus difficiles qui entraînent
            des déchets dans l'industrie du fret.
          </Typography>
        </Grid>
        <Grid item>
          <Typography paragraph>
            OONA est le réseau de fret numérique le plus efficace, utilisant
            l'automatisation pour connecter les expéditeurs et les transporteurs
            pour déplacer des millions de camions, économiser de l'argent pour
            les expéditeurs, augmenter les revenus des transporteurs et éliminer
            le gaspillage de carbone pour notre planète.
          </Typography>
        </Grid>
        <Grid item>
          <Typography paragraph>
            OONA est le réseau de fret numérique le plus efficace, utilisant
            l'automatisation pour connecter les expéditeurs et les transporteurs
            pour déplacer des millions de camions, économiser de l'argent pour
            les expéditeurs, augmenter les revenus des transporteurs et éliminer
            le gaspillage de carbone pour notre planète.
          </Typography>
        </Grid>
        <Grid item>
          <Typography paragraph>
            OONA est le réseau de fret numérique le plus efficace, utilisant
            l'automatisation pour connecter les expéditeurs et les transporteurs
            pour déplacer des millions de camions, économiser de l'argent pour
            les expéditeurs, augmenter les revenus des transporteurs et éliminer
            le gaspillage de carbone pour notre planète.
          </Typography>
        </Grid>
        {/* <Grid item>
          <Typography variant="h6" component="h2" className={classes.subtitle}>
        Résolvant certains des problèmes les plus difficiles qui entraînent des déchets dans l'industrie du fret.

          </Typography>
        </Grid> */}
      </Grid>
      <HeroImage
        title="RÉSOUDRE LES PROBLÈMES FONDAMENTAUX DU FRET"
        imageLink="/truck5.jpg"
        firstButton={
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            href="/expediteurs"
            className={classes.buttonStyle}
            // className={classes.appBarLink}
          >
            Expediteurs
          </Button>
        }
        secondButton={
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            href="/transporteurs"
            className={classes.buttonStyle}
            // className={classes.appBarLink}
          >
            Transporteurs
          </Button>
        }
      />

      <Footer />
    </div>
  );
};

export default About;
