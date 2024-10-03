// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { useSelector } from "react-redux";
// import { Button, TextField } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import moment from "moment";

// export default function InfoTable(props) {
//   // const TableCell = React.useMemo(
//   //   () =>
//   //     props.medicines.map((m) => ({
//   //       ...m,
//   //       // id: i + 1,
//   //       QUANTITY: m.quantity,
//   //       Medicine: m.name,
//   //       RATE: m.rate,
//   //       TYPE: m.type,
//   //       PACK: m.pack,
//   //       MRP: m.mrp,
//   //       HSN: m.hsn,
//   //       MFG: m?.mfg,
//   //       EXPIARY: moment(m?.expiry).format("DD MMM, YYYY"),
//   //       BATCH: m?.batchno,
//   //     })),
//   //   [props.medicines]
//   // );
//   // console.log(props.medicines);

//   return (
//     <TableContainer component={Paper} sx={{ height: 500, overflowX: "hidden" }}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead
//           sx={{
//             color: "white",
//           }}
//         >
//           <TableRow
//             sx={{
//               background: "#073259",
//             }}
//           >
//             <TableCell sx={{ color: "white" }} align="center">
//               MEDICINE
//             </TableCell>
//             <TableCell sx={{ color: "white" }} align="center">
//               QUANTITY
//             </TableCell>
//             <TableCell sx={{ color: "white" }} align="center">
//               MRP
//             </TableCell>
//             <TableCell sx={{ color: "white" }} align="center">
//               RATE
//             </TableCell>
//             <TableCell sx={{ color: "white" }} align="center">
//               BATCH
//             </TableCell>
//             <TableCell sx={{ color: "white" }} align="center">
//               MFG
//             </TableCell>
//             <TableCell sx={{ color: "white" }} align="center">
//               HSN
//             </TableCell>
//             <TableCell sx={{ color: "white" }} align="center">
//               TYPE
//             </TableCell>
//             <TableCell sx={{ color: "white" }} align="center">
//               PACK
//             </TableCell>
//             <TableCell sx={{ color: "white" }} align="center">
//               EXPIARY
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody sx={{ overflow: "scroll" }}>
//           <TableRow>
//             <TableCell component="th" scope="row" align="center">
//               {m.name}
//             </TableCell>
//             <TableCell component="th" scope="row" align="center">
//               {m.quantity}
//             </TableCell>
//             <TableCell component="th" scope="row" align="center">
//               {m.rate}
//             </TableCell>
//             <TableCell component="th" scope="row" align="center">
//               {m.type}
//             </TableCell>
//             <TableCell component="th" scope="row" align="center">
//               {m.pack}
//             </TableCell>
//             <TableCell component="th" scope="row" align="center">
//               {m.mrp}
//             </TableCell>
//             <TableCell component="th" scope="row" align="center">
//               {m.hsn}
//             </TableCell>
//             <TableCell component="th" scope="row" align="center">
//               {m.mfg}
//             </TableCell>
//             <TableCell component="th" scope="row" align="center">
//               {moment(m?.expiry).format("DD MMM, YYYY")}
//             </TableCell>
//             <TableCell component="th" scope="row" align="center">
//               {m.batchno}
//             </TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
