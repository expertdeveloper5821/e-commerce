import Footer from "../features/Footer/Footer";
import Navbar from "../features/Navbar/Navbar";

import ProductList from "../features/product-list/components/ProductList";



function ProductListPage(){
    return(
        <div>
            <Navbar>
            </Navbar>

                <ProductList></ProductList>
            <Footer></Footer>
    </div>
        )
}
export default ProductListPage;