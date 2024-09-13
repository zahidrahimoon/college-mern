import { useState, useEffect } from 'react';
import Hero from "../components/Hero";
import History from '../components/History';
import ChooseField from '../components/ChooseField';
import StateSection from '../components/StateSection';
import SalientFeatuesSection from '../components/SalientFeaturesSection';
import FAQ from '../components/FAQ';
import MilestoneCarousal from '../components/MilestoneCarousel';
import Footer from '../components/Footer';
import EventPopup from "../components/EventPopup";

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  useEffect(() => {
    // Set a timer to open the popup after 30 seconds
    const timer = setTimeout(() => {
      openPopup();
    }, 3000); // 30000 milliseconds = 30 seconds

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Hero />
      <EventPopup isOpen={isPopupOpen} onClose={closePopup} />
      <History />
      <ChooseField />
      <StateSection />
      <SalientFeatuesSection />
      <FAQ />
      <MilestoneCarousal />
      <Footer />
    </>
  );
}

export default Home;
