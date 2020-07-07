import { mount } from "enzyme";
import React from "react";

import ProductItem from "../ProductItem";

const productData = [
  {
    id: "082",
    name: "Alfalfa Sprouts",
    sold: 2958,
    unitPrice: 11.29,
  },
  {
    id: "027",
    name: "Apple",
    sold: 5884,
    unitPrice: 9.81,
  },
  {
    id: "048",
    name: "Apricot",
    sold: 4970,
    unitPrice: 13.71,
  },
];

it("renders rows with formatted revenue", () => {
  const table = mount(<ProductItem productData={productData} />);
  const tableData = table
    .find("tr")
    .map((tr) => tr.find("td").map((td) => td.text()));
  expect(tableData).toEqual([
    ["Alfalfa Sprouts", "33,395.82"],
    ["Apple", "57,722.04"],
    ["Apricot", "68,138.70"],
  ]);
});
