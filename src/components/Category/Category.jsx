import { useParams } from 'react-router-dom';
import CategorySideBar from '../CategoryList/Buttons/CategorySideBar';
import ProductList from '../ProductList/ProductList';
import Navbar from '../Navbar/Navbar';

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
				</div>
			</div>
		</div>
	);
}

export default Category;
