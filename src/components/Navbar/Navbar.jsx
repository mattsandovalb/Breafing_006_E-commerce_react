import { useState, useEffect } from 'react';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ search }) {
	let [collapse, setCcollapse] = useState(true);
	let [query, setQuery] = useState('');
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		const cart = JSON.parse(localStorage.getItem('cart') || '[]');
		setCartCount(cart.length);
	}, []);
	function setCheck() {
		setCcollapse(!collapse);
	}

	let findItem = () => {
		window.open('/SearchPage/' + query, '_self');
	};
	const onFormSubmit = (e) => {
		e.preventDefault();
		findItem();
	};
	return (
		<div className="centered">
			<nav className="navbar navbar-expand-lg ">
				<div className="container-logo">
					<Link to="/">
						<img
							className="img-fluid"
							src={'../images/logo.png'}
							width="80"
							height="80"
							alt="Logo supermercado Ralphs"
						></img>
					</Link>
				</div>
				<form className="d-flex" role="search" onSubmit={onFormSubmit}>
					<input
						className="form-control"
						type="search"
						placeholder="Buscar productos"
						aria-label="Search"
						defaultValue={search}
						onChange={(evento) => setQuery(evento.target.value)}
					></input>
					<button type="button" className="btn btn-outline-success" onClick={findItem}>
						<i className="fa-solid fa-search"></i>
					</button>
				</form>
				<div className="nav-item position-relative">
					<Link className="nav-link-icon px-2" to="/Cart">
						<i className="fa-solid fa-cart-shopping"></i>
						{cartCount > 0 && (
							<span
								style={{
									position: 'absolute',
									top: '-6px',
									right: '-6px',
									background: '#079F16',
									color: '#fff',
									borderRadius: '50%',
									fontSize: '0.75rem',
									padding: '2px 6px',
									fontWeight: 600,
									minWidth: '22px',
									textAlign: 'center',
									boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
								}}
							>
								{cartCount}
							</span>
						)}
					</Link>
				</div>
				<div className="nav-item">
					<Link className="nav-link-icon px-2" to="/Login">
						<i className="fa-solid fa-user"></i>
					</Link>
				</div>

				<button
					onClick={setCheck}
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon">
						<i className="fa-solid fa-bars"></i>
					</span>
				</button>
				<div
					id="navbarSupportedContent"
					className={`navbar-collapse ${collapse ? 'collapse' : ''}`}
				>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link className="nav-link pl-4" to="/">
								Inicio
							</Link>
						</li>
						<li className="nav-item active">
							<Link className="nav-link pl-4" to="/Category">
								Categorías<span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link pl-4" to="/Nosotros">
								Nosotros
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link pl-4" to="/Form">
								Contacto
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
