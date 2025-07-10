// src/pages/Home.jsx
import HeroSlider from "../components/HeroSlider.jsx";
import AboutUs from '../components/AboutUs';
import HowItWorks from "../components/HowItWorks.jsx";
import NewLifeSection from "../components/NewLifeSection.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import HelpSection from "../components/HelpSection.jsx";
import MapSection from "../components/MapSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import OverlayInfoCard from "../components/OverlayInfoCard.jsx";


export default function Home() {
    return (
        <>
            <HeroSlider/>
            <AboutUs/>
            <HowItWorks/>
            <NewLifeSection/>
            <WhyChooseUs/>
            <HelpSection/>
            <TestimonialsSection/>
            <OverlayInfoCard/>
            <MapSection/>
        </>
    );
}