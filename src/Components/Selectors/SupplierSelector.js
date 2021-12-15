import React, { useState } from "react";
import { Button, MenuItem } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";

import * as Suppliers from "./Suppliers.js";

const SupplierSelect = Select.ofType();

const SupplierSelector = () => {
  const [supplier, setSupplier] = useState(Suppliers.ListOfSuppliers[0])

  const handleValueChange = (supplier) => {
    setSupplier(supplier)
  };

  const buttonText = supplier.city;
  return(
    <SupplierSelect
      items={Suppliers.ListOfSuppliers}
      itemPredicate={Suppliers.filterSupplier}
      itemRenderer={Suppliers.renderSupplier}
      noResults={<MenuItem disabled={true} text="No results." />}
      onItemSelect={handleValueChange}
    >
      <Button text={buttonText} />
    </SupplierSelect>
  )
}

export default SupplierSelector;
