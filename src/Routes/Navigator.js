import { Link } from "react-router-dom"
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import 'react-pro-sidebar/dist/css/styles.css';
import { Icon } from "@blueprintjs/core";
import { useAuth0 } from "@auth0/auth0-react";

import { CustomerPortalUrl } from '../Auxillary/Urls.js';

const Navigator = ({supplierID}) => {
  const { logout } = useAuth0()
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  return(
    <ProSidebar style={{height: windowHeight, backgroundColor: 'white'}}>
      <SidebarHeader>
        <div>
          <Link to="/">
            <img src="https://kaientai-design.s3.eu-west-2.amazonaws.com/Logo/Logo+-+White.png" alt="" style={{height: 50, margin: 15}}/>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem icon={<Icon icon="home" color="white" size={30} style={{backgroundColor: '#293039'}}/>}><Link to="/">Home</Link></MenuItem>
          <MenuItem icon={<Icon icon="shopping-cart" color="white" size={30} />}><Link to="/orders">Orders</Link></MenuItem>
          <SubMenu icon={<Icon icon="full-stacked-chart" color="white" size={30} />} title="Inventory">
            <MenuItem><Link to="/products">Products</Link></MenuItem>
            <MenuItem><Link to="/sendInventory">Send us your inventory</Link></MenuItem>
          </SubMenu>
          <MenuItem icon={<Icon icon="people" color="white" size={30} />}><Link to="/customers">Customers</Link></MenuItem>
          <MenuItem icon={<Icon icon="calculator" color="white" size={30} />}><Link to="/pricing">Pricing</Link></MenuItem>
          <MenuItem icon={<Icon icon="tag" color="white" size={30} />}><a href={CustomerPortalUrl + supplierID}>Billing</a></MenuItem>
          <MenuItem icon={<Icon icon="rocket-slant" color="white" size={30} />}><Link to="/integrations">Integrations</Link></MenuItem>
          <MenuItem icon={<Icon icon="map-marker" color="white" size={30} />}><Link to="/locations">Locations</Link></MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <Menu>
          <div style={{display: "flex", alignItems: 'center', cursor: 'pointer'}}>
            <Icon style={{paddingLeft: 20}} icon="log-out" color="white" size={20} onClick={() => logout()} />
            <MenuItem><Link to="/account">Account</Link></MenuItem>
          </div>
        </Menu>
      </SidebarFooter>
    </ProSidebar>
  )
}

export default Navigator;