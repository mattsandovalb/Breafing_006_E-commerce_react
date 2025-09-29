import './Footer.css';

function Footer() {
	return (
		<div>
			<div className="footer-content">
				<ul className="socials">
					<li>
						<button type="button" className="icon-btn">
							<i className="fa-brands fa-facebook"></i>
						</button>
					</li>
					<li>
						<button type="button" className="icon-btn">
							<i className="fa-brands fa-twitter"></i>
						</button>
					</li>
					<li>
						<button type="button" className="icon-btn">
							<i className="fa-brands fa-youtube"></i>
						</button>
					</li>
					<li>
						<button type="button" className="icon-btn">
							<i className="fa-brands fa-instagram-square"></i>
						</button>
					</li>
					<li>
						<button type="button" className="icon-btn">
							<i className="fa-solid fa-envelope"></i>
						</button>
					</li>
				</ul>
			</div>
			<div className="footer-bottom">
				<div className="col-md-2">
					<h6 className="text-uppercase font-weight-bold">
						<a href="/" className="footer-link-btn" target="_blank" rel="noopener noreferrer">
							Sobre Nosotros
						</a>
					</h6>
				</div>

				<div className="col-md-2">
					<h6 className="text-uppercase font-weight-bold">
						<a href="/" className="footer-link-btn" target="_blank" rel="noopener noreferrer">
							Medios de pago
						</a>
					</h6>
				</div>

				<div className="col-md-2">
					<h6 className="text-uppercase font-weight-bold">
						<a href="/" className="footer-link-btn" target="_blank" rel="noopener noreferrer">
							Politicos de cookies
						</a>
					</h6>
				</div>

				<div className="col-md-2">
					<h6 className="text-uppercase font-weight-bold">
						<a href="/" className="footer-link-btn" target="_blank" rel="noopener noreferrer">
							Politicos de Privacidad
						</a>
					</h6>
				</div>
			</div>
		</div>
	);
}

export default Footer;
