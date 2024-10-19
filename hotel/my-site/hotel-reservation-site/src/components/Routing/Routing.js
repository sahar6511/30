import React from "react";
import Home from "../Home/Home";
import OnlineReservasion from "../OnlineReservasion/OnlineReservasion";
// import Facilities from "../Facilities/Facilities";
import ContactUsMore from "../ContactUsMore/ContactUsMore";
import ManagerPannel from "../ManagerPannel/ManagerPannel";
import CompleteInfo from "../CompleteInfo/CompleteInfo";
import NotFound from "../NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
import TrakingReserve from "../TrakingReserve/TrakingReserve";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/onlinereservation" element={<OnlineReservasion />}></Route>
        <Route path="/CompleteInfo" element={<CompleteInfo />}></Route>
        <Route path="/trakingreserve" element={<TrakingReserve />}></Route>
        <Route path="/managerpannel" element={<ManagerPannel />}></Route>
        <Route path="/contactusmore" element={<ContactUsMore />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default Routing;
