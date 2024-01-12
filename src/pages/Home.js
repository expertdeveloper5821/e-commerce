import Navbar from "../features/Navbar/Navbar";
import BannerPage from "./BannerPage";
import HomeCarosal from "../features/auth/Components/HomeCarosal/HomeCarosal";
import { mens } from "../data/mens";
import { women } from "../data/women";
import { electronics } from "../data/electronics";
import { watch } from "../data/watch";
import Footer from "../features/Footer/Footer";
function Home(){
    return(
        <div>
            <Navbar>
            </Navbar>
            <BannerPage></BannerPage>
                <div className="space-y-12 py-0 flex flex-col justify-center px-5 lg:px-10">
                <HomeCarosal data={mens} sectionName={"Mens"}/>
                <HomeCarosal data={women} sectionName={"Womens"}/>
                <HomeCarosal data={electronics} sectionName={"Electronics"}/>
                <HomeCarosal data={watch} sectionName={"Assesories"}/>
                </div>

            <Footer></Footer>
    </div>
        )
}
export default Home;