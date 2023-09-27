export enum DatasetFile {
  COVID = "/datasets/covid.csv",
  PARKING = "/datasets/parkplaetze.csv",
  STOPS_NEUMUENSTER = "/datasets/haltestellen-neumuenster.csv",
  CHARGE_HL = "/datasets/ladesaeulenregister-luebeck.csv",
  CRAFT_KI = "/datasets/handwerksbetriebe_kiel.csv",
  BIRTHS_KI = "/datasets/bevoelkerung_geburten_kiel.csv",
}

export enum Visualization {
  LINE = "Linien",
  PIE = "Torten",
  MAP = "Karten",
}

export enum DatasetCategory {
  FINANCE = "Finanzen",
  HEALTH = "Gesundheit",
  TRAFFIC = "Verkehr",
  ENERGY = "Energie",
  SOCIETY = "Gesellschaft",
}

export enum SortByFilter {
  A_TO_Z = "von A bis Z",
  DATE = "Erstelldatum",
}

export type TransformerKey =
  | "toString"
  | "cleanNumberString"
  | "toInt"
  | "replaceCommaWithDot";

export type Transformer = {
  [column: string]: Array<TransformerKey>;
};

export type Coordinates = {
  longitude: number;
  latitude: number;
};

export type PieType = "row" | "sum";

export type TickFormatter = "dateTime";

export type Datapoint = {
  [col: string]: string | number;
};

export type DatasetView = {
  viewTitle?: string;
  viewDescription?: string;
  visualizationType?: Visualization;
  dataKeys?: string[];

  // Line
  xAxis?: string;
  tickFormatter?: TickFormatter;
  rangeX?: [number, number];

  // Pie
  pieType?: PieType;
  pieRow?: number;

  // Map
  initialMapCenter?: Coordinates;
  initialZoomState?: number;
  mapMarker?: Array<Coordinates>;
};

export type DatasetMeta = {
  title: string;
  description: string;
  category: DatasetCategory;
  createdAt: Date;
  file: DatasetFile;
  path: string;
  transformers?: Transformer;
  views: DatasetView[];
};
