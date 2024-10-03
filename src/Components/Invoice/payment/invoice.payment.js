import { Box, Button } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useInvoiceApis from "../../hooks/invoice.hooks";
import Invoice_Payment_Table from "./invoice.payment.table";
import Buyed_Products from "./buyed.products";

const Invoice_Payment = () => {
  const { data } = useSelector((state) => state.Invoice_Product_Reducer);
  const [paidAmount, setPaidAmount] = useState(0);
  const [pendingAmount, setPendingAmount] = useState(0);

  // useMemo(() => {
  //   setPendingAmount((pendingAmount) => {
  //     const pending = data?.Invoice_Product?.totalProductPrice - paidAmount;
  //   });
  // }, [paidAmount]);

  useMemo(() => {
    setPendingAmount(data?.Invoice_Product?.pendingAmount - paidAmount);
    // console.log(pendingAmount);
  }, [paidAmount]);

  console.log(pendingAmount);
  console.log(data);
  const { Invoice_Product } = data;
  console.log(Invoice_Product);

  const { getInvoice_Product_Details, updateInvoiceDetails } = useInvoiceApis();

  let { id } = useParams();

  console.log(id);

  useEffect(() => {
    getInvoice_Product_Details(id);
  }, []);
  // const Invoice_Id = data?.Invoice_Product?._id;
  const handleSubmit = async () => {
    try {
      // updateInvoiceDetails({ Invoice_Id: id, paidAmount, pendingAmount });
      console.log("called1");
      updateInvoiceDetails({ Invoice_Id: id, paidAmount, pendingAmount });
      console.log("called2");
      getInvoice_Product_Details(id);
    } catch (error) {
      toast.error("Error while submitting");
    }
  };

  return (
    <>
      {/* { Invoice_Product?.map((product)=>{ */}
      <Box
        sx={{
          border: "1px solid red",
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
            marginBottom: "3rem",
            // border: "1px solid blue",
            height: "auto",
            width: "70%",
            // maxHeight: "60%",
            // overflow: "scroll",
          }}
        >
          <Buyed_Products Invoice_Product={Invoice_Product} />
        </Box>

        <Box>
          <Invoice_Payment_Table
            data={data}
            paidAmount={paidAmount}
            setPaidAmount={setPaidAmount}
          />
        </Box>

        {/* })
    } */}
        <Box
          sx={{
            mt: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ mr: "7rem" }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Invoice_Payment;
