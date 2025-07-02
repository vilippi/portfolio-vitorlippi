import AboutSection from "../components/home/AboutSection"
import ContactSection from "../components/home/ContactSection"
import HeroSection from "../components/home/HeroSection"
import ProjectSection from "../components/home/ProjectSection"
import SkillSection from "../components/home/SkillSection"
import TestSection from "../components/home/TestSection"

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center 
            bg-gradient-to-br from-white to-gray-400 
            dark:from-gray-900 dark:to-gray-900 
            text-black dark:text-white 
            transition-colors duration-300"
        >
            <HeroSection />
            <AboutSection />
            <SkillSection />
            <ProjectSection />
            <ContactSection />
        </div>
    )
}

export default Home