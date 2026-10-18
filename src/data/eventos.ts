// =============================================================
// EVENTOS HISTÓRICOS — edita este archivo para agregar eventos.
// Copia un bloque { ... }, cambia los datos y guarda.
// fecha: "AAAA-MM-DD" · tema: uno de TEMAS · gobierno: uno de GOBIERNOS
// =============================================================

export const TEMAS = [
  "Derechos humanos",
  "Educación",
  "Salud",
  "Pensiones",
  "Trabajo",
  "Medio ambiente",
  "Justicia",
  "Instituciones",
  "Derechos civiles",
  "Economía",
] as const;

export const GOBIERNOS = [
  { nombre: "Aylwin", periodo: "1990–1994" },
  { nombre: "Frei Ruiz-Tagle", periodo: "1994–2000" },
  { nombre: "Lagos", periodo: "2000–2006" },
  { nombre: "Bachelet I", periodo: "2006–2010" },
  { nombre: "Piñera I", periodo: "2010–2014" },
  { nombre: "Bachelet II", periodo: "2014–2018" },
  { nombre: "Piñera II", periodo: "2018–2022" },
  { nombre: "Boric", periodo: "2022–2026" },
  { nombre: "Kast", periodo: "2026–" },
] as const;

export type Tema = (typeof TEMAS)[number];
export type Gobierno = (typeof GOBIERNOS)[number]["nombre"];

export interface Fuente {
  titulo: string;
  url: string;
}

export interface Evento {
  fecha: string;
  titulo: string;
  descripcion: string;
  tema: Tema;
  gobierno: Gobierno;
  fuentes: Fuente[];
}

const wiki = (t: string) => `https://es.wikipedia.org/wiki/${encodeURIComponent(t)}`;
const ley = (n: string) =>
  `https://www.bcn.cl/leychile/consulta/listaresultadosimple?cadena=${n}`;

