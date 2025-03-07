import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import React from "react";
import "intl-pluralrules";
import "../i18n/i18n";

import { useAppSelector } from "../store/hooks";
import { selectSettings } from "../store/settingsSlice";
import withStore from "../store/withStore";

// Top-level component.
const Wrapper = function App() {
  const settings = useAppSelector(selectSettings);

  return (
    <ThemeProvider value={settings.darkTheme ? DarkTheme : DefaultTheme}>
      <Stack />
    </ThemeProvider>
  );
};

export default withStore(Wrapper);
