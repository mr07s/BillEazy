import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function PersonalDetails(props) {
  const {
    value,
    setValue,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
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
        <Typography variant="h5">Personal Details</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            // marginTop: "1rem",
          }}
        >
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            margin="normal"
            required
            type="text"
            color="primary"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            margin="normal"
            required
            type="email"
            color="primary"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            color="primary"
            type="password"
            required
            placeholder="Enter your password"
            // sx={{ marginTop: "1rem" }}
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Typography sx={{ pt: 1, pb: 1 }}>
            Already have an account ? <Link to="/Login">Login Here</Link>
          </Typography>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
            <Button
              variant="contained"
              sx={{ background: "#073259" }}
              disabled={!(name && email && password)}
              onClick={() => {
                setValue("2");
              }}
            >
              Save and Next
            </Button>
          </Box>
          {/* <Box
              sx={{
                display: "flex",
                // flexDirection: "row",
                // justifyContent: "space-between",
                justifyContent: "flex-end",
              }}
            >
              <Button
                onClick={signUp}
                variant="contained"
                color="success"
                sx={{
                  width: "fit-content",
                  height: "2rem",
                  marginTop: "0.5rem",
                }}
              >
                Sign Up
              </Button>
            </Box> */}
          {/* <GoogleBtn /> */}
          {/* <Divider textAlign="right" sx={{ marginTop: "2rem" }}>
          Already Have An Account
        </Divider> */}
          {/* <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "25vw",
                flexDirection: "row",
              }}
            >
              <Typography
                variant="button"
                gutterBottom
                sx={{
                  display: "flex",
                  // justifyContent: "center",
                  width: "15vw",
                  marginTop: "2rem",
                  color: "blue",
                }}
              >
                Log In with Existing Account
              </Typography>
              <Button
                onClick={() => navigate("/Login")}
                variant="contained"
                color="secondary"
                sx={{ width: "8vw", height: "2rem", marginTop: "2rem" }}
              >
                Log In
              </Button>
            </Box> */}
        </Box>
      </Box>
    </Box>
  );
}
