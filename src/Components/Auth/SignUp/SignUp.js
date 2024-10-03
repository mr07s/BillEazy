import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PersonalDetails from "./personal.details";
import OrgDetails from "./org.details";
import SubsDetails from "./Subscription Details/subscription.details";
import API from "../../../api/index";
import moment from "moment";
import { useDispatch } from "react-redux";
export default function SignUp() {
  const dispatch = useDispatch();
  // console.log(moment().add(7, "days"));
  const navigate = useNavigate();
  const [value, setValue] = useState("1");
  // Personal Details states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Organisation Details states
  const [logo, setLogo] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [pin, setPin] = useState("");
  const [gstin, setGstin] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountHolder, setAccountHolder] = useState("");
  const [accountNumber, setAccountNumber] = useState();
  const [ifsc, setIfsc] = useState("");
  const [branchName, setBranchName] = useState("");
  // Subscription Details States
  const [couponCode, setCouponCode] = useState("");
  const [plan, setPlan] = useState("Free Trial");
  const [formImg, setFormImg] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [disabled, setDisabled] = useState(
    !(
      name &&
      email &&
      password &&
      companyName &&
      mobile &&
      address &&
      pin &&
      gstin &&
      bankName &&
      accountHolder &&
      accountNumber &&
      ifsc &&
      branchName &&
      plan
    )
  );
  const handleSignUp = async () => {
    try {
      const { data } = await API.post("/v1/api/auth/signup", {
        user: {
          name,
          email,
          password,
        },
        organisation: {
          name: companyName,
          email: companyEmail,
          address,
          pincode: pin,
          mobile,
          gstIn: gstin,
          bankName,
          accountHolder,
          accountNumber,
          ifsc,
          branchName,
        },
        subscription: {
          endDate: moment().add(7, "days"),
          price: plan === "Monthly" ? 250 : plan === "Annually" ? 2400 : 0,
          plan,
        },
      });
      if (data?.success) {
        localStorage.setItem("user", JSON.stringify(data?.user));
        localStorage.setItem("token", JSON.stringify(data?.token));
        console.log(data?.token);
        dispatch({ type: "AddAuth", payload: data });
        console.log("User :", data);
        // navigate("/medicines");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          overflow: "auto",
          height: "fit-content",
          width: "fit-content",
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Personal Details" value="1" />
              <Tab
                disabled={!(name && email && password)}
                label="Organisation Details"
                value="2"
              />
              <Tab
                disabled={
                  !(
                    name &&
                    email &&
                    password &&
                    companyName &&
                    mobile &&
                    address &&
                    pin &&
                    gstin &&
                    bankName &&
                    accountHolder &&
                    accountNumber &&
                    ifsc &&
                    branchName
                  )
                }
                label="Subscription"
                value="3"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <PersonalDetails
              value={value}
              setValue={setValue}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </TabPanel>
          <TabPanel value="2">
            <OrgDetails
              value={value}
              setValue={setValue}
              logo={logo}
              setLogo={setLogo}
              companyName={companyName}
              setCompanyName={setCompanyName}
              companyEmail={companyEmail}
              setCompanyEmail={setCompanyEmail}
              mobile={mobile}
              setMobile={setMobile}
              address={address}
              setAddress={setAddress}
              pin={pin}
              setPin={setPin}
              gstin={gstin}
              setGstin={setGstin}
              bankName={bankName}
              setBankName={setBankName}
              accountHolder={accountHolder}
              setAccountHolder={setAccountHolder}
              ifsc={ifsc}
              setIfsc={setIfsc}
              accountNumber={accountNumber}
              setAccountNumber={setAccountNumber}
              branchName={branchName}
              setBranchName={setBranchName}
            />
          </TabPanel>
          <TabPanel value="3">
            <SubsDetails
              couponCode={couponCode}
              setCouponCode={setCouponCode}
              plan={plan}
              setPlan={setPlan}
              formImg={formImg}
              setFormImg={setFormImg}
              handleSignUp={handleSignUp}
              disabled={disabled}
            />
          </TabPanel>
        </TabContext>
      </Paper>
    </Box>
  );
}
