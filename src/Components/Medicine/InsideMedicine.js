import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import API from "../../api/index";
// import { Button } from "@mui/base";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import UpdateMedDialouge from "../MuuiComponents/UpdateMedDialouge";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";
import EditIcon from "@mui/icons-material/Edit";
export default function DataGridDemo(props) {
  // const [medicines,setMedicines] =React.useState([]);
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleUpdate = async (e, cellValues) => {
    return !open;
  };

  // console.log(open);
  const navigate = useNavigate();

  const handleDelete = async (e, cellValues) => {
    try {
      e.preventDefault();
      // toast.custom(<div
      //   style={{display:'flex',
      //   flexDirection:'column',
      //   border:'1px solid black',
      //   width:'15rem',
      //   backgroundColor:'grey'}}>
      //     <h3
      //     style={{color:'black',
      //     fontFamily:'Roboto'}}>
      //       Are you sure you want to delete this
      //       </h3>
      //       <br/>
      //        <Button onClick={async(e)=>await (deleteselector+1)}>Delete</Button></div>)

      const Medicineid = cellValues.row._id;

      const { data } = await API.delete(
        `/v1/api/medicine/deletemedicine/${Medicineid}`
      );
      if (data?.success) {
        toast.success("Deleted successfully");
        props.getAllMedicines();
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  const columns = [
    // { field: "id", headerName: "ID", width: 100 },
    {
      field: "Medicine",
      headerName: "MEDICINE",
      width: 190,
      display: "flex",
      justifyContent: "center",
      editable: true,
    },
    {
      field: "Quantity",
      headerName: "QTY",
      width: "70",
      type: "number",
      editable: true,
    },
    {
      field: "HSN",
      headerName: "HSN",
      width: "90",
      editable: true,
    },
    {
      field: "Pack",
      headerName: "Pack",
      width: "95",
      editable: true,
    },
    {
      field: "Type",
      headerName: "Type",
      width: "95",
      editable: true,
    },
    {
      field: "MRP",
      headerName: "MRP",
      width: "63",
      type: "number",
      editable: true,
    },

    {
      field: "Rate",
      headerName: "RATE",
      type: "number",
      width: "63",
      editable: true,
    },

    {
      field: "MFG",
      headerName: "MFG",
      type: "text",
      width: "120",
      editable: true,
    },
    {
      field: "BATCHNO",
      headerName: "BATCH NO.",
      type: "number",
      // width: "100",
      editable: true,
    },
    {
      field: "Expiry",
      headerName: "EXPIRY",
      // type: "date",
      width: "120",
      editable: true,
    },
    {
      field: "UPDATE",
      renderCell: (cellValues) => {
        return (
          <Button
            // variant="contained"
            color="primary"
            onClick={(event) => {
              setOpen(true);
            }}
          >
            <EditIcon />
          </Button>
        );
      },
    },
    {
      field: "DELETE",
      renderCell: (cellValues) => {
        return (
          <Button
            // variant="contained"
            color="error"
            onClick={(event) => {
              handleDelete(event, cellValues);
            }}
          >
            <DeleteIcon />
          </Button>
        );
      },
    },
  ];

  //  const getAllMedicines = async()=>{
  //   try {
  //     const {data} = await API.get('/api/medicine/getmedicine')
  //   console.log("data");
  //   console.log(data);
  //   if(data?.success){
  //     setMedicines(data?.allmedicines)
  //   }
  //   console.log(medicines)
  //   } catch (error) {
  //     console.log(error);
  //     alert(error);
  //   }

  //   }

  // React.useEffect(()=>{
  //   getAllMedicines();
  // // eslint-disable-next-line
  // },[])

  // { id: 1, Quantity: "Snow", Composition: "sodium", Medicine: "Jon", Rate: 35 },
  // {
  //   id: 2,
  //   Quantity: "Lannister",
  //   Composition: "calciam",
  //   Medicine: "Cersei",
  //   Rate: 42,
  // },

  // medicines.map((m,i)=>{

  //   return  rows = [ {id:i+1,Quantity:m?.quantity,Medicine:m?.name}]

  // })
  const rows = React.useMemo(
    () =>
      props.medicines.map((m, i) => ({
        ...m,
        id: i + 1,
        Quantity: m.quantity,
        Medicine: m.name,
        Rate: m.rate,
        Type: m.type,
        Pack: m.pack,
        MRP: m.mrp,
        HSN: m.hsn,
        MFG: m?.mfg,
        Expiry: moment(m?.expiry).format("DD MMM, YYYY"),
        BATCHNO: m?.batchno,
      })),
    [props.medicines]
  );
  console.log(props.medicines);
  // console.log(rows[0].name)

  // useEffect(() => {
  //   window.addEventListener("load", console.log("H5"));
  // }, []);

  return (
    <Box>
      <UpdateMedDialouge open={open} setOpen={setOpen} />
      <Box
        sx={{
          height: 400,
          color: "black",
          width: "100%",
          // border: "10px solid green",
          [theme.breakpoints.down("md")]: {
            width: "50%",
          },
          // display: "flex",
          // flexDirection: "row",
          // justifyContent: "space-between",
        }}
      >
        <DataGrid
          sx={{
            // border: "1px solid red",
            // color: "black",
            margin: "2rem",
            background: "whitesmoke",
            color: "black",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            width: "82vw",
          }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pRateSize: 5,
              },
            },
          }}
          pRateSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      <Toaster />
    </Box>
  );
}
