import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "../components/link";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  logo: {
    padding: "0px",
    "&:hover": {
      background: "#fff",
    },
  },
});

const Logo = () => {
  const classes = useStyles();

  return (
    <Button
      naked
      component={Link}
      disableRipple
      href="/"
      className={classes.logo}
    >
      <img src="/logo.png" width="150px" />
    </Button>
  );
};

export default Logo;
