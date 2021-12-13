import { useState } from 'react';
import RouteNavigator from "./Routes/RouteNavigator";
import { useAuth0 } from "@auth0/auth0-react";
import StartupPage from "./Routes/pages/StartupPage";
import axios from "axios";
import { API_URL } from './Auxillary/Urls';

const App = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  const [supplierID, setSupplierID] = useState(null);

  if(isAuthenticated) {
    axios.post(`${API_URL}/supplier/${user.email}`).then(resp => {
      setSupplierID(resp.data.data.supplier.id);
    }).catch(err => {
      console.log(err)
    })
  }

  if(isLoading) {
    return (
      <div style={{justifyContent: 'center', display: 'flex', fontSize: 32, fontWeight: 'bold', paddingTop: 100}}>
        Just a second...
      </div>
    )
  }

  if(isAuthenticated && supplierID != null) {
    return (
      <div className="App" style={{height: windowHeight}}>
        <RouteNavigator supplierID={supplierID}></RouteNavigator>
      </div>
    )
  } else {
    return (
      <div className="App" style={{height: windowHeight}}>
        <StartupPage />
      </div>
    )
  }
}

export default App;