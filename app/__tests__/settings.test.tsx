import { ThemeProvider, DefaultTheme } from "@react-navigation/native";
import { render, screen } from "@testing-library/react-native";
import React from "react";
import { Provider } from "react-redux";

import { store } from "../../store";
import Settings from "../settings";

describe("<Settings />", () => {
  it("has dark mode", () => {
    render(
      <ThemeProvider value={DefaultTheme}>
        <Provider store={store}>
          <Settings />
        </Provider>
      </ThemeProvider>,
    );
    expect(screen.getByText("Dark mode:"));
  });
  it("has expected number of children", () => {
    const tree: any = render(
      <ThemeProvider value={DefaultTheme}>
        <Provider store={store}>
          <Settings />
        </Provider>
      </ThemeProvider>,
    ).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
