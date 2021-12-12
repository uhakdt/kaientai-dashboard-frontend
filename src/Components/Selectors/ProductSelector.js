import * as React from "react";
import { Button, MenuItem } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";

import * as Products from "./Products";

const ProductSelect = Select.ofType();


export class ProductSelector extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      product: Products.ListOfProducts[0]
    };
  }
  render() {
    const buttonText = this.state.product.title;
    return (
      <ProductSelect
        items={Products.ListOfProducts}
        itemPredicate={Products.filterProduct}
        itemRenderer={Products.renderProduct}
        noResults={<MenuItem disabled={true} text="No results." />}
        onItemSelect={this.handleValueChange}
      >
        <Button text={buttonText} />
      </ProductSelect>
    );
  }

  handleValueChange = (product) => this.setState({ product });
}
