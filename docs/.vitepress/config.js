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
          {text: "Revit", link: "/Fagsystemer/Revit/"},
          {text: "Energykey", link: "/Fagsystemer/Energykey/"},
          {text: "Servicenow", link: "/Fagsystemer/Servicenow/"},
          {text: "Kvantum", link: "/Fagsystemer/Kvantum/"},
          {text: "BBR", link: "/Fagsystemer/BBR/"},
          {text: "Vitec", link: "/Fagsystemer/Vitec/"},
          {text: "Powerapps", link: "/Fagsystemer/Powerapps/"},
          {text: "KKKort", link: "/Fagsystemer/KKKort/"},
          {text: "KKOrg", link: "/Fagsystemer/KKOrg/"},
        ],
      },
    ],
  },
};
