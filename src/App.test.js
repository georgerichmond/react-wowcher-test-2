import React from "react";
import { mount } from "enzyme";
import App from "./App";
import { flushRequestsAndUpdate } from "./testHelpers";

it("renders without crashing", () => {
  mount(<App />);
});

it("renders loading text initially", async () => {
  const app = mount(<App />);
  expect(app).toHaveText("Loading...");
});

it("renders a table after data load", async () => {
  const app = mount(<App />);
  expect(app).toHaveText("Loading...");
  await flushRequestsAndUpdate(app);
  expect(app.find("table")).toExist();
});

it("renders rows with product name as key", async () => {
  const app = mount(<App />);
  await flushRequestsAndUpdate(app);

  expect(app.find("table tbody tr").at(56).key()).toEqual("Hominy");
  expect(app.find("table tbody tr").at(73).key()).toEqual("Lychee");
});

// Had to update the snapshot as the figures in it seem to be wrong, and total doesn't match total test
// I would probably not use a snapshot test for this sort of thing in any case
it("renders table that is sorted ascending", async () => {
  const app = mount(<App />);
  await flushRequestsAndUpdate(app);
  expect(app.find("table")).toMatchSnapshot();
});

it("calculates total revenue of all branches", async () => {
  const app = mount(<App />);
  await flushRequestsAndUpdate(app);
  expect(app.find("tfoot td:last-child").text()).toEqual("2,102,619.44");
});

it("filters the displayed products", async () => {
  const app = mount(<App />);
  await flushRequestsAndUpdate(app);
  const changeEvent = { target: { value: "pear" } };
  app.find("input").simulate("change", changeEvent);
  expect(app.find("tfoot td:last-child").text()).toEqual("60,681.02");
});
