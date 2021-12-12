import { H2 } from "@blueprintjs/core";

const Integrations = ({supplierID}) => {
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  return (
    <div style={{padding: 30, maxHeight: windowHeight - 200, height: '100%'}}>
      <H2>Integrations</H2>
      <div>
        <table className="bp3-html-table bp3-interactive bp3-html-table-bordered" style={{border: '1px solid #888'}}>
          <thead>
            <tr>
              <th>OrderID</th>
              <th>Date & Time</th>
              <th>Customer</th>
              <th>Source</th>
              <th>Fulfilment Cost</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {[1,2,3,4,5].map((e) => (
              <tr key={e.id}>
                <td>Blueprint, {e}</td>
                <td>CSS framework and UI toolkit</td>
                <td>Sass, TypeScript, React</td>
                <td>268</td>
                <td>268</td>
                <td>268</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Integrations;