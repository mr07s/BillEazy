import { Button } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../Services/firebase";

export default function GoogleBtn() {
  const provider = new GoogleAuthProvider();
  const handleClick = async () => {
    signInWithRedirect(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("User:", user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCre+dential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        width: "25vw",
        background: "#073259",
        height: "2rem",
        display: "flex",
        flexDirection: " row",
        justifyContent: "space-evenly",
        marginTop: "1rem",
        // border: "1px solid red",
      }}
      onClick={handleClick}
    >
      <GoogleIcon />
      Log In With Google
    </Button>
  );
}
