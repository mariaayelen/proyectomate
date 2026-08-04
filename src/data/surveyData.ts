/**
 * ============================================================
 *  RESULTADOS DE LA ENCUESTA
 * ============================================================
 *  Todos los resultados están expresados en cantidades.
 *  Cada pregunta toma como base 54 personas encuestadas.
 * ============================================================
 */

export interface SurveyDatum {
  name: string
  value: number
}

export interface SurveyData {
  /** Cantidad total de personas encuestadas */
  totalParticipants: number

  /** Personas que aprendieron a preparar con su familia */
  learnedWithFamily: number

  /** Qué consumen más */
  consumption: SurveyDatum[]

  /** Si agregan yuyos */
  addsHerbs: SurveyDatum[]

  /** Con quién lo comparten */
  sharedWith: SurveyDatum[]

  /** Edad en la que comenzaron a tomar */
  startingAge: SurveyDatum[]
}

export const surveyData: SurveyData = {
  totalParticipants: 54,

  learnedWithFamily: 53,

  consumption: [
    {
      name: 'Mate',
      value: 27,
    },
    {
      name: 'Tereré',
      value: 5,
    },
    {
      name: 'Ambos',
      value: 22,
    },
  ],

  addsHerbs: [
    {
      name: 'Sí',
      value: 26,
    },
    {
      name: 'No',
      value: 28,
    },
  ],

  sharedWith: [
    {
      name: 'Familia',
      value: 35,
    },
    {
      name: 'Amigos',
      value: 15,
    },
    {
      name: 'Solos/as',
      value: 4,
    },
  ],

  startingAge: [
    {
      name: '5 a 10 años',
      value: 25,
    },
    {
      name: '11 a 15 años',
      value: 18,
    },
    {
      name: '20 a 25 años',
      value: 7,
    },
    {
      name: 'Otras edades',
      value: 4,
    },
  ],
}