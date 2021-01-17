import MainAppBar from "../components/main_appbar";
import Footer from "../components/footer.js";
import HeroImage from "../components/hero_image";
import Button from "@material-ui/core/Button";
import SectionImage from "../components/section_image";
import Link from "../components/link";


export default function Shippers() {
  return (
    <div>
      <MainAppBar />
      <HeroImage
        title="BIENVENUE DANS UN NOUVEAU TYPE DE PARTENARIAT DE FRET"
        description="Convoy helps you lower your shipping costs, get your freight delivered on-time, and improve your supply chain efficiency."
        imageLink="/shippers.jpg"
        firstButton={
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            href="/shipper/register"
          >
            S'inscrire
          </Button>
        }
      />

      <SectionImage
        imageLink="/shipper-platform.jpg"
        title="Business en un coup d'œil"
        description="Gérez tous vos envois passés, présents et futurs en un seul endroit. Maintenant, vous êtes toujours au courant. Et nous sommes toujours là pour vous."
        // button={
        //   <Button variant="contained" color="secondary">
        //     Get Started
        //   </Button>
        // }
        reverseOrder={false}
      />

      <HeroImage
        title="Oona vous aide à réduire vos frais d'expédition et à améliorer l'efficacité de votre chaîne d'approvisionnement"
        // description="Oona helps you lower your shipping costs, get your freight delivered on-time, and improve your supply chain efficiency."
        imageLink="/truck1.jpg"
        // firstButton={
        //   <Button variant="contained" color="secondary" component={Link}
        //   href="/shipper/register">
        //     S'inscrire
        //   </Button>
        // }
      />

      <SectionImage
        imageLink="/app-pic1.jpg"
        title="Inscrivez-vous gratuitement et commencez à expédier dès aujourd'hui"
        description="Gérez tous vos envois passés, présents et futurs en un seul endroit. Maintenant, vous êtes toujours au courant. Et nous sommes toujours là pour vous."
        button={
          <Button
            variant="inherit"
            color="secondary"
            component={Link}
            href="/shipper/register"
          >
            Get Started
          </Button>
        }
        backgroundColor="#F7F7F7"
        reverseOrder={true}
      />
      <Footer />
    </div>
  );
}
