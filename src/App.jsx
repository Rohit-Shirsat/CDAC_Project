import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Base from "./Pages/Base";
import React from "react";
import { Routes, Route } from 'react-router-dom';
import AdminHomePage from "./Pages/AdminHomePage";
import Vendor from "./Pages/Vendor";
import DeliverPerson from "./Pages/DeliverPerson";
import AdminProfile from "./Pages/AdminProfile";
import OrderHistory from "./Pages/OrderHistory";
import FeedBack from "./Pages/FeedBack";




function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Base/>} />
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/AdminHomePage" element={<AdminHomePage/>}/>
      <Route path="/Vendor" element={<Vendor/>}/>
      <Route path="/DeliverPerson" element={<DeliverPerson/>}/>
      <Route path="/AdminProfile" element={<AdminProfile/>}/>
      <Route path="/OrderHistory" element={<OrderHistory/>}/>
      <Route path="/FeedBack" element={<FeedBack/>}/>
     </Routes>
    </div>
  );
}
export default App;
