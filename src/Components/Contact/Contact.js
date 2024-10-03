import {
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SendIcon from "@mui/icons-material/Send";
import logo from "../Assets/newlogo.png";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        // border: "1px solid red",
        height: "100%",
        width: "100%",
        // background: "#D7E8EA",
        // background: "#191D2B",
        color: "#073259",
      }}
    >
      <Box
        sx={{
          // border: "1px solid red",
          height: "25%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            // border: "1px solid red",
            height: "70%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={logo} alt="logo" height={"100%"} width={"35%"} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            // border: "1px solid red",
            height: "30%",
            width: "100%",
          }}
        >
          {" "}
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
      </Box>
      <Box
        sx={{
          // border: "1px solid black",
          height: "75%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            border: "1px solid #073259",
            height: "80%",
            width: "46%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            borderRadius: "10px",
          }}
        >
          <Box sx={{ height: "60%", width: "100%" }}>our photo</Box>
          <Box sx={{ height: "35%", width: "100%", marginLeft: "1rem" }}>
            <Typography align="left" variant="h6">
              Welcome to BillEazy, your one-stop destination for all your
              invoicing, proforma creation, delivery challan generation, and
              product tracking needs. We're here to simplify your business
              operations and empower you with efficient tools to streamline your
              workflow.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            height: "80%",
            width: "46%",
            background: "none",
            "&:hover": { boxShadow: "1px 1px 5px 0px #073259" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              height: "35%",
              width: "40vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // border: "1px solid red",
              justifyContent: "space-between",
              marginTop: "0.5rem",
            }}
          >
            <Divider textAlign="right" sx={{ color: "#073259", width: "100%" }}>
              GET IN TOUCH
            </Divider>
            <TextField
              required
              id="name"
              type="text"
              label="Your Name"
              placeholder="Your Name"
              fullWidth
              // color="#073259"
            />
            <TextField
              required
              id="email"
              type="email"
              label="Your Email"
              placeholder="Your Email"
              fullWidth
              // color="#073259"
            />
          </Box>

          <Box
            sx={{
              height: "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              // border: "2px solid blue",
              flexDirection: "row",
              height: "18vh",
              marginTop: "0.5rem",
              width: "40vw",
            }}
          >
            <TextField
              required
              id="message"
              type="text"
              label="Your Message"
              multiline
              placeholder="Your Message"
              rows={4}
              sx={{ width: "32vw", height: "8rem" }}
            />

            <Button
              variant="contained"
              sx={{
                background: "#073259",
                height: "2rem",
              }}
            >
              <SendIcon sx={{ marginRight: "1rem" }} />
              Send
            </Button>
          </Box>
          <Box
            sx={{
              // border: "1px solid red",
              height: "30%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Box
              sx={{
                height: "60%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Tooltip title="Facebook">
                <IconButton
                  onClick={() => navigate("/Invoicegenerator")}
                  variant="contained"
                  sx={{
                    backgroundColor: "#073259",
                    color: "gray",
                  }}
                >
                  <FacebookIcon fontSize="large"></FacebookIcon>
                </IconButton>
              </Tooltip>

              <Tooltip title="LinkedIn">
                <IconButton
                  onClick={() => navigate("/Invoicegenerator")}
                  variant="contained"
                  sx={{
                    backgroundColor: "#073259",
                    color: "gray",
                  }}
                >
                  <LinkedInIcon fontSize="large"></LinkedInIcon>
                </IconButton>
              </Tooltip>

              <Tooltip title="Github">
                <IconButton
                  onClick={() => navigate("/Invoicegenerator")}
                  variant="contained"
                  sx={{
                    backgroundColor: "#073259",
                    color: "gray",
                  }}
                >
                  <GitHubIcon fontSize="large"></GitHubIcon>
                </IconButton>
              </Tooltip>

              <Tooltip title="Instagram">
                <IconButton
                  onClick={() => navigate("/Invoicegenerator")}
                  variant="contained"
                  sx={{
                    backgroundColor: "#073259",
                    color: "gray",
                  }}
                >
                  <InstagramIcon fontSize="large"></InstagramIcon>
                </IconButton>
              </Tooltip>
            </Box>
            <Box
              sx={{
                height: "40%",
                // border: "1px solid black",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Divider sx={{ width: "35vw" }}>
                <Chip
                  onClick={() => navigate("/OurConditions")}
                  sx={{
                    background: "#073259",
                    // border: "1px solid red",
                    color: "white",
                    height: "4vh",
                    width: "18vw",
                    fontSize: "1rem",
                    color: "red",
                    // marginBottom: "1rem",
                  }}
                  label="Terms And Conditions"
                />
              </Divider>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
