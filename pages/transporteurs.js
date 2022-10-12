import Head from "next/head";
import SectionImage from "../components/section_image";
// import NewShipmentForm from "../components/new_shipment/new_shipment_form";
import MainAppBar from "../components/main_appbar";
import Footer from "../components/footer.js";
// import "fontsource-roboto";
import HeroImage from "../components/hero_image";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const appUrl =
  "https://apps.apple.com/us/app/convoy-driver/id1045368390?ammt=8&ls=1";

const useStyles = makeStyles((theme) => ({
  appStoreButton: {
    maxWidth: "190px",
  },
}));
const Carriers = () => {
  const classes = useStyles();

  return (
    <div>
      <MainAppBar />
      <HeroImage
        title="PRENEZ CONTRÔLE DE VOTRE ENTREPRISE AVEC L'APPLICATION OONA"
        description="Prenez contrôle de votre entreprise avec une application qui facilite plus que jamais la réservation et la gestion des charges. Opérez plus efficacement sur vos itinéraires, à vos conditions."
        imageLink="/carriers.jpg"
        firstButton={
          <a href={appUrl}>
            <img src="/google-play.png" className={classes.appStoreButton} />
          </a>
        }
        secondButton={
          <a href={appUrl}>
            <img src="/app-store.png" className={classes.appStoreButton} />
          </a>
        }
      />

      <SectionImage
        imageLink="/app-pic2.png"
        title="La voie rapide vers le succès"
        description="Inscrivez-vous et réservez des charges en quelques minutes. Utilisez votre téléphone pour trouver facilement du travail et gérer des documents. Inscrivez-vous et réservez des charges en quelques minutes. Utilisez votre téléphone pour trouver facilement du travail et gérer des documents."
        // button={
        //   <Button variant="contained" color="secondary">
        //     Get Started
        //   </Button>
        // }
        reverseOrder={true}
      />

      <HeroImage
        title="Conception simple, capacités avancées"
        description="Prenez le contrôle de votre entreprise avec une application qui facilite plus que jamais la réservation et la gestion des charges. Opérez plus efficacement sur vos itinéraires, à vos conditions."
        imageLink="/app-pic1.jpg"
        firstButton={
          <a href={appUrl}>
            <img src="/google-play.png" className={classes.appStoreButton} />
          </a>
        }
        secondButton={
          <a href={appUrl}>
            <img src="/app-store.png" className={classes.appStoreButton} />
          </a>
        }
      />

      <SectionImage
        imageLink="/voie-rapide-succes.jpg"
        title="Faites progresser votre entreprise"
        description="Inscrivez-vous et réservez des charges en quelques minutes. Utilisez votre téléphone pour trouver facilement du travail et gérer des documents. Inscrivez-vous et réservez des charges en quelques minutes. Utilisez votre téléphone pour trouver facilement du travail et gérer des documents."
        // button={
        //   <Button variant="contained" color="secondary">
        //     Get Started
        //   </Button>
        // }
        reverseOrder={false}
      />

      <Footer />
    </div>
  );
};

export default Carriers;
