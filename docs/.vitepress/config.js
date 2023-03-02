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
            link: "https://github.com/FMDatahub/Onboarding",
          },
          {
            text: "Guides",
            link: "https://github.com/FMDatahub/Guides",
          },
          {
            text: "Documentation",
            collapsed: true,
            items: [
              {
                text: "Frontend",
                link: "https://github.com/FMDatahub/Documentation/tree/main/Frontend",
              },
              {
                text: "API",
                link: "https://github.com/FMDatahub/Documentation/tree/main/Backend/API",
              },
            ],
          },
        ],
      },
      {
        text: "Fagsystemer",
        collapsed: false,
        link: "/Fagsystemer/",
        items: [
          {text: "Timesafe", link: "/Fagsystemer/Timesafe/"},
          {text: "Dalux", link: "/Fagsystemer/Dalux/"},
        ],
      },
    ],
  },
};
