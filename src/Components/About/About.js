import { Box, Button, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";
import AboutCard from "./About.Card";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import NewReleasesIcon from "@mui/icons-material/NewReleases";

const About = ({ title, body, demo }) => {
  const navigate = useNavigate();
  return (
    <Box
      classname="main"
      sx={{
        height: "100vh",
        width: "85vw",
        display: "flex",
        flexDirection: "column",
        // border: "1px solid red",
      }}
    >
      <Box classname="header" sx={{ height: "5vh", width: "85vw" }}></Box>

      <Box sx={{ height: "50vh", width: "85vw" }}>
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

        <Box
          classname="body"
          sx={{
            height: "40vh",
            width: "85vw",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            // border: "1px solid red",
            justifyContent: "space-around",
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
      <Box>
        <Divider>
          <Chip
            sx={{
              background: "#073259",
              color: "white",
              height: "5vh",
              width: "30vw",
              fontSize: "1rem",
              // marginBottom: "1rem",
            }}
            label="FOR ANY QUARIES PLEASE CONTACT US"
          />
        </Divider>
        <Box
          classname="footer"
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "39vh",
            justifyContent: "space-evenly",
            marginTop: "1rem",
            width: "85vw",
            // border: "1px solid #073259",
          }}
        >
          <Box classname="footer_left" sx={{ height: "100vh", width: "30vw" }}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // border: "1px solid blue",

                  flexDirection: "column",
                  height: "20vh",
                  width: "30vw",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: " space-around",
                    alignItems: "center",
                    color: "#073259",
                  }}
                >
                  <LocationOnIcon
                    sx={{ color: "#073259", marginRight: "1rem" }}
                  />
                  BERHAMPORE, MURSHIDABAD
                </Typography>

                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: " space-around",
                    alignItems: "center",
                    color: "#073259",
                  }}
                >
                  <EmailIcon sx={{ color: "#073259", marginRight: "1rem" }} />
                  billeazy28@gmail.com
                </Typography>

                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    color: "#073259",
                  }}
                >
                  <PhoneIcon sx={{ color: "#073259", marginRight: "1rem" }} />
                  7797004695
                </Typography>
              </Box>
              <Box
                sx={{
                  // border: "1px solid black",
                  height: "15vh",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    // border: "1px solid red",
                    height: "11vh",
                    width: "30vw",
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
                <Box>
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

          <Box classname="footer_right" sx={{ height: "100vh", width: "45vw" }}>
            <Divider textAlign="right" sx={{ color: "#073259" }}>
              GET IN TOUCH
            </Divider>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // border: "1px solid blue",
                height: "36vh",
                alignItems: "center",
                // justifyContent: "space-evenly",
              }}
            >
              <Box
                sx={{
                  height: "16vh",
                  width: "40vw",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  // border: "1px solid red",
                  justifyContent: "space-between",
                  marginTop: "0.5rem",
                }}
              >
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
                  height: "",
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
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
