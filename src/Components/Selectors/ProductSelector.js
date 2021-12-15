import React, { useState } from "react";
import { Button, MenuItem } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";

import * as Products from "./Products";

const ProductSelect = Select.ofType();

const ProductSelector = () => {
  const [product, setProduct] = useState(Products.ListOfProducts[0])

  const handleValueChange = (product) => {
    setProduct(product)
  };

  const buttonText = product.title;
  return(
    <ProductSelect
      items={Products.ListOfProducts}
      itemPredicate={Products.filterProduct}
      itemRenderer={Products.renderProduct}
      noResults={<MenuItem disabled={true} text="No results." />}
      onItemSelect={handleValueChange}
    >
      <Button text={buttonText} />
    </ProductSelect>
  )
}

export default ProductSelector;