import { useParams } from 'react-router-dom';
import CategorySideBar from '../CategoryList/CategorySideBar';
import ProductList from '../ProductList/ProductList';
import Navbar from '../Navbar/Navbar';
import ScrollToTop from './Scrollupbtn';

function Category() {
	const { id } = useParams();

	return (
		<div>
			<Navbar />
			<div className="row">
				<div className="col-sm-4 col-md-2 col-lg-2">
					<CategorySideBar />
				</div>
				<div className="col">
					<ProductList query={id}></ProductList>
					<ScrollToTop />
				</div>
			</div>
		</div>
	);
}

export default Category;
