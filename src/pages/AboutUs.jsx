// src/pages/AboutUs.jsx
import AboutUsHero from "../components/aboutUs/AboutUsHero.jsx";
import BsfIntroSection from "../components/aboutUs/BsfIntroSection.jsx";
import OurCommitmentSection from "../components/aboutUs/OurCommitmentSection.jsx";
import TheDifferenceSection from "../components/aboutUs/TheDifferenceSection.jsx";
import ParallaxExperience from "../components/aboutUs/ParallaxExperience.jsx";

export default function AboutUs() {
    return (
        <>
            <AboutUsHero/>
            <BsfIntroSection/>
            <OurCommitmentSection/>
            <ParallaxExperience/>
            <TheDifferenceSection/>
        </>
    );
}
