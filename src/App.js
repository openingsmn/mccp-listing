import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import LogIn from "./components/forms/logIn";
import SignUp from "./components/forms/SignUp";
import { Route, Routes} from 'react-router-dom';
import  Home   from "./pages/Home";
import ChangePassword from "./components/forms/changePassword";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import VerifyToChange from "./components/forms/enterPassword";
import AllListing from "./pages/AllListing";
import AdvancedSearch from "./pages/AdvancedSearch";
import Navbar from "./components/Navbar/Navbar";
import UserProfile from "./pages/UserProfile";
// import Footer from "./components/Footer/Footer";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact";
import "./App.css";
import "./style.css";

function App() {

  

  return (<>
       <Navbar />
        <Routes>
          <Route path='/sign-in' element={<LogIn></LogIn>}/>
            <Route path="/alllisting" element={<AllListing />} />
          <Route path='/sign-up' element={<SignUp></SignUp>}/>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/Contact' element={<Contact></Contact>}/>
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/AdvancedSearch" element={<AdvancedSearch />} />
          <Route path='/authorize' element={<VerifyToChange></VerifyToChange>}></Route>
          <Route path='/changepassword' element={<ChangePassword></ChangePassword>}/>
          <Route path="/:catchAll" element={<PageNotFound></PageNotFound>}/>
        </Routes>
        <Footer />
        </>
    );
  }
  
  export default App;