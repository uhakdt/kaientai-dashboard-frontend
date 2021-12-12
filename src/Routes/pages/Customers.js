import { H2 } from "@blueprintjs/core";
import { getUsers, initiateSocketConnection, disconnectSocket } from "../../Services/WebSocket";
import { useEffect, useState } from "react";
import { filterBySupplier } from "../../Auxillary/FilterData";

const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const Customers = ({supplierID}) => {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    initiateSocketConnection();
    getUsers((err, data) => {
      const usersRes = filterBySupplier(JSON.parse(data), supplierID);
      setUsers(usersRes);
    });
    return () => {
      disconnectSocket();
    }
  }, [supplierID]);


  return (
    <div style={{padding: 30, maxHeight: windowHeight - 200, height: '100%'}}>
      <H2>Customers</H2>
      <div>
        <table className="bp3-html-table bp3-interactive bp3-html-table-bordered" style={{border: '1px solid #888'}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {users.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Customers;