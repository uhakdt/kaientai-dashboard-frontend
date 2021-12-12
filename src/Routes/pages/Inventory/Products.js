import { H2 } from "@blueprintjs/core";
import { getProducts, initiateSocketConnection, disconnectSocket } from "../../../Services/WebSocket";
import { useEffect, useState } from "react";
import { filterBySupplier } from "../../../Auxillary/FilterData";

const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const Products = ({supplierID}) => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    initiateSocketConnection();
    getProducts((err, data) => {
      const productsRes = filterBySupplier(JSON.parse(data), supplierID);
      setProducts(productsRes);
    });
    return () => {
      disconnectSocket();
    }
  }, [supplierID]);

  return (
    <div style={{padding: 30, maxHeight: windowHeight - 200, height: '100%'}}>
      <H2>Products</H2>
      <div>
        <table className="bp3-html-table bp3-interactive bp3-html-table-bordered" style={{border: '1px solid #888'}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((e) => (
              <tr key={e.id}>
                <td>{e.extID}</td>
                <td>{e.title}</td>
                <td>{e.price}</td>
                <td>{e.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Products;