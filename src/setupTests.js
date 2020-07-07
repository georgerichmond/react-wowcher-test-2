import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import "jest-enzyme";
import branch1 from "../public/api/branch1.json";
import branch2 from "../public/api/branch2.json";
import branch3 from "../public/api/branch3.json";

configure({
  adapter: new Adapter(),
});

const responses = {
  "api/branch1.json": branch1,
  "api/branch2.json": branch2,
  "api/branch3.json": branch3,
  "/api/branch1.json": branch1,
  "/api/branch2.json": branch2,
  "/api/branch3.json": branch3,
};

global.fetch = (endpoint) =>
  Promise.resolve({
    json: () => Promise.resolve(responses[endpoint]),
  });
