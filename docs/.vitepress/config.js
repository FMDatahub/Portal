export default {
  title: "Portal",
  description: "Vejviser",
  srcDir: "./",
  base: "/Portal/",
  //cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    sidebar: [
      {
        text: "FMDatahub",
      },
      {
        text: "Datadictionary",
        link: "https://fmdatahub.github.io/Datadictionary",
      },
      {
        text: "Onboarding",
        link: "/Onboarding/",
      },
      {
        text: "Guides",
        link: "/Guides/",
      },
      {
        text: "Documentation",
        link: "/Documentation/",
      },
    ],
  },
};
