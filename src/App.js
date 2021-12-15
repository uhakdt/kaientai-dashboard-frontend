import { useState } from 'react';
import RouteNavigator from "./Routes/RouteNavigator";
import { useAuth0 } from "@auth0/auth0-react";
import StartupPage from "./Routes/pages/StartupPage";
import axios from "axios";
import { ApiUrl } from './Auxillary/Urls';

const App = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  const [supplier, setSupplier] = useState(null);

  if(isLoading) {
    return (
      <div style={{justifyContent: 'center', display: 'flex', fontSize: 32, fontWeight: 'bold', paddingTop: 100}}>
        Just a second...
      </div>
    )
  }

  if(isAuthenticated && supplier === null) {
    axios.post(`${ApiUrl}/supplier/${user.email}`).then(resp => {
      setSupplier(resp.data.data.supplier);
    }).catch(err => {
      console.log(err)
    })
  }

  if(supplier != null) {
    return (
      <div className="App" style={{height: windowHeight}}>
        <RouteNavigator supplierID={supplier.id} supplierOnBoardingProgress={supplier.onBoardingProgress}></RouteNavigator>
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