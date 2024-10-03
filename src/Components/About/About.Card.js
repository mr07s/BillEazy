import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function AboutCard(props) {
  return (
    <Card
      sx={{
        height: "35vh",
        background: "#D7E8EA",
        border: "1px solid #073259",
        width: "20vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <CardContent>
        {/* <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          {props.title}
        </Typography> */}
        <Typography variant="h4" component="div">
          {props.title}
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        <Typography variant="body2" sx={{ marginTop: "1rem" }}>
          {props.body}
          <br />
          {props.secondBody}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" sx={{ background: "#073259" }}>
          {props.demo}
        </Button>
      </CardActions>
    </Card>
  );
}
