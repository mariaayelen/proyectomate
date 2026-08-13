/**
 * ============================================================
 *  CONFIGURACIÓN CENTRAL DEL PROYECTO
 * ============================================================
 *  Modificá los datos de tu proyecto SOLO en este archivo.
 *  Toda la página los lee desde acá automáticamente.
 * ============================================================
 */

export interface SiteConfig {
  /** Nombre de la escuela, por ejemplo: "Escuela N.º 24" */
  schoolName: string
  /** Localidad de la escuela */
  location: string
  /** Grado, por ejemplo: "6.º grado" */
  grade: string
  /** Año lectivo */
  year: string
  /** Nombre del evento */
  event: string
  /** Título principal del proyecto */
  projectName: string
  /** Subtítulo */
  tagline: string
  /** Frase complementaria */
  phrase: string
  /**
   * Enlace real de la encuesta (Google Forms, etc.).
   * Dejalo como string vacío ("") si todavía no tenés la encuesta.
   * Cuando tenga URL, el botón se habilita y se muestra el QR real.
   */
  surveyUrl: string
  /** Datos de contacto opcionales (podés dejar los textos vacíos) */
  contact: {
    email: string
    phone: string
  }
  /** Redes sociales opcionales (podés dejar los textos vacíos) */
  social: {
    instagram: string
    facebook: string
    youtube: string
  }
}

export const siteConfig: SiteConfig = {
  schoolName: 'Escuela N.º 243',
  location: 'Los Helechos, Misiones',
  grade: '6°',
  year: '2026',
  event: 'Feria de Ciencias',
  projectName: 'Mate y Tereré',
  tagline: 'Un sentimiento que nos une',
  phrase: 'Proyecto realizado por los estudiantes de 6º grado de la Escuela Nº 243 de Los Helechos, Misiones',
  surveyUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdTLOmarz-iK9x-Z0Z8ohA_lOCTCaTAQXBTNeQDKbsbgEmomA/viewform',
  contact: {
    email: '',
    phone: '',
  },
  social: {
    instagram: '',
    facebook: '',
    youtube: '',
  },
}
