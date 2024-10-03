import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import qrcode from "../../../Assets/qr.jpg";
import PlanSelect from "./plan.select";
import PhotoUploader from "../../../Helper/photo.uploader";
export default function SubsDetails(props) {
  const navigate = useNavigate();
  const {
    couponCode,
    setCouponCode,
    plan,
    setPlan,
    formImg,
    setFormImg,
    handleSignUp,
  } = props;
  return (
    <Box
      // elevation={6}
      sx={{
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        height: "100%",
        width: "100%",
        // padding: "1rem",
        // border: "1px solid red",
      }}
    >
      <Box
        sx={{
          color: "#000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          // border: "1px solid red",
        }}
      >
        <Typography variant="h5">Subscription Details</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            mb: 3,
            // marginTop: "1rem",
          }}
        >
          <PlanSelect plan={plan} setPlan={setPlan} />

          <Box
            sx={{
              //   border: "1px solid red",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mt: 3,
              mb: 3,
            }}
          >
            {plan === "Free Trial" ? (
              <Typography>
                You will be billed after 7 day Trial is over
              </Typography>
            ) : null}
            {plan === "Monthly" ? (
              <>
                <Typography sx={{ mb: 3 }}>
                  Your Monthly subscription will start after 7 day free trial{" "}
                  <br />
                  Pay using the QR Code below and share the screenshot with us
                  our team will verify your payment
                </Typography>
                <Box
                  sx={{
                    width: "90%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "flex",
                    border: "1px solid grey",
                    borderRadius: 2,
                    pl: 3,
                    pr: 3,
                    mb: 3,
                  }}
                >
                  <Typography variant="h6">Billing</Typography>
                  <Typography variant="body1">Rs 250</Typography>
                </Box>
              </>
            ) : null}
            {plan === "Annually" ? (
              <>
                <Typography sx={{ mb: 3 }}>
                  Your Annual subscription will start after 7 day free trial
                  <br />
                  Pay using the QR Code below and share the screenshot with us
                  our team will verify your payment
                </Typography>
                <Box
                  sx={{
                    width: "90%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "flex",
                    border: "1px solid grey",
                    borderRadius: 2,
                    pl: 3,
                    pr: 3,
                    mb: 3,
                  }}
                >
                  <Typography variant="h6">Billing</Typography>
                  <Typography variant="body1">Rs 2400</Typography>
                </Box>
              </>
            ) : null}
            {plan != "Free Trial" ? (
              <>
                <img
                  src={qrcode}
                  style={{
                    height: "50%",
                    width: "auto",
                  }}
                />
                <Box
                  sx={{
                    mt: 3,
                    mb: 3,
                  }}
                >
                  {/* <input type="file" placeholder="Share your screenshot" />
                  <Button variant="contained" sx={{ background: "#073259" }}>
                    Upload Screenshot
                  </Button> */}
                  <PhotoUploader formImg={formImg} setFormImg={setFormImg} />
                </Box>
              </>
            ) : null}
          </Box>
          <Typography variant="h5">OR</Typography>
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Coupon Code"
            variant="outlined"
            color="primary"
            type="text"
            // required
            placeholder="Coupon Code"
            // sx={{ marginTop: "1rem" }}
            margin="normal"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
              mt: 3,
            }}
          >
            <Button
              variant="contained"
              sx={{ background: "#073259" }}
              onClick={() => {
                handleSignUp();
                navigate("/medicines");
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
