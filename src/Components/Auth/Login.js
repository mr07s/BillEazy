import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button, Divider, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InsideMedicineContainer from "../Medicine/InsideMedicineContainer";
import API from "../../api";
import { useDispatch, useSelector } from "react-redux";
import GoogleBtn from "../Helper/GoogleBtn";

// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
export default function Login() {
  // const isLoginPage = true; // Change this to false if you're not on the login page
  // const sidebar = document.querySelector(".sidebar");

  // sidebar.style.display = isLoginPage ? "none" : "block";
  const navigate = useNavigate();
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  // const User = useSelector((state) => state.authReducer);
  // console.log("Reducer user");
  // console.log(User);
  const dispatch = useDispatch();
  const handlelogIn = async () => {
    try {
      const { data } = await API.post("/v1/api/auth/login", {
        email,
        password,
      });
      if (data?.success) {
        localStorage.setItem("user", JSON.stringify(data?.existingUser));
        localStorage.setItem("token", JSON.stringify(data?.token));
        dispatch({ type: "SET_AUTH_USER", user: data?.existingUser });

        // toast.success(data?.message);
        navigate("/medicines");
        // window.addEventListener("load", console.log("Hi5i"));
      }
      // toast.error(data?.message);
    } catch (e) {
      console.log(e);
      // toast.error(e);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: "10rem",
        // border: "2px solid red",
        "& > :not(style)": {
          m: 1,
        },
      }}
    >
      <Paper
        elevation={16}
        sx={{
          display: "flex",
          height: "60vh",
          width: "25vw",
          padding: "1rem",
          color: "white",
          borderWidth: "3px",
          borderStyle: "solid",
        }}
      >
        <Box sx={{ color: "blue" }}>
          {/* <Typography
            variant="h6"
            gutterBottom
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "25vw",
              marginTop: "1rem",
              color: "blue",
            }}
          >
            Welcome to virus
          </Typography> */}
          {/* <Divider variant="middle" color="black" /> */}
          <Divider
            fullWidth
            textAlign="right"
            sx={{ width: "25vw", marginTop: "2rem" }}
          >
            Welcome to Virus
          </Divider>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // marginTop: "1rem",
            }}
          >
            <TextField
              fullWidth
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
              fullWidth
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Button
                onClick={handlelogIn}
                variant="contained"
                color="success"
                sx={{ width: "6vw", height: "2rem", marginTop: "0.5rem" }}
              >
                Log In
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{ width: "11vw", height: "2rem", marginTop: "0.5rem" }}
              >
                Forgot Password
              </Button>
            </Box>
            <GoogleBtn />
            <Divider textAlign="right" sx={{ marginTop: "2rem" }}>
              Don't Have An Account
            </Divider>
            <Box sx={{ display: "flex", width: "25vw", flexDirection: "row" }}>
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
                Create New Account
              </Typography>
              <Button
                onClick={() => navigate("/SignUp")}
                variant="contained"
                color="secondary"
                sx={{ width: "10vw", height: "2rem", marginTop: "2rem" }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
