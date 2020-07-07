export const fetchBranches = () =>
  Promise.all(
    [1, 2, 3].map((i) =>
      fetch(`/api/branch${i}.json`).then((response) => response.json())
    )
  );

const compareByName = (a, b) => a.name.localeCompare(b.name);

const productReducer = (accumulator, currentProduct) => {
  const existingProduct = accumulator[currentProduct.id];
  const sold = existingProduct
    ? currentProduct.sold + existingProduct.sold
    : currentProduct.sold;
  return { ...accumulator, [currentProduct.id]: { ...currentProduct, sold } };
};

export const aggregateProducts = (branchResponses) => {
  const productsObj = branchResponses
    .map((branch) => branch.products)
    .flat()
    .reduce(productReducer, {});
  return Object.values(productsObj).sort(compareByName);
};

const loadProductData = () => fetchBranches().then(aggregateProducts);

export default loadProductData;
