import {
  DatasetMeta,
  DatasetCategory,
  DatasetFile,
  Visualization,
} from "./types";

export const metadata: DatasetMeta[] = [
  {
    title: "Corona-Zahlen Zeitverlauf 2022",
    description:
      "Zeitreihe der Corona-Zahlen für Schleswig-Holstein im Jahr 2022. Basis für die hier veröffentlichten Daten sind die Zahlen, die die Kreise und kreisfreien Städte auf dem offiziellen Meldeweg der Landesmeldestelle mitteilen. Da die Datenerfassung und Übermittlung Zeit benötigt, können Abweichungen von den vor Ort kommunizierten Fällen entstehen. Im Einzelfall kann es auch zu einer Reduzierung der gemeldeten Fälle kommen, zum Beispiel wenn sich eine Meldung nicht bestätigt hat oder der Wohnort der Person außerhalb des Kreises liegt.",
    category: DatasetCategory.HEALTH,
    createdAt: new Date("2023-01-01"),
    file: DatasetFile.COVID,
    path: "covid-19-verlauf-schleswig-holstein",
    transformers: {
      gemeldete_faelle: ["toString", "cleanNumberString", "toInt"],
    },
    views: [
      {
        viewTitle: "Anteile je Datum",
        visualizationType: Visualization.PIE,
        viewDescription: "Anteile gemeldet / hospitalisiert / verstorben",
        pieRow: 100,
        dataKeys: ["gemeldete_faelle", "verstorben", "hospitalisierungen"],
      },
      {
        viewTitle: "Verlauf Anzahl gemeldet",
        visualizationType: Visualization.LINE,
        viewDescription: "Gemeldete Fälle",
        xAxis: "datum",
        dataKeys: ["gemeldete_faelle"],
        rangeX: [0, 364],
      },
      {
        viewTitle: "Verlauf Anzahl verstorben",
        visualizationType: Visualization.LINE,
        viewDescription: "Verstorben",
        xAxis: "datum",
        dataKeys: ["verstorben"],
        rangeX: [0, 364],
      },
    ],
  },
  {
    title: "Handwerksbetriebe Kiel",
    description:
      "Die Anzahl der Handwerksbetriebe in der Landeshauptstadt Kiel.",
    category: DatasetCategory.FINANCE,
    createdAt: new Date("2019-12-04"),
    file: DatasetFile.CRAFT_KI,
    path: "handwerksbetriebe-kiel",
    views: [
      {
        viewTitle: "Gesamtanzahl pro Jahr",
        visualizationType: Visualization.LINE,
        viewDescription:
          "Hier wird ein zeitlicher verlauf gezeigt, wieviele handwerkliche Betriebe es in den jeweiligen Jahren gab",
        xAxis: "Jahr",
        dataKeys: ["Betriebe"],
        rangeX: [0, 20],
      },
    ],
  },
  {
    title: "Geburtenrate Kiel",
    description: "Verteilung der Geburten der Landeshauptsstadt Kiel.",
    category: DatasetCategory.SOCIETY,
    createdAt: new Date("2022-03-02"),
    file: DatasetFile.BIRTHS_KI,
    path: "geburten-kiel",
    views: [
      {
        viewTitle: "Verlauf männlich / weiblich",
        visualizationType: Visualization.LINE,
        viewDescription:
          "Hier wird ein zeitlicher verlauf gezeigt, wieviele Geburten es in den jeweiligen Jahren gab",
        xAxis: "Jahr",
        dataKeys: ["m", "w"],
        rangeX: [0, 34],
      },
      {
        viewTitle: "Geburten pro Jahr",
        visualizationType: Visualization.LINE,
        viewDescription:
          "Hier wird ein zeitlicher verlauf gezeigt, wieviele Geburten es in den jeweiligen Jahren gab",
        xAxis: "Jahr",
        dataKeys: ["Anzahl"],
        rangeX: [0, 34],
      },
      {
        viewTitle: "Anteil männlich / weiblich",
        visualizationType: Visualization.PIE,
        viewDescription:
          "Hier wird der jeweilige Anteil der gesamten Anzahl für männliche und weibliche Geburten gezeigt",
        dataKeys: ["m", "w"],
        pieRow: 10,
      },
    ],
  },
  {
    title: "Parkplatz Marktplatz St. Peter-Ording",
    description: "Anzahl der Autos auf dem Marktplatz am 01.02.2023.",
    category: DatasetCategory.TRAFFIC,
    createdAt: new Date("2023-02-02"),
    file: DatasetFile.PARKING,
    path: "parkplaetze-marktplatz",
    views: [
      {
        viewTitle: "Parkplätze 6:00-12:00 Uhr",
        visualizationType: Visualization.LINE,
        viewDescription:
          "Hier werden die Werte des Sensors von 6:00 Uhr bis 12:00 Uhr gezeigt",
        xAxis: "timestamp",
        dataKeys: ["value"],
        tickFormatter: "dateTime",
        rangeX: [198, 523],
      },
      {
        viewTitle: "Parkplätze 12:00-18:00 Uhr",
        visualizationType: Visualization.LINE,
        viewDescription:
          "Hier werden die Werte des Sensors von 12:00 Uhr bis 18:00 Uhr gezeigt",
        xAxis: "timestamp",
        dataKeys: ["value"],
        rangeX: [523, 841],
      },
    ],
  },
  {
    title: "Haltestellen Neumünster",
    description:
      "Auszug aus dem Zentralen Haltestellenverzeichnis für Schleswig-Holstein.",
    category: DatasetCategory.TRAFFIC,
    createdAt: new Date("2022-02-23"),
    file: DatasetFile.STOPS_NEUMUENSTER,
    path: "haltestellen-neumuenster",
    views: [
      {
        viewTitle: "Haltestellen Karte",
        visualizationType: Visualization.MAP,
        viewDescription: "Alle Haltestellen in Neumünster",
        initialMapCenter: {
          latitude: 54.075406159746,
          longitude: 9.980070650335481,
        },
        initialZoomState: 12,
      },
    ],
    transformers: {
      Longitude: ["replaceCommaWithDot"],
      Latitude: ["replaceCommaWithDot"],
    },
  },
  {
    title: "Ladesäulen Lübeck",
    description:
      "Die Liste beinhaltet die Ladeeinrichtungen aller Betreiberinnen und Betreiber, die das Anzeigeverfahren der Bundesnetzagentur vollständig abgeschlossen und einer Veröffentlichung im Internet zugestimmt haben. Die Zahl der öffentlich zugänglichen Ladeeinrichtungen ist daher größer als hier dargestellt.",
    category: DatasetCategory.ENERGY,
    createdAt: new Date("2022-02-24"),
    file: DatasetFile.CHARGE_HL,
    path: "ladesaeulen-luebeck",
    views: [
      {
        viewTitle: "Ladesäulen Karte",
        visualizationType: Visualization.MAP,
        viewDescription: "Alle Ladesäulen in Lübeck",
        initialMapCenter: {
          latitude: 53.86751171634757,
          longitude: 10.686848468340694,
        },
        initialZoomState: 12,
      },
    ],
    transformers: {
      Longitude: ["replaceCommaWithDot"],
      Latitude: ["replaceCommaWithDot"],
    },
  },
];
