/**
 * ============================================================
 *  RESULTADOS DE LA ENCUESTA
 * ============================================================
 *  Encuesta realizada a 234 personas.
 *
 *  Los valores de los gráficos corresponden a los porcentajes
 *  informados en los resultados originales de la encuesta.
 * ============================================================
 */

export interface SurveyDatum {
  name: string

  /** Porcentaje informado en la encuesta */
  value: number

  /** Cantidad de respuestas, cuando el dato está disponible */
  count?: number
}

export interface SurveyData {
  /** Cantidad total de personas encuestadas */
  totalParticipants: number

  /** Qué prefieren tomar habitualmente */
  consumption: SurveyDatum[]

  /** Si agregan remedios, yuyos o hierbas */
  addsHerbs: SurveyDatum[]

  /** Con quién comparten habitualmente */
  sharedWith: SurveyDatum[]

  /** Edad en la que comenzaron a tomar */
  startingAge: SurveyDatum[]
}

export const surveyData: SurveyData = {
  totalParticipants: 234,

  consumption: [
    {
      name: 'Mate',
      value: 57.3,
    },
    {
      name: 'Tereré',
      value: 7.2,
    },
    {
      name: 'Los dos por igual',
      value: 35.5,
    },
  ],

  addsHerbs: [
    {
      name: 'Sí',
      value: 67.5,
      count: 158,
    },
    {
      name: 'No',
      value: 33.3,
      count: 78,
    },
  ],

  sharedWith: [
    {
      name: 'Familia',
      value: 73.1,
    },
    {
      name: 'Amigos',
      value: 6,
    },
    {
      name: 'Compañeros de trabajo/estudio',
      value: 5.6,
    },
    {
      name: 'Solo/a',
      value: 10.3,
    },
    {
      name: 'Otros',
      value: 5,
    },
  ],

  startingAge: [
    {
      name: 'Menos de 5 años',
      value: 7.7,
    },
    {
      name: 'Entre 5 y 10 años',
      value: 23.9,
    },
    {
      name: 'Entre 11 y 15 años',
      value: 37.6,
    },
    {
      name: 'Más de 15 años',
      value: 23.1,
    },
    {
      name: 'No recuerdo',
      value: 7.7,
    },
  ],
}