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
            text: "Documentation",
            link: "https://fmdatahub.github.io/Documentation/",
          },
        ],
      },
      {
        text: "IT-målbillede",
        collapsed: true,
        link: "/ITMaalbillede/",
        items: [
          {text: "Designprincipper", link: "/ITMaalbillede/Designprincipper/"},
        ],
      },
      {
        text: "Forretningsbehov",
        collapsed: true,
        link: "/Moduler/",
        items: [
          {
            text: "Porteføjlestyring",
            collapsed: true,
            link: "/Moduler/Portefoljestyring/",
            items: [
              {
                text: "Ejendomsstamdata",
                link: "/Moduler/Portefoljestyring/Ejendomsstamdata.md",
              },
              {
                text: "Lejemålshåndtering",
                link: "/Moduler/Portefoljestyring/Lejemaalshaandtering.md",
              },
              {
                text: "Køb og salg",
                link: "/Moduler/Portefoljestyring/KobOgSalg.md",
              },
              {
                text: "Porteføljeoverblik",
                link: "/Moduler/Portefoljestyring/Portefoljeoverblik.md",
              },
            ],
          },
          {
            text: "Arealforvaltning",
            collapsed: true,
            link: "/Moduler/Arealforvaltning/",
            items: [
              {
                text: "Arealstruktur",
                link: "/Moduler/Arealforvaltning/Arealstruktur.md",
              },
              {
                text: "Tegninger",
                link: "/Moduler/Arealforvaltning/Tegninger.md",
              },
              {
                text: "Arealanvendelse",
                link: "/Moduler/Arealforvaltning/Arealanvendelse.md",
              },
              {
                text: "Arealopgørelser",
                link: "/Moduler/Arealforvaltning/Arealopgorelser.md",
              },
              {
                text: "Flytninger",
                link: "/Moduler/Arealforvaltning/Flytninger.md",
              },
              {
                text: "Arealoptimering",
                link: "/Moduler/Arealforvaltning/Arealoptimering.md",
              },
            ],
          },
          {
            text: "Økonomistyring",
            collapsed: true,
            link: "/Moduler/Okonomistyring/",
            items: [
              {
                text: "Budgettering",
                link: "/Moduler/Okonomistyring/Budgettering.md",
              },
              {
                text: "Indkøb og bestilling",
                link: "/Moduler/Okonomistyring/IndkobOgBestilling.md",
              },
              {
                text: "Fakturering",
                link: "/Moduler/Okonomistyring/Fakturering.md",
              },
              {
                text: "Leverandørstyring",
                link: "/Moduler/Okonomistyring/Leverandorstyring.md",
              },
              {
                text: "Nøgletal og benchmark",
                link: "/Moduler/Okonomistyring/NogletalOgBenchmark.md",
              },
            ],
          },
          {
            text: "Administration",
            collapsed: true,
            link: "/Moduler/Administration/",
            items: [
              {
                text: "Brugerstyring",
                link: "/Moduler/Administration/Brugerstyring.md",
              },
              {
                text: "Support",
                link: "/Moduler/Administration/Support.md",
              },
              {
                text: "Konfiguration",
                link: "/Moduler/Administration/Konfiguration.md",
              },
              {
                text: "Journalisering",
                link: "/Moduler/Administration/Journalisering.md",
              },
              {
                text: "Dokumenthåndtering",
                link: "/Moduler/Administration/Dokumenthaandtering.md",
              },
              {
                text: "Import og eksport af data",
                link: "/Moduler/Administration/ImportEksportAfData.md",
              },
              {
                text: "Logning",
                link: "/Moduler/Administration/Logning.md",
              },
            ],
          },
          {
            text: "Opgavestyring",
            collapsed: true,
            link: "/Moduler/Opgavestyring/",
            items: [
              {
                text: "Opgavehåndtering",
                link: "/Moduler/Opgavestyring/Opgavehaandtering.md",
              },
              {
                text: "Serviceaftaler",
                link: "/Moduler/Opgavestyring/Serviceaftaler.md",
              },
              {
                text: "Rekvisitioner",
                link: "/Moduler/Opgavestyring/Rekvisitioner.md",
              },
              {
                text: "Godkendelser",
                link: "/Moduler/Opgavestyring/Godkendelser.md",
              },
              {
                text: "Varemodtagelse",
                link: "/Moduler/Opgavestyring/Varemodtagelse.md",
              },
            ],
          },
          {
            text: "Helpdesk",
            collapsed: true,
            link: "/Moduler/Helpdesk/",
            items: [
              {
                text: "Sagshåndtering",
                link: "/Moduler/Helpdesk/Sagshaandtering.md",
              },
              {
                text: "Brugerportal",
                link: "/Moduler/Helpdesk/Brugerportal.md",
              },
              {
                text: "Brugertilfredshed",
                link: "/Moduler/Helpdesk/Brugertilfredshed.md",
              },
              {
                text: "Statistik og KPI",
                link: "/Moduler/Helpdesk/StatistikOgKPI.md",
              },
              {
                text: "Automatisering",
                link: "/Moduler/Helpdesk/Automatisering.md",
              },
            ],
          },
          {
            text: "Assets",
            collapsed: true,
            link: "/Moduler/Assets/",
            items: [
              {
                text: "Stamdata",
                link: "/Moduler/Assets/Stamdata.md",
              },
              {
                text: "Tagging",
                link: "/Moduler/Assets/Tagging.md",
              },
              {
                text: "Totaløkonomi",
                link: "/Moduler/Assets/Totalokonomi.md",
              },
              {
                text: "Inventarstyring",
                link: "/Moduler/Assets/Inventarstyring.md",
              },
              {
                text: "Aflevering",
                link: "/Moduler/Assets/Aflevering.md",
              },
            ],
          },
          {
            text: "Bygningssyn",
            collapsed: true,
            link: "/Moduler/Bygningssyn/",
            items: [
              {
                text: "Obsevationer",
                link: "/Moduler/Bygningssyn/Obsevationer.md",
              },
              {
                text: "Synshistorik",
                link: "/Moduler/Bygningssyn/Synshistorik.md",
              },
              {
                text: "Erfatal og data",
                link: "/Moduler/Bygningssyn/ErfratalOgData.md",
              },
              {
                text: "Simulering",
                link: "/Moduler/Bygningssyn/Simulering.md",
              },
              {
                text: "Planlægning",
                link: "/Moduler/Bygningssyn/Planlaegning.md",
              },
            ],
          },
          {
            text: "Energistyring",
            collapsed: true,
            link: "/Moduler/Energistyring/",
            items: [
              {
                text: "Målerregistering",
                link: "/Moduler/Energistyring/Maalerregistrering.md",
              },
              {
                text: "Dataindlæsning",
                link: "/Moduler/Energistyring/Dataindlaesning.md",
              },
              {
                text: "Forbrugsoversigt",
                link: "/Moduler/Energistyring/Forbrugsoversigt.md",
              },
              {
                text: "Forbrugsovervågning",
                link: "/Moduler/Energistyring/Forbrugsovervaagning.md",
              },
              {
                text: "Forsyningsaftaler",
                link: "/Moduler/Energistyring/Forsyningsaftaler.md",
              },
              {
                text: "Energiregnskaber",
                link: "/Moduler/Energistyring/Energiregnskaber.md",
              },
              {
                text: "Energimærkning",
                link: "/Moduler/Energistyring/Energimaerkning.md",
              },
            ],
          },
          {
            text: "Drift & vedligehold",
            collapsed: true,
            link: "/Moduler/DriftOgVedligehold/",
            items: [
              {
                text: "Opgavebeskrivelser",
                link: "/Moduler/DriftOgVedligehold/Opgavebeskrivelser.md",
              },
              {
                text: "Vedligeholdstyper",
                link: "/Moduler/DriftOgVedligehold/Vedligeholdstyper.md",
              },
              {
                text: "Vedligeholdsplaner",
                link: "/Moduler/DriftOgVedligehold/Vedligeholdsplaner.md",
              },
              {
                text: "Vedligeholdsopgaver",
                link: "/Moduler/DriftOgVedligehold/Vedligeholdsopgaver.md",
              },
              {
                text: "Vedligeholdshistorik",
                link: "/Moduler/DriftOgVedligehold/Vedligeholdshistorik.md",
              },
            ],
          },
          {
            text: "Rapportering",
            collapsed: true,
            link: "/Moduler/Rapportering/",
            items: [
              {
                text: "Standardrapporter",
                link: "/Moduler/Rapportering/Standardrapporter.md",
              },
              {
                text: "Dataudtræk",
                link: "/Moduler/Rapportering/Dataudtraek.md",
              },
              {
                text: "BI",
                link: "/Moduler/Rapportering/BI.md",
              },
              {
                text: "Dashboards",
                link: "/Moduler/Rapportering/Dashboards.md",
              },
              {
                text: "Nøgletal og KPI´er",
                link: "/Moduler/Rapportering/NogletalOgKPIer.md",
              },
            ],
          },
          {
            text: "Mobility",
            collapsed: true,
            link: "/Moduler/Mobility/",
            items: [
              {
                text: "Registrering",
                link: "/Moduler/Mobility/Registrering.md",
              },
              {
                text: "Opgavestyring",
                link: "/Moduler/Mobility/Opgavestyring.md",
              },
              {
                text: "Lokalisering",
                link: "/Moduler/Mobility/Lokalisering.md",
              },
              {
                text: "Dataadgang",
                link: "/Moduler/Mobility/Dataadgang.md",
              },
              {
                text: "Aflæsninger",
                link: "/Moduler/Mobility/Aflaesninger.md",
              },
              {
                text: "AR",
                link: "/Moduler/Mobility/AR.md",
              },
            ],
          },
        ],
      },
      {
        text: "Systemer",
        collapsed: true,
        link: "/Systemer/",
        items: [
          {text: "Datahub", link: "/Systemer/Datahub/"},
          {text: "Timesafe", link: "/Systemer/Timesafe/"},
          {text: "Dalux", link: "/Systemer/Dalux/"},
          {text: "Revit", link: "/Systemer/Revit/"},
          {text: "Energykey", link: "/Systemer/Energykey/"},
          {text: "Servicenow", link: "/Systemer/Servicenow/"},
          {text: "Kvantum", link: "/Systemer/Kvantum/"},
          {text: "BBR", link: "/Systemer/BBR/"},
          {text: "Vitec", link: "/Systemer/Vitec/"},
          {text: "Powerapps", link: "/Systemer/Powerapps/"},
          {text: "KKKort", link: "/Systemer/KKKort/"},
          {text: "KKOrg", link: "/Systemer/KKOrg/"},
          {text: "Rengoring", link: "/Systemer/Rengoring/"},
        ],
      },
    ],
  },
};
