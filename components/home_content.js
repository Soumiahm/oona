import { makeStyles } from "@material-ui/core";
import HeroImage from "./hero_image";
import "./theme";
import InfoSection from "./info_section";
import LibraryAddCheckOutlinedIcon from "@material-ui/icons/LibraryAddCheckOutlined";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { TiZoom } from "react-icons/ti";
import { FaHandHoldingUsd } from "react-icons/fa";
import Link from "./link";

const useStyles = makeStyles((theme) => ({
  root: {},
  userCard: {
    boxShadow: "none",
    paddingTop: "20px",
  },
  media: {
    height: 380,
  },

  infoSection: {
    padding: "2% 5%",
  },
  iconStyle: {
    fontSize: "75px",
    color: theme.palette.secondary.light,
  },
  buttonStyle: {
    textTransform: "capitalize",
  },
}));

const HomeContent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeroImage
        title="ÉCONOMISEZ DE L'ARGENT, GAGNEZ DU TEMPS"
        description="section description"
        imageLink="/truck2.jpg"
        firstButton={
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            href="/expediteurs"
            className={classes.buttonStyle}
          >
            Expéditeurs
          </Button>
        }
        secondButton={
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            href="/transporteurs"
            className={classes.buttonStyle}
          >
            Transporteurs
          </Button>
        }
      />

      <Box className={classes.infoSection}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="2rem"
        >
          <Typography variant="h5" component="h2">
            Lorsque la livraison fonctionne mieux, le monde entier fonctionne
            mieux aussi
          </Typography>
        </Box>
        <Grid
          container
          direction="row"
          spacing={4}
          justify="space-between"
          alignItems="flex-start"
        >
          <InfoSection
            icon={<TiZoom className={classes.iconStyle} />}
            title="Information transparente"
            description="Nous mettons à votre disposition une plateforme collaborative d’optimisation basée sur l’économie de partage pour améliorer le processus de planification et la recherche de transporteur."
          />

          <InfoSection
            icon={<LibraryAddCheckOutlinedIcon className={classes.iconStyle} />}
            title="Fiable et flexible"
            description="Écologiquement nécessaire, l’économie de partage permet d’utiliser la capacité excédentaire des camions avec le but d’éviter le déplacement à vide."
          />

          <InfoSection
            icon={<FaHandHoldingUsd className={classes.iconStyle} />}
            title="Moins cher et plus vert"
            description="Faites la demande d’un transport professionnel abordable en proﬁtant de l’espace excédentaire à bord des camions des companies expertes du domaine."
          />
        </Grid>
      </Box>
      <Box padding="2% 5%">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
          spacing={4}
        >
          <Grid item xs={12} md={6}>
            <Card className={classes.userCard}>
              <CardMedia
                className={classes.media}
                image="/carrier.jpg"
                title="Transporteurs"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Transporteurs
                </Typography>
                <Typography variant="body2" component="p">
                  Réservations plus flexibles, Optimisez le déplacement de vos
                  camions grâce a l’économie de partage
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  component={Link}
                  href="/transporteurs"
                  size="small"
                  color="secondary"
                >
                  En savoir plus
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className={classes.userCard}>
              <CardMedia
                className={classes.media}
                image="/shipper.jpg"
                title="Expediteurs"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Expediteurs
                </Typography>
                <Typography variant="body2" component="p">
                  Économisez jusqu’a 30% sur la transport de votre marchandise
                  grâce a l’économie collaborative Réservations plus flexibles.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  href="/expediteurs"
                  size="small"
                  color="secondary"
                >
                  En savoir plus
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default HomeContent;
