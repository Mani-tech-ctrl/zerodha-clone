import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://zerodha-clone-41jg.onrender.com/allOrders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (orders.length === 0) {
    return (
      <div className="orders">
        <p>No orders yet</p>
      </div>
    );
  }

  return (
    <div className="orders">
      <h3>Orders</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o, i) => (
            <tr key={i}>
              <td>{o.name}</td>
              <td>{o.qty}</td>
              <td>{o.price}</td>
              <td>{o.mode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
