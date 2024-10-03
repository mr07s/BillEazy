import React, { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import API from "../../api";
const useProformaApis = () => {
  const dispatch = useDispatch();
  const [supplierDetailsId, setSupplierDetailsId] = useState(null);
  const [supplierData, setSupplierData] = useState([]);
  const [buyerDetailsId, setBuyerDetailsId] = useState(null);
  const [productDetailsId, setProductDetailsId] = useState(null);
  const [transportDetailsId, setTransportDetailsId] = useState(null);
  const [bankDetailsId, setBankDetailsId] = useState(null);
  const [buyerData, setBuyerData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [transportData, setTransportData] = useState([]);
  const [bankData, setBankData] = useState([]);
  const User = useSelector((state) => state.authReducer);
  const Supplier = useSelector((state) => state.SupplierReducer);
  const Buyer = useSelector((state) => state.BuyerReducer);
  const Bank = useSelector((state) => state.BuyerReducer);
  const Products = useSelector((state) => state.ProductReducer);
  console.log(Products);
  const Transport = useSelector((state) => state.TransportReducer);
  // console.log("Reducer user");
  const { user } = User;
  // ***** proforma ******///////
  const addProformaDetails = async ({
    termsAndConditions,
    productId,
    totalProductPrice,
    totalTaxAmount,
  }) => {
    try {
      // const data = Buyer;
      console.log(totalProductPrice);
      console.log(totalTaxAmount);
      console.log(productId);
      console.log(termsAndConditions);
      console.log(Buyer?.data._id);
      const Buyer_id = Buyer?.data._id;
      console.log(Bank?.data._id);
      const Bank_id = Bank?.data._id;
      console.log(Products?.data._id);
      const Products_id = Products?.data._id;
      console.log(Transport?.data._id);
      const Transport_id = Transport?.data._id;
      console.log(Supplier?.data._id);
      const Supplier_id = Supplier?.data._id;

      const { data } = await API.post("/v1/api/proforma/create", {
        Buyer_id,
        Bank_id,
        // Products_id,
        productId,
        Transport_id,
        Supplier_id,
        User_id: user._id,
        termsAndConditions,
        totalProductPrice,
        totalTaxAmount,
        paidAmount: 0,
        pendingAmount: totalProductPrice,
      });
      console.log(data);
      dispatch({ type: "POST_ONE_PROFORMA_DETAIL", payload: { data } });

      toast.success("Successfully added");
    } catch (error) {
      toast.error(error);
    }
  };

  const getProformaDetails = useCallback(async (id) => {
    try {
      // console.log(id);
      console.log("Fetch proforma");
      const { data } = await API.post(`/v1/api/proforma/get/${id}`);
      console.log(data);
      dispatch({ type: "POST_PROFORMA_DETAILS", payload: { data } });
      toast.success("proforma fetched successfully");
    } catch (error) {
      toast.error(error);
    }
  }, []);
  const getProforma_Product_Details = useCallback(async (id) => {
    try {
      // console.log(id);
      // console.log("Fetch proforma");
      const { data } = await API.post(
        `/v1/api/proforma/get/fetchProduct_proformaDetails/${id}`
      );
      console.log(data);
      if (data?.success) {
        dispatch({
          type: "POST_PROFORMA_PRODUCT_DETAILS",
          payload: { data },
        });
        toast.success("proforma & product fetched successfully");
      }
    } catch (error) {
      toast.error(error);
    }
  }, []);

  const updateProformaDetails = async ({
    proforma_Id,
    paidAmount,
    pendingAmount,
  }) => {
    console.log("Hii");
    console.log(proforma_Id);
    console.log(paidAmount);
    console.log(pendingAmount);

    try {
      const { data } = await API.post(
        `/v1/api/proforma/proformadetails/update/${proforma_Id}`,
        { paidAmount, pendingAmount }
      );
      if (data?.success) {
        // const newData = data.AllProducts;
        // setProductData(data.AllProducts);
        // console.log(data.AllProducts);
        // console.log(productData);
        toast.success("Success");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  // ***** proforma ******///////

  //****Supplier Details*/
  const addSupplierDetails = async ({
    firmName,
    companyGstin,
    companyAddress,
    companyEmail,
    dlNo,
    city,
    state,
    pincode,
    mobileNumber,
    companyPan,
    userId,
  }) => {
    const { data } = await API.post(
      "/v1/api/proforma/proformaSupplierdetails/create",
      {
        firmName,
        companyGstin,
        companyAddress,
        companyEmail,
        dlNo,
        city,
        state,
        pincode,
        mobileNumber,
        companyPan,
        userId,
      }
    );

    console.log(data);
    setSupplierDetailsId(data?._id);
    console.log(supplierDetailsId);
    dispatch({
      type: "POST_SUPPLIER_DETAILS",
      payload: {
        data,
      },
    });
  };

  const getSupplierDetails = async (userId) => {
    try {
      // console.log(userId);
      const { data } = await API.post(
        `/v1/api/proforma/proformaSupplierdetails/get/${userId}`
      );
      if (data?.success) {
        // console.log(data.Allbuyer);
        setSupplierData(data.AllSupplier);
        // console.log("buyerData");
        toast.success("Success");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  //****Supplier Details*/

  //****Buyer details */
  const addBuyerDetails = async ({
    companyName,
    companyGstin,
    companyAddress,
    pincode,
    companyMobile,
    companyEmail,
    state,
    dlNo,
    city,
    gstTreatmentType,
    userId,
  }) => {
    const { data } = await API.post(
      "/v1/api/proforma/proformaBuyerdetails/create",
      {
        companyName,
        companyGstin,
        companyAddress,
        pincode,
        companyMobile,
        companyEmail,
        state,
        dlNo,
        city,
        gstTreatmentType,
        userId,
      }
    );
    console.log(data);
    setBuyerDetailsId(data?._id);
    console.log(buyerDetailsId);
    dispatch({
      type: "POST_BUYER_DETAILS",
      payload: {
        data,
      },
    });
  };
  const getBuyerDetails = React.useCallback(
    async (userId) => {
      // handleClickOpen();
      try {
        const { data } = await API.post(
          `/v1/api/proforma/proformaBuyerdetails/get/${userId}`
        );
        if (data?.success) {
          // console.log(data.Allbuyer);
          setBuyerData(data.Allbuyer);
          // console.log("buyerData");
          toast.success("Success");
        }
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    },
    [buyerData]
  );

  const deleteBuyerDetails = async (id) => {
    try {
      await API.post(`/v1/api/proforma/proformaBuyerdetails/delete/${id}`);
      // getBuyerData();
      // console.log("Buyer Deleted");
      toast.success("Deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  //**** END Buyer details *****/

  ///// ***** Product Details *****//////
  const addProductDetails = async ({
    itemName,
    itemDescription,
    hsn,
    quantity,
    unit,
    salePrice,
    discount,
    discountType,
    taxType,
    gst,
    cess,
    _,
    userId,
    final_price,
    paid_amount,
    pending_amount,
  }) =>
    // { productdetails }
    {
      const { data } = await API.post(
        "/v1/api/proforma/proformaProductdetails/create",
        {
          itemName,
          itemDescription,
          hsn,
          quantity,
          unit,
          salePrice,
          discount,
          discountType,
          taxType,
          gst,
          cess,
          _,
          userId,
          final_price,
          paid_amount,
          pending_amount,
        }
      );
      console.log("Product details");
      dispatch({
        type: "POST_PRODUCT_DETAILS",
        payload: {
          data,
        },
      });
      setProductDetailsId(data?._id);
    };

  const getProductDetails = React.useCallback(
    async (userId) => {
      console.log("Hii");
      console.log(userId);
      try {
        const { data } = await API.post(
          `/v1/api/proforma/proformaProductdetails/get/${userId}`
        );
        if (data?.success) {
          // const newData = data.AllProducts;
          setProductData(data.AllProducts);
          // console.log(data.AllProducts);
          // console.log(productData);
          toast.success("Success");
        }
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    },
    [productData]
  );

  const deleteProductDetails = async (e, id) => {
    // e.preventDefault;
    try {
      const { data } = await API.post(
        `/v1/api/proforma/proformaProductdetails/delete/${id}`
      );
      if (data?.success) {
        await getProductDetails(user._id);
        toast.success("Deleted successfully");
      }
      // console.log("Buyer Deleted");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  // **** END Product details **** //

  //  **** TransPort Details **** //
  const addTransportDetails = async ({
    type,
    lrDate,
    lrNumber,
    dateOfSupply,
    placeOfSupply,
    vehicleNumber,
    supplyType,
    userId,
  }) => {
    const { data } = await API.post(
      "/v1/api/proforma/proformaTransportdetails/create",
      {
        type,
        lrDate,
        lrNumber,
        dateOfSupply,
        placeOfSupply,
        vehicleNumber,
        supplyType,
        userId,
      }
    );
    console.log("data");
    console.log(data);
    dispatch({
      type: "POST_TRANSPORT_DETAILS",
      payload: {
        data,
      },
    });
    setTransportDetailsId(data?._id);
  };

  const getTransportDetails = React.useCallback(async (id) => {
    console.log("called");
    try {
      const { data } = await API.post(
        `/v1/api/proforma/proformaTransportdetails/get/${id}`
      );
      // console.log("called");
      if (data?.success) {
        setTransportData(data?.allTransportData);
        // console.log(data?.allTransportData);
        toast.success("Success");
      }
    } catch (e) {
      console.log(e);
      toast.error("Faield");
    }
  });
  //  **** TransPort Details **** //

  //  **** Bank Details **** //

  const addBankDetails = async ({
    accountHolderName,
    accountNumber,
    ifscNumber,
    bankName,
    branchName,
    userId,
  }) => {
    try {
      const { data } = await API.post(
        `/v1/api/proforma/proformaBankdetails/create`,
        {
          accountHolderName,
          accountNumber,
          ifscNumber,
          bankName,
          branchName,
          userId,
        }
      );
      console.log(data);
      dispatch({
        type: "POST_BANK_DETAILS",
        payload: {
          data,
        },
      });
      toast.success("Bank details successfully added");
      setBankDetailsId(data?._id);
    } catch (e) {
      console.log(e);
      toast.error(e);
    }
  };

  const getBankDetails = React.useCallback(async (id) => {
    console.log("called");
    try {
      const { data } = await API.post(
        `/v1/api/proforma/proformaBankdetails/get/${id}`
      );
      // console.log("called");
      if (data?.success) {
        setBankData(data?.allBankData);
        // console.log(data?.allTransportData);
        toast.success("Success");
      }
    } catch (e) {
      console.log(e);
      toast.error("Faield");
    }
  });

  return {
    addProformaDetails,
    getProformaDetails,
    getProforma_Product_Details,
    updateProformaDetails,

    addSupplierDetails,
    getSupplierDetails,
    supplierData,
    setSupplierData,

    addBuyerDetails,
    getBuyerDetails,
    deleteBuyerDetails,
    buyerData,
    setBuyerData,

    addProductDetails,
    getProductDetails,
    deleteProductDetails,
    // updateProductDetails,
    productData,
    setProductData,

    addTransportDetails,
    getTransportDetails,
    transportData,
    setTransportData,

    addBankDetails,
    getBankDetails,
    bankData,
  };
};

export default useProformaApis;
