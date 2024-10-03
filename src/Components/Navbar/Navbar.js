import React, { useState } from "react";
// import "./Navbar.css";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Box from "@mui/material/Box";

const Navbar = () => {
  const [navbar, setNavbar] = useState(0);

  const navigate = useNavigate();
  return (
    <>
      {navbar === 0 ? (
        <Button
          sx={{ position: "absolute", left: "7rem", bottom: "2rem" }}
          className="menuOpenBtn btn"
          onClick={(e) => setNavbar(1)}
        >
          <MenuIcon />
          Menu
        </Button>
      ) : (
        <Button
          sx={{ position: "absolute", left: "7rem", bottom: "2rem" }}
          className="menuCloseBtn btn"
          onClick={(e) => setNavbar(0)}
        >
          <MenuOpenIcon />
        </Button>
      )}
      {navbar ? (
        <Box
          sx={{
            position: "absolute",
            // left: 2,
            bottom: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "80vw",
              // border: "1px solid black",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                // border: "2px solid red",
                width: "20vw",
              }}
            >
              <Button
                variant="contained"
                color="success"
                onClick={() => navigate("/")}
              >
                Sheerina Enterprise
              </Button>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "60vw",
                  // border: "1px solid black",
                  justifyContent: "space-evenly",
                }}
              >
                <Button
                  onClick={() => navigate("/invoiceList")}
                  variant="contained"
                  color="primary"
                >
                  Invoice
                </Button>
                <Button
                  onClick={() => navigate("/invoiceList")}
                  variant="contained"
                  color="primary"
                >
                  Challan
                </Button>
                <Button
                  onClick={() => navigate("/invoiceList")}
                  variant="contained"
                  color="primary"
                >
                  Proforma
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
