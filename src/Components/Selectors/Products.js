import { MenuItem } from "@blueprintjs/core";
import * as React from "react";

export const ListOfProducts = 
[
  { 
    id: 1,
    supplierID: 3.14159,
    title: "Title1",
    imageUrl: "ImageUrl1",
    price: 1.314,
    stock: 19,
    extID: "extID1",
    weightInGrams: 119,
  },
  { 
    id: 2,
    supplierID: 3.14,
    title: "Title2",
    imageUrl: "ImageUrl2",
    price: 2.314,
    stock: 29,
    extID: "extID2",
    weightInGrams: 229,
  }
].map((m, index) => ({ ...m, rank: index + 1 }));

export const renderProduct = (
  product,
  { handleClick, modifiers, query }
) => {
  if (!modifiers.matchesPredicate) {
    return null;
  }
  const text = `${product.title}`;
  return (
    <MenuItem
      active={modifiers.active}
      disabled={modifiers.disabled}
      key={product.id}
      onClick={handleClick}
      text={highlightText(text, query)}
    />
  );
};

export const filterProduct = (query, product) => {
  return (
    `${product.title.toLowerCase()}`.indexOf(
      query.toLowerCase()
    ) >= 0
  );
};

function highlightText(text, query) {
  let lastIndex = 0;
  const words = query
    .split(/\s+/)
    .filter(word => word.length > 0)
    .map(escapeRegExpChars);
  if (words.length === 0) {
    return [text];
  }
  const regexp = new RegExp(words.join("|"), "gi");
  const tokens = [];
  while (true) {
    const match = regexp.exec(text);
    if (!match) {
      break;
    }
    const length = match[0].length;
    const before = text.slice(lastIndex, regexp.lastIndex - length);
    if (before.length > 0) {
      tokens.push(before);
    }
    lastIndex = regexp.lastIndex;
    tokens.push(<strong key={lastIndex}>{match[0]}</strong>);
  }
  const rest = text.slice(lastIndex);
  if (rest.length > 0) {
    tokens.push(rest);
  }
  return tokens;
}

function escapeRegExpChars(text) {
  return text.replace(/([.*+?^=!:${}()|\]\\])/g, "\\$1");
}

export const productSelectProps = {
  itemPredicate: filterProduct,
  itemRenderer: renderProduct,
  items: ListOfProducts
};
