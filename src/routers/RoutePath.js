import { Route, Routes } from "react-router-dom"; 
import Ads from "../pages/Ads";
import Home from "../pages/Home";


const RoutePath = () => {
  return (
<Routes> 
    <Route path="/" element={<Home />} />
    <Route path="/reklam-ver" element={<Ads />} />
</Routes>
  );
};

export default RoutePath;
