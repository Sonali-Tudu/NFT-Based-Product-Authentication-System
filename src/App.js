import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import ContactUs from './components/ContactUs';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Manfacture from './components/Manfacture';
import AlreadyRegistered from './containers/AlreadyRegistered';
import NotRegistered from './containers/NotRegistered';
import Retailer from './components/Retailer'
import Customer from './components/Customer';
import Verified from './containers/Verified';
import NotVerified from './containers/NotVerified'




const router = createBrowserRouter([

  {
    path: "/",
    element: <><Navbar /><Home /></>,
  },
  {
    path: "/about",
    element: <><Navbar /><About /></>,
  },
  {
    path: "/ContactUs",
    element: <><Navbar /><ContactUs /></>,
  },
  {
    path: "/manfacture",
    element: <><Navbar /><Manfacture /></>,
  },
  {
    path: "/containers/AlreadyRegistered",
    element: <><Navbar /><AlreadyRegistered /></>,
  },
  {
    path: "/containers/NotRegistered",
    element: <><Navbar /><NotRegistered /></>,
  },
  {
    path: "/retailer",
    element: <><Navbar /><Retailer /></>,
  },
  {
    path: "/containers/Verified",
    element: <><Navbar /><Verified /></>,
  },
  {
    path: "/containers/NotVerified",
    element: <><Navbar /><NotVerified /></>,
  },
  {
    path: "/customer",
    element: <><Navbar /><Customer /></>,
  },
]);

function App() {
  return (
    <div className="App">

      <RouterProvider router={router} />



    </div>
  );
}

export default App;

  //createBrowserRouter,
  //RouterProvider,