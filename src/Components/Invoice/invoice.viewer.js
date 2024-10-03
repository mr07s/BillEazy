import React from "react";
import { MyDocument } from "./MyDocument";
import { PDFViewer, StyleSheet } from "@react-pdf/renderer";
import { useSelector } from "react-redux";

export default function InvoiceViewer() {
  const styles = StyleSheet.create({
    pdf: {
      minWidth: "99%",
      minHeight: "93vh",
      overflowX: "hidden",
      // border: "10px solid black",
    },
  });
  const { data } = useSelector((state) => state.Single_Invoice_Reducer);
  console.log(data);
  console.log(data?.supplierDetails?.companyAddress);
  const {
    supplierDetails,
    buyerDetails,
    bankDetails,
    product,
    transportDetails,
    termsAndConditions,
    totalProductPrice,
    totalTaxAmount,
  } = data;
  // console.log(supplierDetails?.companyAddress);
  // console.log(supplierDetails?.firmName);
  // console.log(buyerDetails?.companyName);
  // console.log(buyerDetails?.companyAddress);
  // console.log(buyerDetails?.companyMobile);
  // console.log(buyerDetails?.companyGstin);
  // console.log(buyerDetails?.state);
  // console.log(buyerDetails?.pincode);
  // console.log(transportDetails?.placeOfSupply);
  // console.log(transportDetails?.vehicleNumber);
  // console.log(product?.hsn);
  // console.log(product?.itemDescription);
  // console.log(product[0]?.itemDescription);

  return (
    <PDFViewer style={styles.pdf}>
      <MyDocument
        supplierDetails={supplierDetails}
        hi={"HI"}
        buyerDetails={buyerDetails}
        bankDetails={bankDetails}
        product={product}
        transportDetails={transportDetails}
        termsAndConditions={termsAndConditions}
        totalProductPrice={totalProductPrice}
        totalTaxAmount={totalTaxAmount}
      />
    </PDFViewer>
  );
}
