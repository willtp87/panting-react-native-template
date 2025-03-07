import { ThemeProvider, DefaultTheme } from "@react-navigation/native";
import { render, screen, act } from "@testing-library/react-native";
import React from "react";
import { Provider } from "react-redux";

import TimeInApp from ".";
import { store } from "../../store";

describe("<TimeInApp />", () => {
  it("increments the timer each second", () => {
    render(
      <ThemeProvider value={DefaultTheme}>
        <Provider store={store}>
          <TimeInApp />
        </Provider>
      </ThemeProvider>,
    );
    expect(screen.getByText("0", { exact: false }));

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText("1", { exact: false }));

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText("2", { exact: false }));

    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(screen.getByText("2", { exact: false }));

    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(screen.getByText("3", { exact: false }));
  });

  it("clears the interval when the component is unmounted", () => {
    const clearIntervalMock = jest.spyOn(window, "clearInterval");
    const { unmount } = render(
      <ThemeProvider value={DefaultTheme}>
        <Provider store={store}>
          <TimeInApp />
        </Provider>
      </ThemeProvider>,
    );

    unmount();
    expect(clearIntervalMock).toHaveBeenCalled();
  });
});
