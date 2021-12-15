import { MenuItem } from "@blueprintjs/core";
import * as React from "react";

export const ListOfSuppliers = 
[
  { 
    id: 1,
    address1: "256 Meadway",
    address2: "Kitts Green",
    city: "Birmingham",
    county: "West Midlands",
    country: "United Kingdom",
    postcode: "B33 8NN"
  }
].map((m, index) => ({ ...m, rank: index + 1 }));

export const renderSupplier = (
  supplier,
  { handleClick, modifiers, query }
) => {
  if (!modifiers.matchesPredicate) {
    return null;
  }
  const text = `${supplier.city}`;
  return (
    <MenuItem
      active={modifiers.active}
      disabled={modifiers.disabled}
      key={supplier.id}
      onClick={handleClick}
      text={highlightText(text, query)}
    />
  );
};

export const filterSupplier = (query, supplier) => {
  return (
    `${supplier.city.toLowerCase()}`.indexOf(
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

export const supplierSelectProps = {
  itemPredicate: filterSupplier,
  itemRenderer: renderSupplier,
  items: ListOfSuppliers
};
