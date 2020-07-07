export const fetchBranches = () =>
  Promise.all(
    [1, 2, 3].map((i) =>
      fetch(`/api/branch${i}.json`).then((response) => response.json())
    )
  );

const compareByName = (a, b) => a.name.localeCompare(b.name);

const productReducer = (accumulator, currentProduct) => {
  const existingProduct = accumulator[currentProduct.id];
  if (existingProduct) {
  } else {
    accumulator[currentProduct.id] = currentProduct;
  }
  return accumulator;
};

export const aggregateProducts = (branchResponses) => {
  const products = branchResponses
    .map((branch) => branch.products)
    .flat()
    .reduce(productReducer, {});
  return Object.values(products).sort(compareByName);
};

const getProducts = () => fetchBranches().then(aggregateProducts);

export default getProducts;
