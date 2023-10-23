import NavBarLogin from "./Components/Utility/NavbarLogin";
import HomePage from "./Pages/Home/Homepage";
import Footer from './Components/Utility/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPage from "./Components/Auth/LoginPage";
import RegisterPage from "./Components/Auth/Register";
import AllBrandPage from "./Pages/Brand/AllBrandPage";
import ShopProductPage from "./Pages/Product/ShopProduct";
import AllCategoryPages from "./Pages/Category/AllCategoryPages";
import Context from "./Components/context/shopping-context";
import ProductDetailsPage from "./Pages/Product/productDetailspage";
import CartPage from "./Pages/Cart/cartPage";
import ChosePayMethod from "./Pages/ChickOut/chosePayMethod";

function App() {

  return (
    <div>
      <NavBarLogin/>   
    <Context>

        <BrowserRouter>
            <Routes>

              <Route  index element ={<HomePage/>}/>
              <Route  path="/login" element ={<LoginPage/>}/>
              <Route  path="/cart" element ={<CartPage/>}/>
              <Route  path="/register" element ={<RegisterPage/>}/>
              <Route  path="/AllCategory" element ={<AllCategoryPages/>}/>
              <Route  path="/AllBrands" element ={<AllBrandPage/>}/>
              <Route  path="/AllProduct" element ={<ShopProductPage/>}/>
              <Route  path="/AllProduct/:id" element ={<ProductDetailsPage/>}/>
              <Route  path="/order/paymethoud" element ={<ChosePayMethod/>}/>
          
            </Routes>
        </BrowserRouter>

        
    </Context>

      <Footer/>

      
    </div>
  )
}

export default App;
