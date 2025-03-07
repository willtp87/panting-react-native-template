import { useTheme } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, Text, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAppSelector, useAppDispatch } from "../store/hooks";
import { switchDarkTheme, selectSettings } from "../store/settingsSlice";

import "../i18n/i18n";

export default function Page() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const settings = useAppSelector(selectSettings);
  const dispatch = useAppDispatch();
  const { colors } = useTheme();

  useEffect(() => {
    navigation.setOptions({ title: t("settingsTitle") });
  }, [t, navigation]);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          padding: 15,
        }}
      >
        <Text style={{ color: colors.text }}>{t("darkMode")}</Text>
        <Switch
          value={settings.darkTheme}
          onValueChange={(value) => {
            dispatch(switchDarkTheme());
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
