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
        text: "Links",
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
        items: [
          {text: "Timesafe", link: "https://www.timesafe.dk/"},
          {text: "Dalux", link: "https://dalux.com/"},
        ],
      },
    ],
  },
};
