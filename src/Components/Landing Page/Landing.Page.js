import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Invoice from "../Assets/Invoice.png";
import logo from "../Assets/newlogo.png";
import BILL from "../Assets/BILL.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import AboutCard from "../About/About.Card";
import About from "../About/About";
import Contact from "../Contact/Contact";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "scroll",
        // overflow: "hidden",
        // border: "1px solid red",
        height: "auto",
        width: "100vw",
        background: "whitesmoke",
        // background: "#D7E8EA",
        // color: "#073259",
        // color: "orange",
      }}
    >
      {/* <Container
        sx={{ height: "100%", width: "100%", border: "1px solid red" }}
      > */}
      <Box
        sx={{
          // borderRadius: "10px ",
          // background: "#D7E8EA",
          // background: "#191D2B",
          // border: "10px solid red",
          // border: "1px solid #073259",
          height: "95vh",
          width: "95vw",
        }}
      >
        <Box
          sx={{
            // border: "1px solid red",
            height: "20%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "15%",
              display: "flex",
              alignItems: "center",
              // background: "red",
              // cursor: "pointer",
              //   justifyContent: "center",
            }}
          >
            {/* <img src={logo} alt="" height={"60%"} /> */}
            <img
              src={BILL}
              alt="logo"
              height={"200px"}
              width={"200px"}
              // background={"red"}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "row",
              // border: "1px solid blue",
              height: "100%",
              width: "50%",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", cursor: "pointer" }}
              onClick={() => navigate("/Pricing")}
            >
              SUBSCRIPTION
            </Typography>
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", cursor: "pointer" }}
              onClick={() => navigate("/About")}
            >
              ABOUT US
            </Typography>
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", cursor: "pointer" }}
              onClick={() => navigate("/About")}
            >
              CONTACT US
            </Typography>
          </Box>
          <Box
            sx={{
              // border: "1px solid blue",
              height: "100%",
              width: "35%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Button
              sx={{ background: "#073259" }}
              variant="contained"
              onClick={() => navigate("/Login")}
            >
              Sign In
            </Button>
            <Button
              sx={{
                color: "#073259",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
              variant="outlined"
              onClick={() => navigate("/SignUp")}
            >
              Try It Free
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            // border: "1px solid blue",
            flexDirection: "column",
            height: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h2"
            // gutterBottom
            sx={{
              height: "30%",
              //   border: "1px solid black",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Manage Invoices and Payments
          </Typography>
          <Typography
            variant="h2"
            color="#8299A"
            gutterBottom
            sx={{
              height: "30%",
              //   border: "1px solid black",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "blue",
            }}
          >
            Your Business Digitally
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              height: "10%",
              width: "100%",
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircleIcon sx={{ marginRight: "1rem" }} />
              Automate Transactions
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircleIcon sx={{ marginRight: "1rem" }} />
              Control Payment Tempo
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircleIcon sx={{ marginRight: "1rem" }} />
              Track Business Payment
            </Typography>
          </Box>
          <Box
            sx={{
              // border: "1px solid blue",
              height: "60%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={Invoice} alt="" height={"95%"} width={"50%"} />
          </Box>
        </Box>
        <Box
          sx={{
            height: "auto",
            width: "100%",
            // background: "D7E8EA",
            // border: "1px solid #073259",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <Box sx={{ marginTop: "4rem", marginBottom: "2rem", width: "100%" }}>
            <Divider sx={{}}>
              <Chip
                sx={{
                  background: "#073259",
                  color: "white",
                  height: "5vh",
                  width: "20vw",
                  fontSize: "1rem",
                }}
                label="OUR SERVICES"
              />
            </Divider>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <AboutCard
              title="Invoice"
              body="Our web application can help you in creating detailed Invoice."
              demo="Demo"
              secondBody="Click on the button below to see a demo invoice."
            />
            <AboutCard
              title="Proforma Invoice"
              body="Our web application can help you in creating detailed Proforma Invoice."
              demo="Demo"
              secondBody="Click on the button below to see a demo Proforma Invoice."
            />
            <AboutCard
              title="Delivery Challan"
              body="Our web application can help you in creating detailed Delivery Challan."
              demo="Demo"
              secondBody="Click on the button below to see a demo Delivery Challan."
            />
          </Box>
        </Box>
        <Box
          sx={{
            // background: "#D7E8EA",
            // background: "#191D2B",
            // border: "10px solid red",
            // border: "1px solid #073259",
            height: "95vh",
            width: "95vw",
          }}
        >
          <Contact />
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
