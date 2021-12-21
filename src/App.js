import { useState } from 'react';
import RouteNavigator from "./Routes/RouteNavigator";
import { useAuth0 } from "@auth0/auth0-react";
import StartupPage from "./Routes/pages/StartupPage";
import axios from "axios";
import { ApiUrl, BackendUrl } from './Auxillary/Urls';

const App = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  const [supplier, setSupplier] = useState(null);
  const [shopifySession, setShopifySession] = useState(null);

  if(isLoading) {
    return (
      <div style={{justifyContent: 'center', display: 'flex', fontSize: 32, fontWeight: 'bold', paddingTop: 100}}>
        Just a second...
      </div>
    )
  }

  if(isAuthenticated && supplier === null) {
    axios.post(`${ApiUrl}/supplier/${user.email}`).then(resp => {
      axios.post(`${ApiUrl}/shopifySession/checkExpiry`, {
        supplierID: resp.data.data.supplier.id,
        domain: null
      })
      .then(resp => {
        console.log(resp.status)
        if(resp.status === 200) {
          setShopifySession(resp.data.data.shopifySession)
        } else if(resp.status === 204) {
          console.log("ID did not match.")
        }
      })
      .catch(error => { 
        console.log(error);
        window.location.href = `${BackendUrl}`;
      })

      setSupplier(resp.data.data.supplier);
    })
    .catch(error => { console.log(error) })
  }

  if(supplier != null) {
    return (
      <div className="App" style={{height: windowHeight}}>
        <RouteNavigator supplierID={supplier.id} supplierOnBoardingProgress={supplier.onBoardingProgress} shopifySession={shopifySession}></RouteNavigator>
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