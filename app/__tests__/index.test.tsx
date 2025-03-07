import { ThemeProvider, DefaultTheme } from "@react-navigation/native";
import { userEvent } from "@testing-library/react-native";
import { renderRouter, screen } from "expo-router/testing-library";
import React from "react";
import { Provider } from "react-redux";

import { store } from "../../store";
import Index from "../index";

describe("<Index />", () => {
  it("can navigate to settings", async () => {
    const user = userEvent.setup();

    renderRouter({
      index: () => (
        <ThemeProvider value={DefaultTheme}>
          <Provider store={store}>
            <Index />
          </Provider>
        </ThemeProvider>
      ),
    });

    await user.press(screen.getByTestId("settings"));
    expect(screen).toHavePathname("/settings");
  });
});
