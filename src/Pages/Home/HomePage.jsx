import HeroSection from '../../Components/HeroSection/HeroSection';
import NavBar from '../../Components/navbar/navbar';
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';

const HomePage = () => {
	return (
		<>
			<NavBar />
			<HeroSection />
			<Services />
			<Projects />
			<AboutUs />
			<Contact />
			<Footer />
		</>
	);
};

export default HomePage;
