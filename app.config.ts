import type { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "Recipe Organizer",
  slug: "recipe-organizer",
  version: "3.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "automatic",
  android: {
    versionCode: 1,
    package: "com.recipeorganizer.app",
  },
  ios: {
    bundleIdentifier: "com.recipeorganizer.app",
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    eas: {
      projectId: "8b08404b-642d-4ea7-bb5a-8baead2e289b",
    },
  },
};

export default config;
