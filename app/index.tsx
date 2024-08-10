import { Text, Icon } from "@rneui/themed";
import { useNavigation, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import TimeInApp from "../components/TimeInApp";

// Main app screen.
export default function Index() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({ title: t("mainTitle") });
  }, [t, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>{t("helloWorld")}</Text>
      <StatusBar style="auto" />
      <TimeInApp />
      <Icon
        name="settings"
        type="material"
        onPress={() => router.push("/settings")}
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
