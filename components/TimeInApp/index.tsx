import { useTheme } from "@react-navigation/native";
import React, { useEffect } from "react";
import "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import { Text } from "react-native";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { increment, selectCount } from "../../store/timeInAppSlice";

// This component will show the time in seconds that the user has been in the app.
export default function TimeInApp() {
  const { t } = useTranslation();
  const timeInApp = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const { colors } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(increment());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <Text style={{ color: colors.text }}>{t("timeInApp", { timeInApp })}</Text>
  );
}
