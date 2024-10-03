import * as React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import Box from "@mui/material/Box";
import { Button, Divider, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Details from "../../Account/Details";
import logo from "../../Assets/icon.png";
import { useNavigate } from "react-router-dom";

export default function AllDetails() {
  const navigate = useNavigate();
  const Completionist = () => <span>Your Subscription is over</span>;

  // const SubscriptionEnd = new Date(30);
  // const currentDate = new Date();
  // const remainingTime = (SubscriptionEnd - currentDate) * 24 * 60 * 60;

  return (
    <Box
      sx={{
        display: "flex",
        // alignItems: "center",
        alignItems: "flex-end",
        justifyContent: "center",
        //   flexWrap: 'wrap',
        //   '& > :not(style)': {
        //     m: 1,
        //     width: 128,
        //     height: 128,
        //   },
        height: "100vh",
        width: "85vw",
        // border: "1px solid red",
      }}
    >
      <Paper elevation={16} sx={{ height: "90%", width: "90%" }}>
        <Box
          sx={{
            border: "1.5px solid #073259",
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              //   border: "1px solid red",
              height: "10%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Divider
              fullWidth
              textAlign="right"
              sx={{ width: "100%", color: "#073259" }}
            >
              Welcome to BillEazy
            </Divider>
          </Box>

          <Box
            sx={{
              // border: "1px solid red",
              height: "90%",
              width: "100%",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-around",
              flexDirection: "row",
              mt: "2rem",
            }}
          >
            <Box
              sx={{
                // border: "1px solid red",
                height: "100%",
                width: "25%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "column",
                mt: "2rem",
              }}
            >
              <Box
                sx={{
                  // border: "1px solid red",
                  height: "60%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  flexDirection: "column",
                  // mt: "2rem",
                }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    border: "1px solid #073259",
                    height: "75%",
                    width: "80%",
                    borderRadius: "5px",
                    //   mt: "2rem",
                  }}
                >
                  <img src={logo} height={"100%"} width={"100%"} alt="" />
                </Paper>
                <Box
                  sx={{
                    height: "10%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{ width: "60%", background: "#073259" }}
                  >
                    Upload
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  // border: "1px solid red",
                  height: "35%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  flexDirection: "column",
                  mt: "2rem",
                }}
              >
                {/* <Paper elevation={6} sx={{ height: "90%", width: "90%" }}>
                  <Typography
                    align="center"
                    variant="h6"
                    sx={{ color: "#073259", height: "10%" }}
                  >
                    Current Plan - 250
                  </Typography>
                  <Box
                    sx={{
                      height: "80%",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Countdown date={Date.now() + 500000}>
                      <Completionist />
                    </Countdown>
                    <Button variant="contained" sx={{ mt: "1rem" }}>
                      Renew
                    </Button>
                  </Box>
                </Paper> */}
              </Box>
            </Box>
            <Box
              sx={{
                height: "100%",
                width: "65%",
                // border: "1px solid red",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexDirection: "column",
              }}
            >
              <Divider
                fullWidth
                textAlign="left"
                sx={{ width: "100%", color: "#073259" }}
              >
                Personal Details
              </Divider>
              <Box
                sx={{
                  // border: "1px solid black",
                  height: "10%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                }}
              >
                <TextField
                  label="Name"
                  variant="outlined"
                  sx={{ width: "32%" }}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  sx={{ width: "33%" }}
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  sx={{ width: "30%" }}
                />
              </Box>
              <Divider
                fullWidth
                textAlign="left"
                sx={{ width: "100%", color: "#073259" }}
              >
                Organisation Details
              </Divider>
              <Box
                sx={{
                  // border: "1px solid black",
                  height: "38%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    // border: "1px solid red",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    flexDirection: "row",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      width: "50%",
                      flexDirection: "column",
                      height: "100%",
                      // border: "1px solid blue",
                    }}
                  >
                    <TextField
                      label="Name"
                      variant="outlined"
                      sx={{ width: "100%" }}
                    />
                    <TextField
                      label="Email"
                      variant="outlined"
                      sx={{ width: "100%" }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        // border: "1px solid red",
                      }}
                    >
                      <TextField
                        label="Mobile No."
                        variant="outlined"
                        sx={{ width: "49%" }}
                      />
                      <TextField
                        label="Pincode"
                        variant="outlined"
                        sx={{ width: "48.5%" }}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "46%",
                      height: "100%",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      // border: "1px solid blue",
                    }}
                  >
                    <TextField
                      multiline
                      rows={4}
                      fullWidth
                      label="Address"
                      variant="outlined"
                    />
                    <TextField
                      label="GSTIN No."
                      variant="outlined"
                      sx={{ width: "100%" }}
                    />
                  </Box>
                </Box>
              </Box>
              <Divider
                fullWidth
                textAlign="left"
                sx={{ width: "100%", color: "#073259" }}
              >
                Bank Details
              </Divider>
              <Box
                sx={{
                  // border: "1px solid blue",
                  height: "25%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <TextField
                    label="Account Holder"
                    variant="outlined"
                    sx={{ width: "48.5%" }}
                  />
                  <TextField
                    label="Bank Nmae"
                    variant="outlined"
                    sx={{ width: "48%" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <TextField
                    label="Account Number"
                    variant="outlined"
                    sx={{ width: "30%" }}
                  />
                  <TextField
                    label="Branch Nmae"
                    variant="outlined"
                    sx={{ width: "33%" }}
                  />
                  <TextField
                    label="IFSC Code"
                    variant="outlined"
                    sx={{ width: "32%" }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  // border: "1px solid blue",
                  height: "10%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                }}
              >
                <Button
                  variant="contained"
                  sx={{ background: "#073259", mr: "5rem", width: "20%" }}
                  // onClick={() => navigate("/Pricing")}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
