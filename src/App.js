import React, { useEffect, useState } from "react";
import loadProductData from "./products/loadProductData";

import "./App.css";
import ProductItem from "./ProductItem";
import { formattedTotal } from "./util";

const App = () => {
  const [state, setState] = useState({ loading: true });

  useEffect(() => {
    loadProductData().then((productData) =>
      setState({ loading: false, productData })
    );
  }, []);

  if (state.loading) return <div>Loading...</div>;

  return (
    <div className="product-list">
      <label>Search Products</label>
      <input type="text" />

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          <ProductItem productData={state.productData} />
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{formattedTotal(state.productData)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default App;
