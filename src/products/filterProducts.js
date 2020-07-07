const filterProducts = (products, term) =>
  term && term.length > 0
    ? products.filter(({ name }) =>
        name.toUpperCase().includes(term.toUpperCase())
      )
    : products;

export default filterProducts;
