import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";


const HeroImage = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {},

    hero: {
        backgroundColor: "#000" ,
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${props.imageLink})`,
      height: `${props.height? props.height : "600px"}`,

      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
    },
    heroText: {
      fontSize: "35px",
      letterSpacing: "3px",
      fontWeight: "600",
      color: "#fff",
    },
    description: {

      fontSize: "25px",
      letterSpacing: "2px",
      fontWeight: "500",
      color: "#fff",

    },
    heroSection: {
      height: "100%",
      padding: "5%",
    },
  }));
  const classes = useStyles();

  return (
    <Box className={classes.hero}>
      <Grid container alignItems="center" className={classes.heroSection}>
        <Grid item container direction="column" spacing={4}>
          <Grid item xs={10} md={6}>
            <Box className={classes.heroText}>
              {props.title}
            </Box>
          </Grid>
       
          <Grid
            item
            container
            // spacing={2}
            // direction="row"
            justify="space-between"
            alignItems="flex-start"
            xs={10} md={4}
          >
            <Grid item>
             {props.firstButton}
            </Grid>
            <Grid item>
              {props.secondButton}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroImage;
