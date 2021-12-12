import { Icon, ProgressBar, Card, H3, H2, H4, H5 } from "@blueprintjs/core";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({supplierID}) => {
  const [integrateStoreBool] = useState(false);
  const [pricesBool] = useState(false);
  const [sendInventoryBool] = useState(false);
  
  const [bools] = useState([integrateStoreBool,pricesBool,sendInventoryBool])
  const [value] = useState((bools.reduce((total, item) => total + Number(item), 0))/3);

  return (
    <div>
      <div style={{display: 'block', width: 400, padding: 30}}>
        <H2>Welcome to Kaientai</H2>
        <div style={{paddingTop: 30, paddingBottom: 40}}>
          <ProgressBar animate={false} intent={"success"} value={value} stripes={false} />
        </div>
        <div>
          <div style={{paddingTop: 20, display: 'flex'}}>
            {integrateStoreBool ? <Icon icon="tick-circle" size={30}/> : <Icon icon="circle" size={30}/>}
            <Link style={{color: "black", paddingLeft: 20, fontSize: 24, textDecoration: 'none'}} to="/">Integrate your store</Link>
          </div>
          <div style={{paddingTop: 20, display: 'flex'}}>
            {pricesBool ? <Icon icon="tick-circle" size={30}/> : <Icon icon="circle" size={30}/>}
            <Link style={{color: "black", paddingLeft: 20, fontSize: 24, textDecoration: 'none'}} to="/pricing">See our Prices</Link>
          </div>
          <div style={{paddingTop: 20, display: 'flex'}}>
            {sendInventoryBool ? <Icon icon="tick-circle" size={30}/> : <Icon icon="circle" size={30}/>}
            <Link style={{color: "black", paddingLeft: 20, fontSize: 24, textDecoration: 'none'}} to="/sendInventory">Send us your inventory</Link>
          </div>
        </div>
      </div>
      <div style={{position: 'fixed', bottom: 50, right: 50}}>
        <Card interactive={false} style={{textAlign: 'center', borderRadius: 10}}>
            <H3>We are here to support you!</H3>
            <H5>We will respond as quickly as the laws of physics allow.</H5>
            <H4>07455025053<br />contact@kaientai.co.uk</H4>
        </Card>
      </div>
    </div>
  )
}

export default Home;