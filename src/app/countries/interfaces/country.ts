// Generated by https://quicktype.io

export interface Country {
  name:         Name;
  tld:          string[];
  cca2:         string;
  ccn3:         string;
  cca3:         string;
  cioc:         string;
  independent:  boolean;
  status:       string;
  unMember:     boolean;
  currencies:   Currencies;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  subregion:    string;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  fifa:         string;
  car:          Car;
  timezones:    string[];
  continents:   string[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  string;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
  gini?:        { [key: string]: number };
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  string;
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface Currencies {
  EUR?: Clp;
  YER?: Clp;
  DOP?: Clp;
  CLP?: Clp;
  USD?: Clp;
  CRC?: Clp;
}

export interface Clp {
  name:   string;
  symbol: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  ita?: string;
  ara?: string;
  spa?: string;
  eng?: string;
  fra?: string;
  swa?: string;
  por?: string;
  div?: string;
  rar?: string;
  niu?: string;
  crs?: string;
  sag?: string;
  smo?: string;
  tkl?: string;
  bis?: string;
  nld?: string;
  deu?: string;
  ber?: string;
  mey?: string;
  tur?: string;
  urd?: string;
  swe?: string;
  fas?: string;
  ind?: string;
  mri?: string;
  nzs?: string;
  prs?: string;
  pus?: string;
  tuk?: string;
  cha?: string;
  sqi?: string;
  kon?: string;
  lin?: string;
  lua?: string;
  tet?: string;
  ltz?: string;
  khm?: string;
  nep?: string;
  msa?: string;
  kin?: string;
  tha?: string;
  gsw?: string;
  roh?: string;
  zdj?: string;
  srp?: string;
  glv?: string;
  cnr?: string;
  zho?: string;
  nrf?: string;
  rus?: string;
  tgk?: string;
  bul?: string;
  nya?: string;
  gle?: string;
  ron?: string;
  dan?: string;
  tir?: string;
  sot?: string;
  cat?: string;
  som?: string;
  her?: string;
  hgm?: string;
  kwn?: string;
  loz?: string;
  ndo?: string;
  tsn?: string;
  nor?: string;
  grn?: string;
  bos?: string;
  hrv?: string;
  nfr?: string;
  aym?: string;
  que?: string;
  jam?: string;
  kaz?: string;
  pau?: string;
  kor?: string;
  bjz?: string;
  hmo?: string;
  tpi?: string;
  isl?: string;
  jpn?: string;
  sin?: string;
  tam?: string;
  mlg?: string;
  ssw?: string;
  pap?: string;
  bwg?: string;
  kck?: string;
  khi?: string;
  ndc?: string;
  nde?: string;
  sna?: string;
  toi?: string;
  tso?: string;
  ven?: string;
  xho?: string;
  zib?: string;
  mon?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  kal?: string;
  lao?: string;
  lav?: string;
  hin?: string;
  pov?: string;
  mkd?: string;
  mah?: string;
  mlt?: string;
  mfe?: string;
  pih?: string;
  kir?: string;
  lat?: string;
  fil?: string;
  pol?: string;
  fao?: string;
  bel?: string;
  slv?: string;
  vie?: string;
  kat?: string;
  run?: string;
  nau?: string;
  ell?: string;
  tvl?: string;
  ton?: string;
  mya?: string;
  de?: string;
  amh?: string;
  aze?: string;
  uzb?: string;
  ben?: string;
  hye?: string;
  nso?: string;
  zul?: string;
  fin?: string;
  heb?: string;
  hat?: string;
  gil?: string;
  ukr?: string;
  fij?: string;
  hif?: string;
  slk?: string;
  dzo?: string;
  hun?: string;
  arc?: string;
  ckb?: string;
  ces?: string;
  lit?: string;
  cal?: string;
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: NativeName;
}

export interface NativeName {
  ita?: Translation;
  ara?: Translation;
  spa?: Translation;
  eng?: Translation;
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}
