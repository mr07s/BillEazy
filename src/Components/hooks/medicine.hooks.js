import React from "react";
import { useDispatch } from "react-redux";
import API from "../../api";
import arrayToReducer from "../Helper/arrayToReducer";
export default function useMedicineApis() {
  const dispatch = useDispatch();
  const getAllMedicines = async (userId) => {
    try {
      const { data } = await API.post("/api/medicine/getMedicines", { userId });
      console.log("data");
      console.log(data);
      if (data?.success) {
        // setMedicines(data?.allmedicines);
        const { medicinesDict, medicineIds } = arrayToReducer(
          data?.allmedicines
        );
        dispatch({
          type: "GET_ALLMEDICINES",
          payload: {
            medicinesDict,
            medicineIds,
          },
        });
      }
      // console.log(medicines);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  const addMedicine = async (
    { name, quantity, rate, mrp, hsn, expiry, batchno, mfg, userId },
    toast
  ) => {
    try {
      const { data } = await API.post("/api/medicine/addmedicine", {
        name,
        quantity,
        rate,
        mrp,
        hsn,
        expiry,
        batchno,
        mfg,
        userId,
      });

      if (data?.success) {
        toast.success("Successfully product added");
        getAllMedicines();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong");
    }
  };
  return {
    getAllMedicines,
    addMedicine,
  };
}
