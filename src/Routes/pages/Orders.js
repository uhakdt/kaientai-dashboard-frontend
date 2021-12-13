import { H2 } from "@blueprintjs/core";
import { getOrders, initiateSocketConnection, disconnectSocket } from "../../Services/WebSocket";
import { useEffect, useState } from "react";
import { filterBySupplier } from "../../Auxillary/FilterData";

const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const Orders = ({supplierID}) => {
  const [orders, setOrders] = useState([])
  
  useEffect(() => {
    initiateSocketConnection();
    getOrders((err, data) => {
      const ordersRes = filterBySupplier(JSON.parse(data), supplierID);
      setOrders(ordersRes);
    });
    return () => {
      disconnectSocket();
    }
  }, [supplierID]);

  return (
    <div style={{padding: 30, maxHeight: windowHeight - 200, height: '100%'}}>
      <H2>Orders</H2>
      <div>
        <table className="bp3-html-table bp3-interactive bp3-html-table-bordered" style={{border: '1px solid #888'}}>
          <thead>
            <tr>
              <th>OrderID</th>
              <th>Date & Time</th>
              <th>Customer</th>
              <th>Source</th>
              <th>Fulfilment Cost</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.dateAndTime}</td>
                <td>{e.contactName}</td>
                <td>Shopify</td>
                <td>{(e.totalAmount * 0.1).toFixed(2)}</td>
                <td>{e.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders;