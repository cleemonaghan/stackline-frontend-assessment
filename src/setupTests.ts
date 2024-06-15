// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

jest.mock("@mui/x-charts", () => ({
  LineChart: jest.fn().mockImplementation(({ children }) => children),
}));
jest.mock("@mui/x-charts/LineChart", () => ({
  lineElementClasses: jest.fn().mockImplementation(({ children }) => children),
  markElementClasses: jest.fn().mockImplementation(({ children }) => children),
}));
