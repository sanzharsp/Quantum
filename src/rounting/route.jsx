import {useRoutes} from "react-router-dom";
import NormalLoginForm from '../pages/login/login'
import Home from '../pages/home/home'
import Page404 from '../pages/404/404'
import QrCode from '../components/QrCode/qrCode'

const Routings = () => {
  
    let routes = useRoutes([
      { path: "/", element: <Home/> }, 
      { path: "*" , element: <Page404/>},
      { path: "login", element: <NormalLoginForm/> }, 
      { path: "QR", element:  <QrCode/> }, 
    
         
    ]);
    return routes;

}
export default Routings

