import getProducts, { fetchBranches, aggregateProducts } from "../getProducts";

describe("fetchBranches", () => {
  it("returns all 3 branches in an array", async () => {
    const result = await fetchBranches();
    expect(result.map(({ branchId }) => branchId)).toEqual(["b1", "b2", "b3"]);
    expect(result[0].products[0].name).toBe("Bok Choy");
  });
});

describe("getProducts", () => {
  it("returns a set of products in alphabetical order", async () => {
    const result = await getProducts();
    expect(result.slice(0, 3).map(({ name }) => name)).toEqual([
      "Alfalfa Sprouts",
      "Apple",
      "Apricot",
    ]);
  });

  it("aggregates number sold", async () => {
    const result = await getProducts();
    expect(result.slice(0, 3).map(({ sold }) => sold)).toEqual([
      1106,
      1512,
      1506,
    ]);
  });
});
