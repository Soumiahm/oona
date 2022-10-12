import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PersonIcon from "@material-ui/icons/Person";
import { useRouter } from "next/router";

import { APP_NAME } from "../config";
import Logo from "./logo";

import Link from "./link";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  secondSection: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menu: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    color: theme.palette.secondary.main,
    "& .MuiSvgIcon-root": { fontSize: "1.78rem" },
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
    // color: theme.palette.primary.main,
    color: "#2E3B4C",
    borderRadius: 25,
    "& .buttonStyle": { borderRadius: 25 },
    "&:hover": {
      textDecoration: "none",
    },
  },
  signupLink: {
    color: "white",
    fontWeight: "400",
    backgroundColor: "#2E3B4C",
  },
  loginLink: {
    border: `0.1rem solid #2E3B4C`,
    fontWeight: "400",
  },
  dividerStyle: {
    // color: "#fff",
    backgroundColor: "#fff",
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

const MainAppBar = () => {
  const classes = useStyles();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen(true);
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  const pageLink = async (link) => {
    await router.push(link);
    handleCloseMenu();
  };

  const trigger = useScrollTrigger();

  return (
    <AppBar
      position="fixed"
      elevation={trigger ? 4 : 0}
      className={classes.appBar}
    >
      <Toolbar>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>
            <IconButton onClick={handleOpenMenu} className={classes.menu}>
              <MenuIcon />
            </IconButton>

            <Dialog
              fullScreen
              open={open}
              onClose={handleCloseMenu}
              className={classes.fullScreenMenu}
            >
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="flex-start"
                >
                  <Grid item>
                    <Typography variant="h6" className={classes.title}>
                      {APP_NAME}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <IconButton onClick={handleCloseMenu} aria-label="close">
                      <CloseIcon fontSize="large" style={{ color: "white" }} />
                    </IconButton>
                  </Grid>
                </Grid>

                <Grid item>
                  <Button
                    onClick={() => pageLink("/auth/login")}
                    variant="outlined"
                    className={`${classes.appBarLink} ${classes.loginLink}`}
                    startIcon={<PersonIcon />}
                  >
                    Se connecter
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    // component={Link}
                    // href="/expediteur-transporteur-routing"
                    onClick={() => pageLink("/expediteur-transporteur-routing")}
                    variant="contained"
                    color="secondary"
                    className={`${classes.appBarLink} ${classes.signupLink}`}
                  >
                    Inscription
                  </Button>
                </Grid>

                <Grid item>
                  <Button
                    fullWidth
                    onClick={() => pageLink("/")}
                    className={classes.link}
                  >
                    Accueil
                  </Button>
                </Grid>

                <Grid item>
                  <Button
                    fullWidth
                    // component={Link}
                    // href="/expediteurs"
                    onClick={() => pageLink("/expediteurs")}
                    className={classes.link}
                  >
                    Expediteurs
                  </Button>
                </Grid>

                <Grid item>
                  <Button
                    fullWidth
                    // component={Link}
                    // href="/transporteurs"
                    onClick={() => pageLink("/transporteurs")}
                    className={classes.link}
                  >
                    Transporteurs
                  </Button>
                </Grid>

                <Grid item>
                  <Button
                    fullWidth
                    // component={Link}
                    // href="/about"
                    onClick={() => pageLink("/about")}
                    className={classes.link}
                  >
                    société
                  </Button>
                </Grid>

                <Grid item>
                  <Divider className={classes.dividerStyle} />
                </Grid>

                <Grid item>
                  <p className={classes.link} style={{ fontSize: "15px" }}>
                    (212) 613 346786
                  </p>
                  <p className={classes.link} style={{ fontSize: "15px" }}>
                    contact@oona.com
                  </p>
                </Grid>

                {/* <Grid item>
                  <Button
                    fullWidth
                    component={Link}
                    href="/contact"
                    className={classes.link}
                  >
                    Contactez-nous
                  </Button>
                </Grid> */}
              </Grid>
            </Dialog>

            <Grid container spacing={1} className={classes.secondSection}>
              <Grid item>
                <Button
                  component={Link}
                  href="/"
                  className={classes.appBarLink}
                >
                  Acceuil
                </Button>
              </Grid>

              <Grid item>
                <Button
                  component={Link}
                  href="/expediteurs"
                  className={classes.appBarLink}
                >
                  Expediteurs
                </Button>
              </Grid>

              <Grid item>
                <Button
                  component={Link}
                  href="/transporteurs"
                  className={classes.appBarLink}
                >
                  Transporteurs
                </Button>
              </Grid>

              <Grid item>
                <Button
                  component={Link}
                  href="/about"
                  className={classes.appBarLink}
                >
                  société
                </Button>
              </Grid>
              {/* 
              <Grid item>
                <Button
                  component={Link}
                  href="/about"
                  className={classes.appBarLink}
                >
                  À propos de nous
                </Button>
              </Grid> */}

              {/* <Grid item>
                <Button
                  component={Link}
                  href="/contact"
                  className={classes.appBarLink}
                >
                  Contactez-nous
                </Button>
              </Grid> */}
              <Grid item>
                <Button
                  component={Link}
                  href="auth/login"
                  variant="outlined"
                  className={`${classes.appBarLink} ${classes.loginLink}`}
                  startIcon={<PersonIcon />}
                >
                  Se connecter
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  href="/expediteur-transporteur-routing"
                  variant="contained"
                  color="primary"
                  className={`${classes.appBarLink} ${classes.signupLink}`}
                >
                  Inscription
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default MainAppBar;
