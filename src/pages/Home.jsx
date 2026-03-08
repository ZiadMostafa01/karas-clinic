import Landing from "../components/home/Landing";
import PetCareSection from "../components/home/PetCareSection";
import FeatureBar from "../components/home/FeatureBar";
import ChooseClinic from "../components/home/ChooseClinic";
import ServicesCards from "../components/ServicesCards";
import AppointmentSection from "../components/home/AppointmentSection";
import PhilosophySection from "../components/home/PhilosophySection";

function Home() {
  const homeServices = [
    {
      title: "Preventive and long term care",
      description:
        "Health planning that protects well being before problems begin.",
    },
    {
      title: "Diagnostics and decision making",
      description: "Clear assessments that support informed choices.",
    },
    {
      title: "Surgical and advanced care",
      description: "Precision-driven intervention when it is truly required.",
    },
    {
      title: "Pain management and recovery",
      description: "Supporting comfort, mobility, and dignity at every stage.",
    },
  ];
  return (
    <>
      <Landing />
      <FeatureBar />
      <ServicesCards
        title="This Is How We Care"
        subtitle="Our Areas of Care"
        data={homeServices}
      />
      <PetCareSection />
      <ChooseClinic />
      <PhilosophySection />
      <AppointmentSection />
    </>
  );
}
export default Home;
