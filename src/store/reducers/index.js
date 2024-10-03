import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import { SupplierReducer } from "./Invoice/invoice.supplier.details.reducer";
import { BuyerReducer } from "./Invoice/invoice.buyer.details.reducer";
import { ProductReducer } from "./Invoice/invoice.products.details";
import { TransportReducer } from "./Invoice/invoice.transport.details.reducer";
import { BankReducer } from "./Invoice/invoice.bank.details.reducer";
import { InvoicesReducer } from "./Invoice/invoices.reducer";
import { Invoice_Product_Reducer } from "./Invoice/invoice_product.reducer";
import { Single_Invoice_Reducer } from "./Invoice/single.invoice.reducer";
import { DeliveryChallanBuyerReducer } from "./Delivery_Challan/delivery.challan.buyer.details.reducer";
import { DeliveryChallanProductReducer } from "./Delivery_Challan/delivery.challan.product.details.reducer";
import { DeliveryChallanReducer } from "./Delivery_Challan/delivery.challan.reducer";
import { DeliveryChallanSupplierReducer } from "./Delivery_Challan/delivery.challan.supplier.details.reducer";
import { DeliveryChallanTransportReducer } from "./Delivery_Challan/delivery.challan.transport.details.reducer";
import { ProformaBankReducer } from "./proforma/proforma.bank.details.reducer";
import { ProformaBuyerReducer } from "./proforma/proforma.buyer.details.reducer";
import { ProformaProductReducer } from "./proforma/proforma.product.details.reducer";
import { ProformaReducer } from "./proforma/proforma.reducer";
import { ProformaSupplierReducer } from "./proforma/proforma.supplier.details.reducer";
import { ProformaTransportReducer } from "./proforma/proforma.transport.details.reducer";

export default combineReducers({
  authReducer,
  SupplierReducer,
  BuyerReducer,
  ProductReducer,
  TransportReducer,
  BankReducer,
  InvoicesReducer,
  Invoice_Product_Reducer,
  Single_Invoice_Reducer,
  DeliveryChallanBuyerReducer,
  DeliveryChallanProductReducer,
  DeliveryChallanReducer,
  DeliveryChallanSupplierReducer,
  DeliveryChallanTransportReducer,

  ProformaBankReducer,
  ProformaBuyerReducer,
  ProformaProductReducer,
  ProformaReducer,
  ProformaSupplierReducer,
  ProformaTransportReducer,
});
