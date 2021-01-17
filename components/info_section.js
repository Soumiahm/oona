import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const InfoSection = (props) => {
  const classes = useStyles();

  const { icon, title, description } = props;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Grid container direction="column" justify="flex-start" spacing={1}>
        <Grid item>
          <Box display="flex" justifyContent="center">
            {icon}
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" justifyContent="center">
            <Typography variant="h6" component="h2">
              {title}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="body1" component="p" align="justify">
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InfoSection;
