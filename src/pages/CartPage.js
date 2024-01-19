import Cart from "../features/cart/Cart";
import Footer from "../features/Footer/Footer";
import Navbar from "../features/Navbar/Navbar";

function  CartPage(){
    return(
        <div>
            <Navbar> </Navbar>
            <Cart></Cart>
         
            <Footer></Footer>
        </div>

    )
}
export default CartPage;