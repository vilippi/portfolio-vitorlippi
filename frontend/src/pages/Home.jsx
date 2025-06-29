import AboutSection from "../components/home/AboutSection"
import HeroSection from "../components/home/HeroSection"
import TestSection from "../components/home/TestSection"

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center 
            bg-gradient-to-br from-white to-gray-400 
            dark:from-gray-900 dark:to-gray-700 
            text-black dark:text-white 
            transition-colors duration-300"
        >
            <HeroSection />
            <AboutSection />
            <TestSection />
        </div>
    )
}

export default Home