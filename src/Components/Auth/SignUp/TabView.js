import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Divider } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PersonalDetails from "./personal.details";
import OrgDetails from "./org.details";
import SubsDetails from "./Subscription Details/subscription.details";
export default function TabView() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
              <Tab label="Organisation Details" value="2" />
              <Tab label="Subscription" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <PersonalDetails value={value} setValue={setValue} />
          </TabPanel>
          <TabPanel value="2">
            <OrgDetails value={value} setValue={setValue} />
          </TabPanel>
          <TabPanel value="3">
            <SubsDetails />
          </TabPanel>
        </TabContext>
      </Paper>
    </Box>
  );
}
