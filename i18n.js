// Textos de la interfaz en los dos idiomas.
// NOTA: los textos en euskera son una traducción automática/manual de partida.
// Se recomienda que una persona euskaldun nativa los revise antes de publicar la web.

const UI_STRINGS = {
  eu: {
    pageTitle: "Lehen Hezkuntzako Legeria — Euskadi",
    siteTitle: "Lehen Hezkuntzako irakasleentzako legeria — Euskadi",
    subtitle: "Legeak, dekretuak, protokoloak eta plataformen gidak, bilatzaile berean.",
    searchPlaceholder: "Bilatu gaika: eskola-jazarpena, curriculuma, absentismoa, Hezigunea…",
    filters: {
      todos: "Guztiak",
      normativa: "Curriculuma eta araudia",
      convivencia: "Elkarbizitza eta segurtasuna",
      gestion: "Ikastetxearen kudeaketa",
      tutoriales: "Plataformen tutorialak"
    },
    resultsCountOne: "dokumentu 1 aurkitu da",
    resultsCountMany: (n) => `${n} dokumentu aurkitu dira`,
    noResults: "Ez da irizpide horrekin bat datorren dokumenturik aurkitu. Saiatu beste hitz-gako batekin.",
    loadError: "Ezin izan da dokumentuen zerrenda kargatu.",
    footerDisclaimer: "Oharra: gune hau Eusko Jaurlaritzaren iturri publikoetarako esteken bilduma ez-ofiziala da. Zalantzarik izanez gero, kontsultatu beti jatorrizko dokumentua edo Hezkuntza Saila.",
    footerMeta: "Hasierako edukia — zabaltzeko zain. Azken berrikuspena: 2026ko uztaila.",
    fallbackTag: "(gaztelaniaz)"
  },
  es: {
    pageTitle: "Normativa Educación Primaria — Euskadi",
    siteTitle: "Normativa para el profesorado de Educación Primaria — Euskadi",
    subtitle: "Leyes, decretos, protocolos y guías de plataformas, en un mismo buscador.",
    searchPlaceholder: "Busca por tema: acoso escolar, currículo, absentismo, Hezigunea…",
    filters: {
      todos: "Todos",
      normativa: "Currículo y normativa",
      convivencia: "Convivencia y seguridad",
      gestion: "Gestión de centro",
      tutoriales: "Tutoriales de plataformas"
    },
    resultsCountOne: "1 documento encontrado",
    resultsCountMany: (n) => `${n} documentos encontrados`,
    noResults: "No se ha encontrado ningún documento con ese criterio. Prueba con otra palabra clave.",
    loadError: "No se ha podido cargar el listado de documentos.",
    footerDisclaimer: "Aviso: este sitio es una recopilación no oficial de enlaces a fuentes públicas del Gobierno Vasco. Ante cualquier duda, consulta siempre el documento original o al Departamento de Educación.",
    footerMeta: "Contenido inicial — pendiente de ampliar. Última revisión: julio de 2026.",
    fallbackTag: "(en castellano)"
  }
};
