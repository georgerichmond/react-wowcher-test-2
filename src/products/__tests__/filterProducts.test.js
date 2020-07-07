import filterProducts from "../filterProducts";

const products = [
  {
    name: "Bok Choy",
  },
  {
    name: "Boniato",
  },
  {
    name: "Green Beans",
  },
  {
    name: "Casaba Melon",
  },
];

it("no filter when term undefined", async () => {
  const result = filterProducts(products);
  expect(result).toEqual(products);
});

it("no filter when term empty string", async () => {
  const result = filterProducts(products, "");
  expect(result).toEqual(products);
});

it("filters when case matches", async () => {
  const result = filterProducts(products, "Bo");
  expect(result).toEqual([
    {
      name: "Bok Choy",
    },
    {
      name: "Boniato",
    },
  ]);
});

it("filters when case doesn't match", async () => {
  const result = filterProducts(products, "cA");
  expect(result).toEqual([
    {
      name: "Casaba Melon",
    },
  ]);
});
