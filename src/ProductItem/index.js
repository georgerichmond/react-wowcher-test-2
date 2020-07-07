import React from "react";
import { formatNumber } from "../util";

const ProductItem = ({ productData }) => (
  <>
    {productData.map(({ name, sold, unitPrice }) => (
      <tr key={name}>
        <td>{name}</td>
        <td>{formatNumber(sold * unitPrice)}</td>
      </tr>
    ))}
  </>
);

export default ProductItem;
