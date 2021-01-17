import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import Link from "./link";

import Logo from "./logo";

const appUrl =
  "https://apps.apple.com/us/app/convoy-driver/id1045368390?ammt=8&ls=1";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5% 12%",
    backgroundColor: "rgb(46, 59, 76)",
    color: "#fff",
  },
  btn: {
    fontSize: "0.9rem",
    justifyContent: "flex-start",
    textTransform: "capitalize",
    color: "white",
    padding: "0px",
    "&:hover": {
      textDecoration: "none",
    },
  },
  icon: {
    fontSize: "32px",
  },
  endSection: {
    paddingTop: "10px",
  },
  title: {
    // color: theme.palette.primary.main,
    color: "#a9a9a9",
    fontWeight: "500",
    fontSize: "17px",
    letterSpacing: "0.5px",
  },
  appStoreButton: {
    maxWidth: "150px",
  },
}));
const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid
        container
        justify="space-between"
        alignItems="flex-start"
        spacing={4}
      >
        <Grid item>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Logo />
            </Grid>

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
                <img src="/app-store.png" className={classes.appStoreButton} />
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Typography variant="h6" className={classes.title}>
                Services
              </Typography>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                color="inherit"
                href="/expediteurs"
                className={classes.btn}
              >
                Services expéditeurs
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="inherit"
                component={Link}
                href="/transporteurs"
                className={classes.btn}
              >
                Services transporteurs
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Typography variant="h6" className={classes.title}>
                Contact
              </Typography>
            </Grid>
            <Grid item>(212) 613 346786</Grid>
            <Grid item>Contact@oona.com</Grid>
            <Grid item>22 rue Assalam, 90000 Tanger</Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={2}
        className={classes.endSection}
      >
        <Grid item>
          <Grid container justify="center" direction="row" spacing={2}>
            <Grid item>
              <a href="https://www.facebook.com/" style={{color: "inherit"}}>
                <FaFacebook className={classes.icon} />
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.linkedin.com/" style={{color: "inherit"}}>
                <FaLinkedin className={classes.icon} />
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>Copyright @{new Date().getFullYear()}</Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
