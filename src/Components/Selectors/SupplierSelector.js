import * as React from "react";
import { Button, MenuItem } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";

import * as Suppliers from "./Suppliers";

const SupplierSelect = Select.ofType();


export class SupplierSelector extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      supplier: Suppliers.ListOfSuppliers[0]
    };
  }
  render() {
    const buttonText = this.state.supplier.city;
    return (
      <SupplierSelect
        items={Suppliers.ListOfSuppliers}
        itemPredicate={Suppliers.filterSupplier}
        itemRenderer={Suppliers.renderSupplier}
        noResults={<MenuItem disabled={true} text="No results." />}
        onItemSelect={this.handleValueChange}
      >
        <Button text={buttonText} />
      </SupplierSelect>
    );
  }

  handleValueChange = (supplier) => this.setState({ supplier });
}
