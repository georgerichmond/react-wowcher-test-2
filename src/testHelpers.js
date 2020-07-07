import { act } from "react-dom/test-utils";

// based on https://blog.pragmatists.com/genuine-guide-to-testing-react-redux-applications-6f3265c11f63
const flushAllPromises = () => new Promise((resolve) => setImmediate(resolve));

export const flushRequestsAndUpdate = async (enzymeWrapper) => {
  // Need this await act to fix warning - not wrapped in act(...)
  await act(async () => {
    await flushAllPromises();
    enzymeWrapper.update();
  });
};
