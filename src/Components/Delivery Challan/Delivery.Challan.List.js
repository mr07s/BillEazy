import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import deliveryChallantable from "../MuuiComponents/deliveryChallanTable";
// import "./deliveryChallanList.css";
import SearchAppBar from "../MuuiComponents/Searchbar";
import DeliveryChallanTable from "../MuuiComponents/deliveryChallanTable";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import useDeliveryChallanApis from "../hooks/delivery.challan.hooks";

const ChallanList = () => {
  const { user } = useSelector((state) => state.authReducer);
  // const  = User;
  console.log(user);
  const navigate = useNavigate();
  const { getDeliveryChallanDetails } = useDeliveryChallanApis();
  useEffect(() => {
    getDeliveryChallanDetails(user._id);

    // return () => {
    //   window.removeEventListener("load", getdeliveryChallanDetails(user._id));
    // };
  }, []);

  return (
    <Box
      className="deliveryChallan_container"
      sx={{
        // border: "10px solid red",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        // overflowY: "scroll",
      }}
    >
      <Box
        className="table_container"
        sx={{
          border: "none",
          marginTop: "5rem",
          // height: "80vh",
          width: "90%",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          flexDirection: "column",
          justifyContent: "flex-start",
          overflowY: "scroll",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/DeliveryChallan/create");
            }}
            sx={{
              width: "5rem",
              marginLeft: "auto",
              display: "flex",
              height: "2rem",
              backgroundColor: "#073259",
              color: "white",
            }}
          >
            Create
          </Button>
          <SearchAppBar />
        </Box>
        <DeliveryChallanTable field="Delivery Challan" />
      </Box>
    </Box>
  );
};

export default ChallanList;
