import React, { useState } from "react";
// import "./Navbar.css";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import EventNoteIcon from "@mui/icons-material/EventNote";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ReceiptIcon from "@mui/icons-material/Receipt";
import DescriptionIcon from "@mui/icons-material/Description";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";
import { useDispatch, useSelector } from "react-redux";
// import logo from "../Assets/bill logo.png";
import BILL from "../Assets/Bill Eazy 3.png";

const Sidebar = (props) => {
  const { sidebar, setSidebar } = props;
  const User = useSelector((state) => state.authReducer);
  const { token, user } = User;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlelogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch({ type: "RemoveAuth" });
    navigate("/");
    // window.addEventListener("load");
  };
  return (
    <>
      {sidebar ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "center",
            // border: "1px solid blue",
            width: "5vw",
            height: "100vh",
            background: "#062541",
          }}
        >
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // position: "absolute",
              color: "white",
            }}
            className="menuOpenBtn btn"
            onClick={(e) => setSidebar(false)}
          >
            <DoubleArrowIcon fontSize="large" />
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              // border: "1px solid red",
              paddingTop: "2rem",
              height: "50vh",
              justifyContent: "space-evenly",
            }}
          >
            <Tooltip title="Inventory">
              <IconButton
                onClick={() => navigate("/medicines")}
                sx={{
                  backgroundColor: "#073259",
                  color: "white",
                }}
              >
                <HomeIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Invoice">
              <IconButton
                onClick={() => navigate("/invoiceList")}
                sx={{
                  backgroundColor: "#073259",
                  color: "white",
                }}
              >
                <ReceiptIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Proforma Invoice">
              <IconButton
                onClick={() => navigate("/proformaList")}
                variant="contained"
                sx={{
                  backgroundColor: "#073259",
                  color: "white",
                }}
              >
                <DescriptionIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delivery Challan">
              <IconButton
                onClick={() => navigate("/ChallanList")}
                variant="contained"
                sx={{
                  backgroundColor: "#073259",
                  color: "white",
                }}
              >
                <EventNoteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Account">
              <IconButton
                onClick={() => navigate("/Account")}
                variant="contained"
                sx={{
                  backgroundColor: "#073259",
                  color: "white",
                }}
              >
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Box
            sx={{
              height: "35vh",
              // border: "2px solid red",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Tooltip title="About Us">
              <IconButton
                onClick={() => navigate("/About")}
                variant="contained"
                sx={{
                  display: "flex",
                  marginTop: "5rem",
                  backgroundColor: "#073259",
                  color: "white",
                }}
              >
                <InfoIcon />
              </IconButton>
            </Tooltip>

            {user ? (
              <Tooltip title="Log Out">
                <IconButton
                  onClick={handlelogOut}
                  variant="contained"
                  sx={{
                    backgroundColor: "#073259",
                    color: "white",
                    display: "flex",
                    // alignItems: "flex-end",
                    marginTop: "1rem",
                  }}
                >
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            ) : (
              <></>
            )}
          </Box>
        </Box>
      ) : (
        <Box>
          {/* <Button
            variant="contained"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              position: "absolute",
            }}
            className="menuCloseBtn btn"
            onClick={(e) => setSidebar(0)}
          >
            <MenuOpenIcon />
          </Button> */}
        </Box>
      )}
      {!sidebar ? (
        <Box
          sx={{
            position: "absolute",
            // left: 2,
            // bottom: "2rem",
            // background: "#191D2B",
            background: "#062541",
            width: "15vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            // border: "1px solid blue",
          }}
        >
          {/* <img src="" alt="" /> */}
          <Box
            sx={{
              // border: "1px solid red",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              width: "15vw",
              height: "15vh",
              color: "white",
            }}
          >
            <img src={BILL} height={"150%"} width={"100%"} alt="" />
            <Button
              sx={{ color: "white" }}
              className="menuCloseBtn btn"
              onClick={(e) => setSidebar(true)}
            >
              <MenuOpenIcon fontSize="large" />
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width: "15vw",
              // border: "1px solid red",
              paddingTop: "2rem",
              height: "50vh",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              variant="contained"
              onClick={() => navigate("/medicines")}
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "15vw",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "#073259",
                color: "white",
              }}
            >
              <HomeIcon sx={{ marginLeft: "1rem", marginRight: "1rem" }} />
              Inventory
            </Button>

            <Button
              variant="contained"
              onClick={() => navigate("/invoiceList")}
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "15vw",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "#073259",
                color: "white",
              }}
            >
              <ReceiptIcon sx={{ marginLeft: "1rem", marginRight: "1rem" }} />
              Invoice
            </Button>

            <Button
              // variant="contained"
              onClick={() => navigate("/ProformaList")}
              variant="contained"
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "15vw",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "#073259",
                color: "white",
              }}
            >
              <DescriptionIcon
                sx={{ marginLeft: "1rem", marginRight: "1rem" }}
              />
              Proforma Invoice
            </Button>

            <Button
              variant="contained"
              onClick={() => navigate("/ChallanList")}
              // variant="contained"
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "15vw",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "#073259",
                color: "white",
              }}
            >
              <EventNoteIcon sx={{ marginLeft: "1rem", marginRight: "1rem" }} />
              Delivery Challan
            </Button>

            <Button
              variant="contained"
              onClick={() => navigate("/Account")}
              // variant="contained"
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "15vw",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "#073259",
                color: "white",
              }}
            >
              <AccountCircleIcon
                sx={{ marginLeft: "1rem", marginRight: "1rem" }}
              />
              Account
            </Button>
          </Box>
          <Box
            sx={{
              height: "35vh",
              // border: "2px solid red",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Button
              variant="contained"
              onClick={() => navigate("/About")}
              // variant="contained"
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "15vw",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "#073259",
                color: "white",
              }}
            >
              <InfoIcon sx={{ marginLeft: "1rem", marginRight: "1rem" }} />
              About Us
            </Button>

            {user ? (
              <Button
                variant="contained"
                onClick={handlelogOut}
                // variant="contained"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "15vw",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  backgroundColor: "#073259",
                  color: "white",
                }}
              >
                <LogoutIcon sx={{ marginLeft: "1rem", marginRight: "1rem" }} />
                Log Out
              </Button>
            ) : (
              <></>
            )}
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default Sidebar;
