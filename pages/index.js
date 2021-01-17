import HomeContent from "../components/home_content";
import MainAppBar from "../components/main_appbar";
import Footer from "../components/footer.js";

export default function Home() {
  return (
    <div>
      <MainAppBar />
      <HomeContent />
      <Footer />
    </div>
  );
}
