import { useEffect, useState } from 'react';
import { ScaleLoader } from 'react-spinners';
import HomePage from './Pages/Home/HomePage';
import './App.css';

const App = () => {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);
	return (
		<div>
			{loading ? (
				<div className="loader">
					<ScaleLoader
						color={'#1b0d35'}
						height={30}
						width={3}
						speedMultiplier={1}
					/>
				</div>
			) : (
				<HomePage />
			)}
		</div>
	);
};

export default App;
