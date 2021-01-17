import { makeStyles } from "@material-ui/core";
import "./theme";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const SectionImage = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: "5rem",
      backgroundColor: `${
        props.backgroundColor ? props.backgroundColor : "#fff"
      }`,
    },
    image: {
      maxWidth: "100%",
    },
  }));

  const classes = useStyles();

  const { imageLink, title, description, button, reverseOrder } = props;

  return (
    <Box className={classes.root}>
      <Grid
        container
        direction={reverseOrder ? "row-reverse" : "row"}
        justify="space-between"
        alignItems="center"
      >
        <Grid item container xs={12} md={6} spacing={4}>
          <Grid item>
            <Typography variant="h4" component="h2">
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" component="p">
              {description}
            </Typography>
          </Grid>
          <Grid item>{button}</Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={imageLink} className={classes.image} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SectionImage;
