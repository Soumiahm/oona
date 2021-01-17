import Head from "next/head";
import HomeContent from "../../components/home_content";
import MainAppBar from "../../components/main_appbar";
import Footer from "../../components/footer.js";
import HeroImage from "../../components/hero_image";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import SignupForm from "../../components/shipper/signup_form";

import Link from "../../components/link";

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: "hidden",
  },
  sideImage: {
    [theme.breakpoints.between("xs", "sm")]: {
      display: "none",
    },
  },
}));

export default function Shippers() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container justify="center" spacing={0}>
        <Grid item sm={6} className={classes.sideImage}>
          <HeroImage
            title="La solution qui facilite vos expeditions"
            // description="Convoy helps you lower your shipping costs, get your freight delivered on-time, and improve your supply chain efficiency."
            imageLink="/signup.jpg"
            height="100vh"
            // firstButton={
            //   <Button variant="contained" color="secondary" component={Link}
            //   href="/contact">
            //     Ship with Convoy
            //   </Button>
            // }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SignupForm />
        </Grid>
      </Grid>
      <MainAppBar />

      {/* <HomeContent /> */}

      {/* <Footer/> */}
    </Box>
  );
}
