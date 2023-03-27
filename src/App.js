import { Route, Routes } from "react-router-dom";
import NavBar from "./components/nav-bar/nav-bar";
import Checkout from "./pages/checkout/checkout";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
import SignIn from "./pages/sign-in/sign-in";


const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>

    </>

  );
};

export default App;