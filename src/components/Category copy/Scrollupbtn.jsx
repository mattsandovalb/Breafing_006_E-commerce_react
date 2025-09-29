import { useState, useEffect } from 'react';

const ScrollToTop = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 1) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);

	let llevaMeArribeRapido = () => {};
	return (
		<div className="button-thing">
			<button>
				<div className="arrow-container">
					<i id="arrow-up" className="fa-solid fa-arrow-up"></i>
				</div>
			</button>
		</div>
	);
};

export default ScrollToTop;
