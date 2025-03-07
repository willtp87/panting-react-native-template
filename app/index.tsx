import AntDesign from "@expo/vector-icons/AntDesign";
import { useTheme } from "@react-navigation/native";
import { useNavigation, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import TimeInApp from "../components/TimeInApp";

// Main app screen.
export default function Index() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const router = useRouter();
  const { colors } = useTheme();

  useEffect(() => {
    navigation.setOptions({ title: t("mainTitle") });
  }, [t, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: colors.text }}>{t("helloWorld")}</Text>
      <StatusBar style="auto" />
      <TimeInApp />
      <AntDesign.Button
        name="setting"
        size={24}
        color={colors.text}
        backgroundColor={colors.background}
        onPress={() => router.push("/settings")}
        testID="settings"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
