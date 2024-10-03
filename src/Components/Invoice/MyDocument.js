import React from "react";
// import { useSelector } from "react-redux";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../Assets/icon.png";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    // justifyContent: 'center',
    // alignItems: 'center',
    // border: "10px solid black",
    // minWidth: "100vw",
  },
  parentContainer: {
    marginHorizontal: 10,
    marginTop: 10,
    // padding: 10,
    flexGrow: 1,
    minWidth: 100,
    // height: "25%",
    display: "flex",
    border: "1px solid black",
  },
  companyDetails: {
    // marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    minHeight: 100,
    textAlign: "right",
    // borderBottom: "1px solid black",
    // height: "100%",
  },
  logoContainer: {
    // border: "1px solid black",
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // width: "fit-content",
    marginHorizontal: 1,
    paddingHorizontal: 2,
    maxWidth: "25%",
  },
  logo: {
    fontSize: 15,
  },
  companyNameAndAddress: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // border: "1px solid black",
    // fontSize: "5",
    height: 100,
    width: "75%",
  },
  documentType: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // borderBottom: "1px solid black",
    backgroundColor: "#062541",
    height: 30,
    color: "white",
  },
  buyerDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",

    // width: "100%",
    // border: "1px solid red",
  },
  buyerDetails_col_1: {
    display: "flex",
    // display:
    flexDirection: "column",
    // width: 100,
    // justifyContent: "flex-start",
    width: "60%",
    // minWidth: 1000,
    maxWidth: "60%",

    // backgroundColor: "red",
    // border: "1px solid red",
    // borderRightColor: "red",
    // backgroundColor: "red",
  },
  buyerDetails_col_2: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "flex-start",
    // marginLeft: "10rem",
    // marginLeft: "10rem",
    width: "40%",
    maxWidth: "40%",
    // width: "60%",
    // maxWidth: "60%",
    // borderRight: "1px solid black",
    // backgroundColor: "red",
  },
  text: {
    borderBottom: "1px solid black",
    fontSize: 10,
    paddingVertical: 2,
    paddingLeft: 2,
    // textOverflow: "clipped",
    borderRight: "1px solid black",
    maxWidth: 350,
    textAlign: "left",
  },
  priceDetails: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid red",
  },
  price_heading_view: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  individual_header_view: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    display: "flex",
    flexDirection: "column",
    alignItems: "centre",
    justifyContent: "center",
    textAlign: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  price_details_text: {
    fontSize: 10,
    fontWeight: "ultrabold",
    paddingHorizontal: 2,
  },
  itemsRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  individual_items_view: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    display: "flex",
    flexDirection: "column",
    alignItems: "centre",
    justifyContent: "center",
    textAlign: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  items_text: {
    fontSize: 10,
    fontWeight: "ultrabold",
    paddingHorizontal: 10,
    paddingVertical: 5,
    textOverflow: "clipped",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "space-around",
    // flexDirection: "row",
  },
  table_text: {
    fontSize: 10,
    // fontWeight: "ultrabold",
    // paddingHorizontal: 10,
    // paddingVertical: 5,
    // textOverflow: "clipped",
  },
  bold_text: {
    fontWeight: "heavy",
    fontSize: 12,
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    maxWidth: 350,
    textAlign: "left",
    paddingVertical: 1,
    paddingLeft: 6,
  },
  supplier: {
    fontSize: "15",
    fontWeight: "bold",
    paddingVertical: 1,
  },
});
var converter = require("number-to-words");
// const { token, user } = data;
// const { data } = useSelector((state) => state.Single_Invoice_Reducer);
// console.log(data);
// Create Document Component
export const MyDocument = ({
  supplierDetails,
  buyerDetails,
  bankDetails,
  product,
  transportDetails,
  termsAndConditions,
  totalProductPrice,
  totalTaxAmount,
}) => (
  <Document>
    {/* console.log(product) */}
    <Page size="A4" style={styles.page}>
      <View style={styles.parentContainer}>
        <View style={styles.companyDetails}>
          <View style={styles.logoContainer}>
            {/* <Text style={styles.logo}>
              Sheerina
              <br />
              Enterprise{" "}
            </Text> */}
            <Image src={logo} />
          </View>
          {/* data?.supplierDetails?.companyAddress */}
          <View style={styles.companyNameAndAddress}>
            <Text style={styles.supplier}>{supplierDetails?.firmName}</Text>
            {/* <Text>Company Address</Text> */}
            <Text style={styles.supplier}>
              {supplierDetails?.companyAddress}
            </Text>
            <Text style={styles.supplier}>
              {supplierDetails?.companyMobile}
            </Text>
          </View>
        </View>
        <View style={styles.documentType}>
          <Text style={{ fontWeight: "bold" }}>Invoice</Text>
        </View>
        {/* CONSIGNEE DETAILS */}
        <View style={styles.buyerDetails}>
          <View style={styles.buyerDetails_col_1}>
            <Text style={[{ fontWeight: "bold" }, styles.bold_text]}>
              BUYER DETAILS (DETAILS FOR RECIEVER)
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {"      "}
            </Text>
            <Text style={styles.text}>
              Name {"        "}: {buyerDetails?.companyName}
            </Text>
            <Text style={styles.text}>
              Address{"     "}: {buyerDetails?.companyAddress}
            </Text>
            <Text style={styles.text}>
              Mobile {"       "}: {buyerDetails?.companyMobile}
            </Text>
            <Text style={styles.text}>
              GSTIN{"       "}: {buyerDetails?.companyGstin}{" "}
            </Text>
            <Text style={styles.text}>
              State {"          "}: {buyerDetails?.state}{" "}
            </Text>
            <Text style={styles.text}>
              State Code : {buyerDetails?.pincode}
            </Text>
          </View>

          <View style={styles.buyerDetails_col_2}>
            <Text style={styles.text}>Challan No {"               "}: </Text>
            <Text style={styles.text}>Challan Date {"            "}: </Text>
            <Text style={styles.text}>
              Place Of Supply{"        "}: {transportDetails?.placeOfSupply}{" "}
            </Text>
            <Text style={styles.text}>
              State{"                          "}: {buyerDetails?.state}{" "}
            </Text>
            <Text style={styles.text}>Transportation Mode : </Text>
            <Text style={styles.text}>Transporter Name {"    "}: </Text>
            <Text style={styles.text}>
              Vehicle No {"               "} :{transportDetails?.vehicleNumber}
            </Text>
          </View>
        </View>
        <View style={styles.buyerDetails}>
          <View style={styles.buyerDetails_col_1}>
            <Text style={styles.bold_text}>
              CONSIGNEE DETAILS(DETAILS FOR CONSIGNEE)&nbsp;
            </Text>
            <Text style={styles.text}>
              Name {"        "}: {buyerDetails?.companyName}{" "}
            </Text>
            <Text style={styles.text}>
              Address{"     "}: {buyerDetails?.companyAddress}
            </Text>
            <Text style={styles.text}>
              Mobile {"       "}: {buyerDetails?.companyMobile}
            </Text>
            <Text style={styles.text}>
              GSTIN{"       "}: {buyerDetails?.companyGstin}{" "}
            </Text>
            <Text style={styles.text}>
              State {"          "}: {buyerDetails?.state}{" "}
            </Text>
            <Text style={styles.text}>
              State Code : {buyerDetails?.pincode}
            </Text>
          </View>
          {/* lrDate: '2022-04-16T18:30:00.000Z',
      lrNumber: 1233, */}

          <View style={styles.buyerDetails_col_2}>
            <Text style={styles.text}>Transporter ID {"          "}: </Text>
            <Text style={styles.text}>
              LR Number {"              "}: {transportDetails?.lrNumber}
            </Text>
            <Text style={styles.text}>
              LR Date {"                    "}: {transportDetails?.lrDate}{" "}
            </Text>
            <Text style={styles.text}>{""} </Text>
            <Text style={styles.text}>{""} </Text>
            <Text style={styles.text}>{""} </Text>
            <Text style={styles.text}>{""} </Text>
          </View>
        </View>
        {/* <View style={styles.priceDetails}>
          <View style={styles.price_heading_view}>
            <View style={styles.individual_header_view}>
              <Text style={styles.price_details_text}>SL No.</Text>
            </View>
            <View style={styles.individual_header_view}>
              <Text style={styles.price_details_text}>
                Description Of Product
              </Text>
            </View>
            <View style={styles.individual_header_view}>
              <Text style={styles.price_details_text}>HSN Code</Text>
            </View>
            <View style={styles.individual_header_view}>
              <Text style={styles.price_details_text}>QTY</Text>
            </View>
            <View style={styles.individual_header_view}>
              <Text style={styles.price_details_text}>Unit</Text>
            </View>
            <View style={styles.individual_header_view}>
              <Text style={styles.price_details_text}>Rate</Text>
            </View>
            <View style={styles.individual_header_view}>
              <Text style={styles.price_details_text}>Taxable Amt</Text>
            </View>
            <View style={styles.individual_header_view}>
              <Text style={styles.price_details_text}>IGST</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text style={styles.price_details_text}>Rate</Text>
                </View>
                <View>
                  <Text style={styles.price_details_text}>Amt</Text>
                </View>
              </View>
            </View>
            <View style={styles.individual_header_view}>
              <Text style={styles.price_details_text}>Total</Text>
            </View>
          </View>
          <View style={styles.itemsRow}>
            <View style={styles.individual_items_view}>
              <Text style={styles.price_details_text}>1</Text>
            </View>
            <View style={styles.individual_items_view}>
              <Text style={styles.price_details_text}>ULSOL-O GEL SYRUP</Text>
            </View>
            <Text style={styles.price_details_text}>3004</Text>
            <View style={styles.individual_items_view}>
              <Text style={styles.price_details_text}>100</Text>
            </View>
            <Text style={styles.price_details_text}>1x200 ml</Text>
            <View style={styles.individual_items_view}>
              <Text style={styles.price_details_text}>22</Text>
            </View>
            <Text style={styles.price_details_text}>2200.00</Text>
            <View style={styles.individual_items_view}>
              <Text style={styles.price_details_text}>12.00% </Text>
            </View>
            <Text style={styles.price_details_text}>264.00</Text>
            <View style={styles.individual_items_view}>
              <Text style={styles.price_details_text}>2,464.00</Text>
            </View>
          </View>
        </View> */}
        <View
          style={{
            width: "100%",
            // border: "1px soild black",
          }}
        ></View>

        <View
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            border: "1px solid black",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid black",
              width: "10%",
            }}
          >
            <Text style={styles.items_text}>SR No.</Text>
            {product?.map((product, index) => (
              <Text style={styles.items_text}>{index} </Text>
            ))}
            {/* <Text style={styles.items_text}>2</Text>
            <Text style={styles.items_text}>3</Text> */}
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              Width: "10%",
              // border: "1px solid black",
              borderRight: "1px solid black",
            }}
          >
            <Text style={styles.items_text}>Description Of Product </Text>
            {product?.map((product) => (
              <Text style={styles.items_text}>{product?.itemName} </Text>
            ))}
            {/* <Text style={styles.items_text}>ULSOL-O GEL SYRUP </Text>
            <Text style={styles.items_text}>ULSOL-O GEL SYRUP </Text> */}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid black",
            }}
          >
            <Text style={styles.items_text}>HSN Code</Text>
            {product?.map((product) => (
              <Text style={styles.items_text}>{product?.hsn}</Text>
            ))}
            {/* <Text style={styles.items_text}>3004</Text>
            <Text style={styles.items_text}>3004</Text> */}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid black",
            }}
          >
            <Text style={styles.items_text}>QTY</Text>
            {product?.map((product) => (
              <Text style={styles.items_text}>{product?.quantity}</Text>
            ))}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid black",
            }}
          >
            <Text style={styles.items_text}>Unit</Text>
            {product?.map((product) => (
              <Text style={styles.items_text}>{product?.unit}</Text>
            ))}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid black",
            }}
          >
            <Text style={styles.items_text}>Rate</Text>
            {/* <Text style={styles.items_text}>22</Text> */}
            {product?.map((product) => (
              <Text style={styles.items_text}>{product?.salePrice}</Text>
            ))}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid black",
            }}
          >
            {/* <Text style={styles.items_text}>Taxable gst</Text> */}
            <Text style={styles.items_text}>CESS</Text>
            {product?.map((product) => (
              <Text style={styles.items_text}>{product?.cess}%</Text>
            ))}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid black",
            }}
          >
            <Text style={styles.items_text}>IGST</Text>
            {product?.map((product) => (
              <Text style={styles.items_text}>{product?.gst}%</Text>
            ))}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              // border: "1px solid black",
            }}
          >
            <Text style={styles.items_text}>Total</Text>
            {/* final_price */}
            {product?.map((product) => (
              <Text style={styles.items_text}>{product?.final_price}</Text>
            ))}
          </View>
        </View>

        <View
          style={{
            width: "100%",
            // border: "1px soild black",
          }}
        ></View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 100,
            }}
          >
            <Text style={styles.items_text}>Total</Text>
          </View>
          {/* <View
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 120,
            }}
          >
            <Text style={styles.items_text}>300</Text>
          </View> */}
          {/* <View
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 98,
            }}
          >
            <Text style={styles.items_text}>6600.00</Text>
          </View> */}
          {/* <View
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 25,
            }}
          >
            <Text style={styles.items_text}>792</Text>
          </View> */}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 5,
            }}
          >
            <Text style={styles.items_text}>{totalProductPrice}</Text>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            // border: "1px soild black",
          }}
        ></View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid black",
            width: "100%",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid black",
              width: "60%",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                borderBottom: "1px solid black",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                minHeight: 100,
              }}
            >
              <Text style={styles.items_text}>
                {/* {converter.toWords({ totalProductPrice })} */}
              </Text>
              <Text style={styles.items_text}>
                {/* Seven Thousand Three Hundred and Ninety Two Only{" "} */}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                // border: "1px solid black",
                width: "100%",
              }}
            >
              <Text style={styles.items_text}>Terms and Conditions</Text>
              <Text style={styles.items_text}>{termsAndConditions}</Text>
              {/* <Text style={styles.items_text}>
                2. All disputes are subject to BERHAMPORE jurisdiction
              </Text> */}
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                // border: "1px solid black",
                width: "100%",
              }}
            >
              {/* <Text style={styles.items_text}>Total Taxable Amount :</Text> */}
              <Text style={styles.items_text}>Total Tax :</Text>
              <Text style={styles.items_text}>{totalTaxAmount}%</Text>
            </View>
            {/* <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                // border: "1px solid black",
                width: "100%",
              }}
            >
              <Text style={styles.items_text}>Total GST :</Text>

              <Text style={styles.items_text}>Rs 792.00</Text>
            </View> */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                // border: "1px solid black",
                width: "100%",
              }}
            >
              <Text style={styles.items_text}>Total Amount After Tax :</Text>

              <Text style={styles.items_text}>{totalProductPrice}</Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignContent: "center",
                border: "1px solid black",
                width: "100%",
                minHeight: 150,
              }}
            >
              <View>
                <Text style={styles.items_text}>
                  Certified that the particular given above are true and correct
                </Text>
                <Text style={styles.items_text}>For, SHEERINA ENTERPRISE</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  // alignContent: "center",
                  // border: "1px solid black",
                  width: "100%",
                  // minHeight: 150,
                }}
              >
                <Text style={styles.items_text}>Authorized Signatory</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Text style={styles.items_text}>(E & OE)</Text>
      </View>
    </Page>
  </Document>
);
