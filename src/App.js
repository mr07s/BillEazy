import { useState } from "react";
import "./App.css";
import { Box, DialogContent, Paper, Stepper } from "@mui/material";
// import Contact from "./Components/Contact/Contact";
// import { useNavigate } from "react-router-dom";
// import MobileNavabr from "./Components/Navigation Bar/Mobile.Navbar";
// import Navbar from "./Components/Navbar/Navbar";
// import TemporaryDrawer from "./Components/MuuiComponents/Drawer";
// import MiniDrawer from "./Components/MuuiComponents/Drawer";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import LandingPage from "./Components/Landing Page/Landing.Page";
import HorizontalStepper from "./Components/Stepper/Stepper";
import Contact from "./Components/Contact/Contact";
import PricingPayment from "./Components/Pricing/Pricing.Payment";
import PrivateRoute from "./PrivateRoute";
// require("dotenv").config();
import Invoice_Payment from "./Components/Invoice/payment/invoice.payment";
import About from "./Components/About/About";
import InvoiceViewer from "./Components/Invoice/invoice.viewer";

import Home from "./Components/Home/Home";
import SideBar from "./Components/Sidebar/sidebar.js";
import InsideMedicineContainer from "./Components/Medicine/InsideMedicineContainer";

import InvoiceList from "./Components/Invoice/invoice.list";
import Invoicecreator from "./Components/Invoice/invoice.creator";
import SignUp from "./Components/Auth/SignUp/SignUp";
import Login from "./Components/Auth/Login";
import Account from "./Components/Account/Account";
import Pricing from "./Components/Pricing/Pricing";
import OurConditions from "./Components/About/OurConditions";
import DeliveryChallanViewer from "./Components/Delivery Challan/Delivery.Challan.Viewer";
import ChallanList from "./Components/Delivery Challan/Delivery.Challan.List";
import DeliveryChallanCreater from "./Components/Delivery Challan/Delivery.Challan.creater";
import NotFound from "./Components/Helper/404page";
import LoadingPage from "./Components/Helper/Loading.Page";
import ProformaList from "./Components/Proforma/Proforma.List";
import ProformaCreater from "./Components/Proforma/Proforma.creater";
import ProformaViewer from "./Components/Proforma/Proforma.Viewer";
import Inventory from "./Components/MuuiComponents/Inventory Table/Inventory";
import AllDetails from "./Components/Auth/SignUp/All.Details";
import TabView from "./Components/Auth/SignUp/TabView";

function App() {
  const [sidebar, setSidebar] = useState(false);
  console.log(process.env.REACT_APP_MODE);
  console.log(process.env.REACT_APP_ENV);
  // console.log(sidebar);
  // const User = useSelector((state) => state.authReducer);
  // // console.log("Reducer user");
  // const { token, user } = User;
  // const [token] = useState(localStorage.getItem("token"));
  // console.log(token);
  // console.log(token, user);
  // console.log("User");
  // console.log(User);
  const User = useSelector((state) => state.authReducer);
  const { token, user } = User;
  console.log(token);
  console.log(user);
  const data = useSelector((state) => state.ProductReducer);
  console.log(data);
  // console.log(token);
  return (
    <div className="App">
      <Box
        sx={{
          // border: "1px solid red",
          display: "flex",
          flexDirection: "row",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {user ? (
          <Paper
            sx={{
              display: "flex",
              flexDirection: "row",
              // width: "15vw",
              width: `${sidebar ? "5vw" : "15vw"}`,
              // border: "1px solid green",
            }}
          >
            <SideBar sidebar={sidebar} setSidebar={setSidebar} />
            {/* <MiniDrawer /> */}
          </Paper>
        ) : (
          <></>
        )}
        <Box
          sx={{
            // width: `${sidebar ? "95vw" : "85vw"}`,
            width: "100vw",
            display: "flex",
            // pl: `${sidebar ? "15vw" : ""}`,
            // flexDirection: "column",
            justifyContent: "center",
            // alignItems: "center",
            // border: "10px solid green",
            // backgroundColor: "whitesmoke",

            background: "#D7E8EA",

            // backgroundColor: "rgb(214,214,214)",
          }}
        >
          <Routes>
            {/* Other Routes  */}
            {/* <Route
                path="/"
                element={token ? <InsideMedicineContainer /> : <LandingPage />}
              /> */}
            {/* <Route path="/home" element={<Home />}/> */}

            <Route path="/" element={<LandingPage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/About" element={<About />} />
            <Route path="/AllDetails" element={<AllDetails />} />

            {/* Private Routes */}
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="contact" element={<Contact />} />
              {/* invoice routes */}
              {/* <Route path="/InvoiceList" element={<InvoiceList />}/> */}
              <Route path="invoice" element={<InvoiceViewer />} />
              <Route path="invoicelist" element={<InvoiceList />} />
              <Route path="invoice/create" element={<Invoicecreator />} />
              <Route path="invoice/view" element={<InvoiceViewer />} />
              <Route path="invoice/payment/:id" element={<Invoice_Payment />} />

              {/* <Route path="About" element={<About />}/> */}
              <Route path="Account" element={<Account />} />
              {/* <Route path="Pricing" element={<Pricing />}/> */}
              <Route path="OurConditions" element={<OurConditions />} />
              {/* Delivery Challan routes */}
              <Route
                path="DeliveryChallan/create"
                element={<DeliveryChallanCreater />}
              />
              {/* <Route path="invoicelist" element={<InvoiceList />} /> */}
              <Route
                path="Proforma/create"
                element={<DeliveryChallanCreater />}
              />
              <Route
                path="DeliveryChallan/View"
                element={<DeliveryChallanViewer />}
              />
              <Route path="ChallanList" element={<ChallanList />} />

              {/* Proforma Routes */}
              <Route
                path="DeliveryChallan/create"
                element={<DeliveryChallanCreater />}
              />
              <Route path="ProformaCreater" element={<ProformaCreater />} />
              <Route path="Proforma/View" element={<ProformaViewer />} />
              <Route path="ProformaList" element={<ProformaList />} />

              {/* Auth Routes  */}

              <Route path="medicines" element={<InsideMedicineContainer />} />
              {/* <Route path="/home" element={<Home />}/> */}
              {/* <Route path="/Account" element={<Account />}/> */}
              <Route path="OurConditions" element={<OurConditions />} />
              <Route path="*" element={<NotFound />} />
              {/* <Route
                path="/HorizontalStepper"
                element={<HorizontalStepper />}
              /> */}

              {/* <Route
              path="/InsideMedicine"
              element={<InsideMedicineContainer />}
            /> */}
            </Route>
          </Routes>

          {/* <Navbar /> */}
          {/* <MobileNavabr /> */}
        </Box>
      </Box>
      <Toaster />
      <DialogContent>
        {/* {data?.data?.map((buyer) => (
          <Box> {buyer}</Box>
        ))} */}
      </DialogContent>
    </div>
  );
}

export default App;
