import { H2, Button } from "@blueprintjs/core";
import axios from "axios";
import { ApiUrl } from '../../Auxillary/Urls';

const Pricing = ({supplierID, supplierOnBoardingProgress}) => {
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  const confirm = () => {
    axios.put(`${ApiUrl}/supplier/onBoardingProgress`, {
      supplierID: supplierID,
      step: supplierOnBoardingProgress[2]
    })
  }

  return (
    <div style={{padding: 30, maxHeight: windowHeight - 200, height: '100%'}}>
      <H2>Pricing</H2>
      <div>
        <table className="bp3-html-table bp3-interactive bp3-html-table-bordered" style={{border: '1px solid #888'}}>
          <thead>
            <tr>
              <th>Size Type (cm)</th>
              <th>Weight</th>
              <th>Price (£)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="5" style={{borderRight: '1px solid lightgrey'}}>Tiny Parcel: 35x25x2.5</td>
              <td>0-100g</td>
              <td>0.75</td>
            </tr>
            <tr>
              <td>100g-250g</td>
              <td>1.00</td>
            </tr>
            <tr>
              <td>250g-500g</td>
              <td>1.20</td>
            </tr>
            <tr>
              <td>500g-750g</td>
              <td>1.60</td>
            </tr>
            <tr>
              <td>750g +</td>
              <td>1.90</td>
            </tr>
            <tr>
              <td rowSpan="2" style={{borderRight: '1px solid lightgrey'}}>Small Parcel: 45x35x16</td>
              <td>0-1kg</td>
              <td>2.10</td>
            </tr>

            <tr>
              <td>1-2kg</td>
              <td>2.40</td>
            </tr>
            <tr>
              <td rowSpan="4" style={{borderRight: '1px solid lightgrey'}}>Medium Parcel: 61x46x46</td>
              <td>0-1kg</td>
              <td>3.10</td>
            </tr>
            <tr>
              <td>1-2kg</td>
              <td>3.50</td>
            </tr>
            <tr>
              <td>2-5kg</td>
              <td>4.00</td>
            </tr>
            <tr>
              <td>5-10kg</td>
              <td>4.30</td>
            </tr>
            <tr>
              <td rowSpan="2" style={{borderRight: '1px solid lightgrey'}}>Large Parcel</td>
              <td>0-10kg</td>
              <td>4.80</td>
            </tr>
            <tr>
              <td>10-20kg</td>
              <td>5.20</td>
            </tr>
          </tbody>
        </table>
        {supplierOnBoardingProgress[2] === true ? (
          <></>
        ) : (
          <Button className="bp3-large" onClick={() => confirm()} style={{marginTop: 20}}>
            Click here to confirm you have read this page
          </Button>)}
      </div>
    </div>
  )
}

export default Pricing;