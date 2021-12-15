import { H2, H4, Button, Card } from "@blueprintjs/core";
import ProductSelector from "../../../Components/Selectors/ProductSelector";
import SupplierSelector from "../../../Components/Selectors/SupplierSelector";
import axios from "axios";
import { ApiUrl } from "../../../Auxillary/Urls";

const SendInventory = ({supplierID, supplierOnBoardingProgress}) => {

  const confirm = () => {
    axios.put(`${ApiUrl}/supplier/onBoardingProgress`, {
      supplierID: supplierID,
      step: supplierOnBoardingProgress[3]
    })
  }

  return (
    <div>
      <div style={{padding: 30}}>
        <H2>Send us your inventory</H2>
        <div>
          {/* SELECT FULFILMENT CENTER */}
          <div style={{ width: "100%", height: "100%", margin: 0 }}>
            <Card>
              <H4>Locate Fulfilment Center to send too</H4>
              <div style={{paddingTop: 20}}><SupplierSelector></SupplierSelector> <br /></div>
            </Card>
          </div>

          {/* ITEMS TO SEND */}
          <div style={{ width: "100%", height: "100%", margin: 0 }}>
            <Card>
              <H4>Select items to send</H4>
              <div style={{paddingTop: 20}}><ProductSelector></ProductSelector> <br /></div>
            </Card>
          </div>

          {/* REVIEW AND SUBMIT ORDER */}
          <div style={{paddingTop: 20}}><Button onClick={() => confirm()} rightIcon="arrow-right" intent="success" text="Submit" /></div>

        </div>
      </div>
    </div>
  )
}

export default SendInventory;

