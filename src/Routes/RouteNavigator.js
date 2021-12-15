import {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from "./pages/Home";
import Navigator from './Navigator';
import Orders from './pages/Orders';
import Account from './pages/Account';
import Locations from './pages/Locations';
import Integrations from './pages/Integrations';
import Billing from './pages/Billing';
import Pricing from './pages/Pricing';
import Customers from './pages/Customers';
import SendInventory from './pages/Inventory/SendInventory';
import Products from './pages/Inventory/Products';

const RouteNavigator = ({supplierID, supplierOnBoardingProgress}) => {
  return (
    <div>
      <Router>
        <Fragment>
          <div style={{ display: "flex" }}>
            <Navigator supplierID={supplierID}/>
            <Routes>
              <Route path='/' element={<Home supplierOnBoardingProgress={supplierOnBoardingProgress} />}/>
              <Route path='/orders' element={<Orders supplierID={supplierID}/>}/>
              <Route path='/sendInventory' element={<SendInventory supplierID={supplierID} supplierOnBoardingProgress={supplierOnBoardingProgress} />}/>
              <Route path='/products' element={<Products supplierID={supplierID}/>}/>
              <Route path='/customers' element={<Customers supplierID={supplierID}/>}/>
              <Route path='/pricing' element={<Pricing supplierID={supplierID} supplierOnBoardingProgress={supplierOnBoardingProgress} />}/>
              <Route path='/billing' element={<Billing supplierID={supplierID}/>}/>
              <Route path='/integrations' element={<Integrations supplierID={supplierID} supplierOnBoardingProgress={supplierOnBoardingProgress} />}/>
              <Route path='/locations' element={<Locations supplierID={supplierID}/>}/>
              <Route path='/account' element={<Account supplierID={supplierID}/>}/>
            </Routes>
          </div>
        </Fragment>
      </Router>
    </div>
  );
}

export default RouteNavigator;