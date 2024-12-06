// Make toBeInTheDocument() available globally.
import "@testing-library/jest-dom";

// https://github.com/callstack/react-native-paper/issues/4561
jest.mock("expo-font");

// https://github.com/expo/expo/issues/27496
jest.mock("expo-localization", () => ({
  ...jest.requireActual("expo-localization"),
  getLocales: jest.fn(() => {
    return [{ languageCode: "en" }];
  }),
}));

// Mock useNavigation hook. So that we can test components that use it.
jest.mock("expo-router", () => ({
  ...jest.requireActual("expo-router"),
  useNavigation: jest.fn(() => {
    return { setOptions: jest.fn() };
  }),
}));

// Mock AsyncStorage.
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);
