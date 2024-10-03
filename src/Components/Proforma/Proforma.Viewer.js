import React from "react";
// import { MyDocument } from "./MyDocument";
import { PDFViewer, StyleSheet } from "@react-pdf/renderer";

export default function ProformaViewer() {
  const styles = StyleSheet.create({
    pdf: {
      minWidth: "99%",
      minHeight: "93vh",
      overflowX: "hidden",
      // border: "10px solid black",
    },
  });
  return <PDFViewer style={styles.pdf}>{/* <MyDocument /> */}</PDFViewer>;
}
