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
        text: "FM Datahub",
        items: [
          {
            text: "Datahub",
            collapsed: true,
            link: "/Datahub/",
            items: [
              {
                text: "Frontend",
                link: "https://vna-dev.azurewebsites.net/",
              },
              {
                text: "API",
                link: "https://vna-api-dev.azurewebsites.net/",
              },
            ],
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
            link: "https://github.com/FMDatahub/Documentation",
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
