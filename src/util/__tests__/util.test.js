import { formatNumber, formattedTotal } from "../index";

describe("formatNumber", () => {
  it("returns a string in the required format", () => {
    expect(formatNumber(34534.21)).toBe("34,534.21");
  });
});

describe("formattedTotal", () => {
  it("returns a string containing the total of all items in the required format", () => {
    const productData = [
      {
        sold: 2958,
        unitPrice: 11.29,
      },
      {
        sold: 5884,
        unitPrice: 9.81,
      },
      {
        sold: 4970,
        unitPrice: 13.71,
      },
    ];

    expect(formattedTotal(productData)).toBe("159,256.56");
  });
});
