import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Home from "./component/Home";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Introduce from "./component/Introduce";
import News from "./component/News";
import Franchise from "./component/Franchise";
import Order from "./home/Order";
import System from "./home/System";
import Menu from "./home/Menu";
import Detail from "../src/home/Detail";
import Add_book from "./component/Add_book";
import Add_review from "./component/Add_review";
import Cart from "./component/Cart";
import New from "../src/home/New";
import Add_user from "./component/Add_user";
import ThankYou from "./component/Thank_you";

function App() {
  return (
   <>
     <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/introduce" element={<Introduce />}></Route>
       <Route path="/news" element={<News />}></Route>
       <Route path="/franchise" element={<Franchise />}></Route>
       <Route path="/order" element={<Order />}></Route>
       <Route path="/menu" element={<Menu />}></Route>
       <Route path="/system" element={<System />}></Route>
       <Route path="/detail/:id" element={<Detail />}></Route>
       <Route path="/add_book" element={<Add_book />}></Route>
       <Route path="/add_user" element={<Add_user />}></Route>
       <Route path="/add_reviews" element={<Add_review />}></Route>
       <Route path="/cart" element={<Cart />}></Route>
       <Route path="/new/:id" element={<New />}></Route>
       <Route path="/thank-you" element={<ThankYou/>}></Route>
      </Routes>
   </>
  );
}

export default App;