export const EVENTOS: Evento[] = [
  {
    fecha: "1990-04-25",
    titulo: "Se crea la Comisión Nacional de Verdad y Reconciliación",
    descripcion:
      "El gobierno de Aylwin convoca a la Comisión Rettig para investigar violaciones a los derechos humanos de la dictadura. Su informe se entrega en 1991.",
    tema: "Derechos humanos",
    gobierno: "Aylwin",
    fuentes: [{ titulo: "Informe Rettig (Wikipedia)", url: wiki("Informe_Rettig") }],
  },
  {
    fecha: "1994-03-09",
    titulo: "Ley de Bases Generales del Medio Ambiente",
    descripcion:
      "La Ley 19.300 crea la institucionalidad ambiental y el Sistema de Evaluación de Impacto Ambiental.",
    tema: "Medio ambiente",
    gobierno: "Aylwin",
    fuentes: [{ titulo: "Ley 19.300 (BCN)", url: ley("19300") }],
  },
  {
    fecha: "1997-11-12",
    titulo: "Jornada Escolar Completa",
    descripcion:
      "La Ley 19.532 extiende la jornada escolar en establecimientos subvencionados, eje de la reforma educacional de los noventa.",
    tema: "Educación",
    gobierno: "Frei Ruiz-Tagle",
    fuentes: [{ titulo: "Ley 19.532 (BCN)", url: ley("19532") }],
  },
  {
    fecha: "2000-12-16",
    titulo: "Comienza la Reforma Procesal Penal",
    descripcion:
      "Entra en vigor gradual el nuevo sistema acusatorio oral con Ministerio Público y Defensoría Penal.",
    tema: "Justicia",
    gobierno: "Lagos",
    fuentes: [{ titulo: "Reforma procesal penal (Wikipedia)", url: wiki("Reforma_procesal_penal_de_Chile") }],
  },
  {
    fecha: "2001-05-14",
    titulo: "Seguro de Cesantía",
    descripcion:
      "La Ley 19.728 crea un seguro obligatorio de desempleo con aportes de trabajadores, empleadores y Estado.",
    tema: "Trabajo",
    gobierno: "Lagos",
    fuentes: [{ titulo: "Ley 19.728 (BCN)", url: ley("19728") }],
  },
  {
    fecha: "2004-05-17",
    titulo: "Ley de Matrimonio Civil y divorcio",
    descripcion: "La Ley 19.947 reconoce por primera vez el divorcio vincular en Chile.",
    tema: "Derechos civiles",
    gobierno: "Lagos",
    fuentes: [{ titulo: "Ley 19.947 (BCN)", url: ley("19947") }],
  },
  {
    fecha: "2004-09-03",
    titulo: "Plan AUGE de garantías en salud",
    descripcion:
      "La Ley 19.966 establece Garantías Explícitas en Salud de acceso, oportunidad, calidad y protección financiera.",
    tema: "Salud",
    gobierno: "Lagos",
    fuentes: [{ titulo: "Ley 19.966 (BCN)", url: ley("19966") }],
  },
  {
    fecha: "2005-08-26",
    titulo: "Reforma constitucional de 2005",
    descripcion:
      "La Ley 20.050 elimina senadores designados y vitalicios y reduce el mandato presidencial a cuatro años.",
    tema: "Instituciones",
    gobierno: "Lagos",
    fuentes: [{ titulo: "Ley 20.050 (BCN)", url: ley("20050") }],
  },
  {
    fecha: "2006-05-30",
    titulo: "Revolución pingüina",
    descripcion:
      "Movilización masiva de estudiantes secundarios que impulsa la derogación de la LOCE y la posterior Ley General de Educación (2009).",
    tema: "Educación",
    gobierno: "Bachelet I",
    fuentes: [{ titulo: "Revolución pingüina (Wikipedia)", url: wiki("Revolución_pingüina") }],
  },
  {
    fecha: "2008-03-17",
    titulo: "Reforma previsional y Pilar Solidario",
    descripcion:
      "La Ley 20.255 crea la Pensión Básica Solidaria y el Aporte Previsional Solidario.",
    tema: "Pensiones",
    gobierno: "Bachelet I",
    fuentes: [{ titulo: "Ley 20.255 (BCN)", url: ley("20255") }],
  },
  {
    fecha: "2011-08-04",
    titulo: "Movilización estudiantil de 2011",
    descripcion:
      "Estudiantes universitarios exigen educación pública, gratuita y de calidad; el debate marca la agenda de la década.",
    tema: "Educación",
    gobierno: "Piñera I",
    fuentes: [{ titulo: "Movilización estudiantil 2011 (Wikipedia)", url: wiki("Movilización_estudiantil_en_Chile_de_2011") }],
  },
  {
    fecha: "2014-09-29",
    titulo: "Reforma tributaria",
    descripcion:
      "La Ley 20.780 eleva el impuesto corporativo para financiar la reforma educacional.",
    tema: "Economía",
    gobierno: "Bachelet II",
    fuentes: [{ titulo: "Ley 20.780 (BCN)", url: ley("20780") }],
  },
  {
    fecha: "2015-04-13",
    titulo: "Acuerdo de Unión Civil",
    descripcion: "La Ley 20.830 reconoce legalmente a parejas del mismo o distinto sexo.",
    tema: "Derechos civiles",
    gobierno: "Bachelet II",
    fuentes: [{ titulo: "Ley 20.830 (BCN)", url: ley("20830") }],
  },
  {
    fecha: "2015-05-05",
    titulo: "Fin del sistema binominal",
    descripcion:
      "La Ley 20.840 reemplaza el sistema electoral binominal por uno proporcional inclusivo.",
    tema: "Instituciones",
    gobierno: "Bachelet II",
    fuentes: [{ titulo: "Ley 20.840 (BCN)", url: ley("20840") }],
  },
  {
    fecha: "2017-09-23",
    titulo: "Despenalización del aborto en tres causales",
    descripcion:
      "La Ley 21.030 permite la interrupción del embarazo por riesgo vital, inviabilidad fetal y violación.",
    tema: "Salud",
    gobierno: "Bachelet II",
    fuentes: [{ titulo: "Ley 21.030 (BCN)", url: ley("21030") }],
  },
  {
    fecha: "2019-10-18",
    titulo: "Estallido social",
    descripcion:
      "Protestas masivas por desigualdad y costo de vida abren el debate sobre una nueva Constitución.",
    tema: "Instituciones",
    gobierno: "Piñera II",
    fuentes: [{ titulo: "Estallido social (Wikipedia)", url: wiki("Estallido_social") }],
  },
  {
    fecha: "2019-11-15",
    titulo: "Acuerdo por la Paz Social y la Nueva Constitución",
    descripcion: "Partidos políticos pactan un itinerario plebiscitario para redactar una nueva Constitución.",
    tema: "Instituciones",
    gobierno: "Piñera II",
    fuentes: [{ titulo: "Acuerdo por la Paz (Wikipedia)", url: wiki("Acuerdo_por_la_Paz_Social_y_la_Nueva_Constitución") }],
  },
  {
    fecha: "2020-10-25",
    titulo: "Plebiscito nacional: gana el Apruebo",
    descripcion: "Cerca del 78% aprueba redactar una nueva Constitución mediante una convención electa.",
    tema: "Instituciones",
    gobierno: "Piñera II",
    fuentes: [{ titulo: "Plebiscito nacional 2020 (Wikipedia)", url: wiki("Plebiscito_nacional_de_Chile_de_2020") }],
  },
  {
    fecha: "2021-12-10",
    titulo: "Matrimonio igualitario",
    descripcion: "La Ley 21.400 permite el matrimonio entre personas del mismo sexo.",
    tema: "Derechos civiles",
    gobierno: "Piñera II",
    fuentes: [{ titulo: "Ley 21.400 (BCN)", url: ley("21400") }],
  },
  {
    fecha: "2022-09-04",
    titulo: "Plebiscito de salida: se rechaza la propuesta constitucional",
    descripcion: "El 62% rechaza el texto elaborado por la Convención Constitucional.",
    tema: "Instituciones",
    gobierno: "Boric",
    fuentes: [{ titulo: "Plebiscito 2022 (Wikipedia)", url: wiki("Plebiscito_constitucional_de_Chile_de_2022") }],
  },
  {
    fecha: "2023-04-26",
    titulo: "Ley de 40 horas",
    descripcion: "La Ley 21.561 reduce gradualmente la jornada laboral de 45 a 40 horas semanales.",
    tema: "Trabajo",
    gobierno: "Boric",
    fuentes: [{ titulo: "Ley 21.561 (BCN)", url: ley("21561") }],
  },
  {
    fecha: "2023-12-17",
    titulo: "Se rechaza la segunda propuesta constitucional",
    descripcion: "El texto del Consejo Constitucional es rechazado; sigue vigente la Constitución de 1980 reformada.",
    tema: "Instituciones",
    gobierno: "Boric",
    fuentes: [{ titulo: "Plebiscito 2023 (Wikipedia)", url: wiki("Plebiscito_constitucional_de_Chile_de_2023") }],
  },
  {
    fecha: "2025-03-26",
    titulo: "Reforma de pensiones",
    descripcion:
      "Se promulga la reforma que crea la Pensión Garantizada Universal ampliada y un aporte adicional del empleador.",
    tema: "Pensiones",
    gobierno: "Boric",
    fuentes: [{ titulo: "Ley 21.735 (BCN)", url: ley("21735") }],
  },
  {
    fecha: "2026-03-11",
    titulo: "Cambio de mando presidencial",
    descripcion: "Asume el nuevo gobierno para el período 2026–2030.",
    tema: "Instituciones",
    gobierno: "Kast",
    fuentes: [{ titulo: "Elección presidencial 2025 (Wikipedia)", url: wiki("Elección_presidencial_de_Chile_de_2025") }],
  },
];
