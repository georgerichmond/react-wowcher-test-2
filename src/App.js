import React, { useEffect, useState } from "react";

import loadProductData from "./products/loadProductData";
import ProductItem from "./ProductItem";
import { formattedTotal } from "./util";
import filterProducts from "./products/filterProducts";

import "./App.css";

const App = () => {
  const [dataState, setDataState] = useState({ loading: true });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadProductData().then((productData) =>
      setDataState({ loading: false, productData })
    );
  }, []);

  if (dataState.loading) return <div>Loading...</div>;

  const productData = filterProducts(dataState.productData, searchTerm);

  return (
    <div className="product-list">
      <div className="search-container">
        <label htmlFor="search-term">Search Products</label>
        <input
          id="search-term"
          type="text"
          onChange={({ target }) => setSearchTerm(target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          <ProductItem productData={productData} />
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{formattedTotal(productData)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default App;
