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
        items: [
          {
            text: "Datahub",
            link: "https://vna-dev.azurewebsites.net/",
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
      {
        text: "Fagsystemer",
        items: [
          {text: "Timesafe", link: "https://www.timesafe.dk/"},
          {text: "Dalux", link: "https://dalux.com/"},
        ],
      },
    ],
  },
};
