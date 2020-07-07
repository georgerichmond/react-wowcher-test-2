export const formatNumber = (number) =>
  new Intl.NumberFormat("en", { minimumFractionDigits: 2 }).format(number);

export const formattedTotal = (productData) =>
  formatNumber(
    productData.reduce(
      (total, { sold, unitPrice }) => total + sold * unitPrice,
      0
    )
  );
