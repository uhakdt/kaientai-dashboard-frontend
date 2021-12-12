import { MenuItem } from "@blueprintjs/core";
import * as React from "react";

export const ListOfProducts = 
[
  { 
    id: 1,
    supplierID: 1,
    title: "1",
    imageUrl: "1",
    price: 1,
    stock: 1,
    extID: "1",
    weightInGrams: 1,
  },
  { 
    id: 2,
    supplierID: 2,
    title: "2",
    imageUrl: "2",
    price: 2,
    stock: 2,
    extID: "2",
    weightInGrams: 2,
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
      label={product.title.toString()}
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
