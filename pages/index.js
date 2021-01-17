import Head from "next/head";
import HomeContent from "../components/home_content";
import MainAppBar from "../components/main_appbar";
import Footer from "../components/footer.js";
// import "fontsource-roboto";

export default function Home() {
  return (
    <div>
      <MainAppBar />
      {/* <NewShipmentForm /> */}

      <HomeContent />
      <Footer/>

    </div>
  );
}
