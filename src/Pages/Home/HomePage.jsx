import HeroSection from '../../Components/HeroSection/HeroSection';
import NavBar from '../../Components/NavBar/NavBar';
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Why from '../Why/Why';
import ScrollToTop from 'react-scroll-to-top';

const HomePage = () => {
	return (
		<>
			<NavBar />
			<HeroSection />
			{/* <Why /> */}
			<Services />
			<Projects />
			<AboutUs />
			<Contact />
			<Footer />
			<ScrollToTop smooth />
		</>
	);
};

export default HomePage;
