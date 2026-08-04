/**
 * ============================================================
 *  DATOS DE LOS JUEGOS
 * ============================================================
 *  Juego 1: ¿Elemento, sabor o acción?
 *  Juego 2: Ordená los pasos
 * ============================================================
 */

export type CardType = 'elemento' | 'sabor' | 'accion'

export interface CategoryCard {
  id: string
  word: string
  type: CardType
  icon: string
  explanation: string
}

export const categoryCards: CategoryCard[] = [
  {
    id: 'bombilla',
    word: 'Bombilla',
    type: 'elemento',
    icon: 'bombilla',
    explanation: 'La bombilla es el elemento metálico que se usa para tomar.',
  },
  {
    id: 'menta',
    word: 'Menta',
    type: 'sabor',
    icon: 'menta',
    explanation: 'La menta es una hierba aromática que se usa en el tereré.',
  },
  {
    id: 'cebar',
    word: 'Cebar',
    type: 'accion',
    icon: 'cebar',
    explanation: 'Cebar es la acción de servir el agua sobre la yerba.',
  },
  {
    id: 'termo',
    word: 'Termo',
    type: 'elemento',
    icon: 'termo',
    explanation: 'El termo es el recipiente que conserva el agua caliente o fría.',
  },
  {
    id: 'limon',
    word: 'Limón',
    type: 'sabor',
    icon: 'limon',
    explanation: 'El limón es una fruta que aporta frescura y sabor.',
  },
  {
    id: 'compartir',
    word: 'Compartir',
    type: 'accion',
    icon: 'compartir',
    explanation: 'Compartir es participar de una ronda de mate o tereré.',
  },
  {
    id: 'hielo',
    word: 'Hielo',
    type: 'elemento',
    icon: 'hielo',
    explanation: 'El hielo se usa para mantener fría la preparación.',
  },
  {
    id: 'burrito',
    word: 'Burrito',
    type: 'sabor',
    icon: 'burrito',
    explanation: 'El burrito es un yuyo de sabor suave y refrescante.',
  },
  {
    id: 'agitar',
    word: 'Agitar',
    type: 'accion',
    icon: 'agitar',
    explanation: 'Agitar es mover suavemente la yerba antes de cebar.',
  },
  {
    id: 'guampa',
    word: 'Guampa',
    type: 'elemento',
    icon: 'guampa',
    explanation: 'La guampa es el recipiente que se usa para el tereré.',
  },
  {
    id: 'naranja',
    word: 'Naranja',
    type: 'sabor',
    icon: 'naranja',
    explanation: 'La naranja es una fruta cítrica de sabor dulce y refrescante.',
  },
  {
    id: 'colar',
    word: 'Colar',
    type: 'accion',
    icon: 'colar',
    explanation: 'Colar es pasar el jugo o la preparación por un colador.',
  },
]

export type DrinkMode = 'mate' | 'terere'

export interface OrderStep {
  id: string
  text: string
  icon: string
}

export interface OrderSequence {
  mode: DrinkMode
  title: string
  steps: OrderStep[]
}

export const orderSequences: OrderSequence[] = [
  {
    mode: 'mate',
    title: 'Cómo preparamos mate',
    steps: [
      { id: 'm1', text: 'Calentar el agua sin dejar que hierva.', icon: 'agua' },
      { id: 'm2', text: 'Colocar la yerba dentro del mate.', icon: 'yerba' },
      { id: 'm3', text: 'Acomodar la yerba.', icon: 'agitar' },
      { id: 'm4', text: 'Colocar la bombilla.', icon: 'bombilla' },
      { id: 'm5', text: 'Cebar con agua.', icon: 'cebar' },
      { id: 'm6', text: 'Tomar y compartir.', icon: 'compartir' },
    ],
  },
  {
    mode: 'terere',
    title: 'Cómo preparamos tereré',
    steps: [
      { id: 't1', text: 'Preparar agua fría, jugo, frutas o yuyos.', icon: 'jugo' },
      { id: 't2', text: 'Agregar hielo a la jarra o al termo.', icon: 'hielo' },
      { id: 't3', text: 'Colocar la yerba en la guampa.', icon: 'guampa' },
      { id: 't4', text: 'Colocar la bombilla.', icon: 'bombilla' },
      { id: 't5', text: 'Cebar con la preparación fría.', icon: 'cebar' },
      { id: 't6', text: 'Tomar y compartir.', icon: 'compartir' },
    ],
  },
]
