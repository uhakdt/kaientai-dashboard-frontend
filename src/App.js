import { useState } from 'react';
import RouteNavigator from "./Routes/RouteNavigator";
import { useAuth0 } from "@auth0/auth0-react";
import StartupPage from "./Routes/pages/StartupPage";
import axios from "axios";
import { ApiUrl, HostUrlParams } from './Auxillary/GlobalVariables';

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
    axios.get(`${ApiUrl}/supplier/email/${user.email}`).then(resp => {
      axios.post(`${ApiUrl}/supplier/shopifySession`, {
        domain: HostUrlParams.get('shop'),
        shopifySession: HostUrlParams.get('host')
      })
      .then(respSession => {
        setShopifySession(respSession.data.data.supplier.shopifySession);
      })
      .catch(error => { console.log(error) });
      setSupplier(resp.data.data.supplier);
    })
    .catch(error => { console.log(error) })
  }

  if(supplier != null && shopifySession != null) {
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