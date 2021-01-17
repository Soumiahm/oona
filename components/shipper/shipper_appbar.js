import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Avatar from "@material-ui/core/Avatar";

import Link from "../link";
import Logo from "../logo";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#23313E",
  },

  fullScreenMenu: {
    "& .MuiPaper-root": { backgroundColor: "#000", padding: "1rem" },
  },

  link: {
    fontSize: "1.1rem",
    justifyContent: "flex-start",
    textTransform: "capitalize",
    color: "white",
    "&:hover": {
      textDecoration: "none",
    },
  },
  appBarLink: {
    fontSize: "0.9rem",

    fontWeight: "400",
    lineHeight: "1.5",
    letterSpacing: "0.03em",

    textTransform: "capitalize",

    color: "#fff",
    borderRadius: 25,
    "& .buttonStyle": { borderRadius: 25 },
    "&:hover": {
      textDecoration: "none",
    },
  },
  subtitle: {
    fontWeight: "400",
  },
  "@global": {
    a: {
      textDecoration: "none",
    },
  },
}));

const ShipperAppBar = () => {
  const classes = useStyles();

  const trigger = useScrollTrigger();


  return (
    <AppBar position="static" elevation={trigger? 2: 0} className={classes.appBar}>
      <Toolbar>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Grid item>
            <Logo />
          </Grid>

          <Grid item>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="space-between"
              spacing={2}
            >
              <Grid item>
                <Button
                  component={Link}
                  href="/#"
                  className={classes.appBarLink}
                >
                  Guide d'orientation
                </Button>
              </Grid>

              <Grid item>
                <Button
                  component={Link}
                  href="/about"
                  className={classes.appBarLink}
                  endIcon={
                    <Avatar>
                      <AccountCircleIcon />
                    </Avatar>
                  }
                >
                  Ahmad
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default ShipperAppBar;
