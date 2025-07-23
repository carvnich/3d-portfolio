import NavBar from "./components/NavBar.jsx";
import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureCardsSection from "./sections/FeatureCardsSection.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStackSection from "./sections/TechStackSection.jsx";
import TestimonialsSection from "./sections/TestimonialsSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";

const App = () => {
    return (
        <>
            <NavBar/>
            <Hero/>
            <ShowcaseSection/>
            <LogoSection/>
            <FeatureCardsSection/>
            <ExperienceSection/>
            <TechStackSection/>
            <TestimonialsSection/>
            <ContactSection/>
        </>
    );
};

export default App;
