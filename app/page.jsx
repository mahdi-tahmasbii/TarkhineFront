import ExploreTarkhineh from "@/components/Landing/ExploreTarkhineh";
import LandingBranchSection from "@/components/Landing/LandingBranchSection";
import { LandingCarousel } from "@/components/Landing/LandingCarousel";
import LandingMenu from "@/components/Landing/LandingMenu";

const Home = () => {
  return (
    <>
      <LandingCarousel />
      <LandingMenu />
      <LandingBranchSection />
      <ExploreTarkhineh />
    </>
  );
};

export default Home;
