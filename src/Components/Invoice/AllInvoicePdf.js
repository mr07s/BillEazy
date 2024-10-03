import React from "react";
import useInvoiceApis from "../hooks/invoice.hooks";

const AllInvoicePdf = () => {
  const { getInvoiceDetails } = useInvoiceApis();
  // const handleSubmit = useCallback(() => {
  //   getInvoiceDetails(user._id);
  // }, []);

  useEffect(() => {
    getInvoiceDetails(user?._id);

    // return () => {
    //   window.removeEventListener("load", getInvoiceDetails(user._id));
    // };
  }, [getInvoiceDetails, user?._id]);

  return (
    <>
      AllInvoicePdf
      <div>AllInvoicePdf</div>
    </>
  );
};

export default AllInvoicePdf;
