import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { green, blue } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Tooltip from "@material-ui/core/Tooltip";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: "80%",
    width: "100%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  statusChip: {
    backgroundColor: green[200],
  },
}));

export default function ShipmentCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardContent style={{ paddingBottom: "0" }}>
        <Grid
          container
          direction="row"
          spacing={2}
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              123456-zers
            </Typography>
          </Grid>
          <Grid item xs={6} md={2}>
            <Chip label="Accepted" size="small" className={classes.statusChip}/>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="body2" color="textSecondary" component="p">
              From: Microsoft Casablanca Twin Center Tour A - 15ème étage Bd
              Zerktouni 20100 Maroc
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="body2" color="textSecondary" component="p">
              To: Microsoft Rabat 68, angle avenue Omar Ibn Khattab et rue
              Oukaimeden Agdal 10102
            </Typography>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              Price: 345 DH
            </Typography>
          </Grid>
        </Grid>

        <CardActions disableSpacing style={{ padding: "0" }}>
          <Tooltip title="Éditer">

          <IconButton aria-label="settings">
            <EditIcon style={{ color: "blue" }} />
          </IconButton>

          </Tooltip>
          <Tooltip title="Supprimer" style={{ color: "red" }}>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Copier">
            <IconButton aria-label="copy">
              <FileCopyIcon color="primary" />
            </IconButton>
          </Tooltip>

            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon style={{ color: "blue" }} />
            </IconButton>
        </CardActions>
      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{ paddingBottom: "0" }}>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>Shipping description ....</Typography>
          <Typography paragraph>Shipping Details.</Typography>
          <Typography paragraph>Contacter le Transporteur</Typography>
         
        </CardContent>
      </Collapse>
    </Card>
  );
}
