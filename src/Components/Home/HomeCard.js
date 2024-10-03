import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InsideMedicine from "../Medicine/InsideMedicine";
import { useNavigate } from "react-router-dom";

export default function MediaCard(props) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        minWidth: "20vw",
        maxWidth: "25vw",
        minHeight: "20vh",
        maxHeight: "25vh",
        margin: "3rem",
        // border:'10px solid black'
      }}
    >
      <CardMedia
        sx={{ height: "10vh" }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => navigate("/medicines")}
          size="small"
          variant="contained"
          color="secondary"
        >
          Enter
        </Button>
      </CardActions>
    </Card>
  );
}
