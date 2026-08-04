/**
 * ============================================================
 *  GLOSARIO MATERO
 * ============================================================
 *  Cada término tiene una ilustración (icon), un nombre,
 *  una categoría y una definición que se muestra al girar
 *  la tarjeta.
 *
 *  Categorías posibles:
 *  - 'Elementos'
 *  - 'Yuyos y sabores'
 *  - 'Acciones'
 * ============================================================
 */

export type GlossaryCategory = 'Elementos' | 'Yuyos y sabores' | 'Acciones'

export interface GlossaryTerm {
  id: string
  name: string
  category: GlossaryCategory
  definition: string
  icon: string
}

export const glossaryCategories: GlossaryCategory[] = [
  'Elementos',
  'Yuyos y sabores',
  'Acciones',
]

export const glossaryData: GlossaryTerm[] = [
  {
    id: 'yerba',
    name: 'Yerba',
    category: 'Elementos',
    definition:
      'Ingrediente principal que se coloca dentro del mate o la guampa para preparar la infusión.',
    icon: 'yerba',
  },
  {
    id: 'bombilla',
    name: 'Bombilla',
    category: 'Elementos',
    definition:
      'Elemento metálico que se utiliza para tomar mate o tereré y filtrar la yerba.',
    icon: 'bombilla',
  },
  {
    id: 'mate',
    name: 'Mate',
    category: 'Elementos',
    definition: 'Recipiente donde se coloca la yerba y se prepara el mate.',
    icon: 'mate',
  },
  {
    id: 'termo',
    name: 'Termo',
    category: 'Elementos',
    definition: 'Recipiente que conserva el agua caliente o fría.',
    icon: 'termo',
  },
  {
    id: 'guampa',
    name: 'Guampa',
    category: 'Elementos',
    definition: 'Recipiente utilizado especialmente para tomar tereré.',
    icon: 'guampa',
  },
  {
    id: 'jarra',
    name: 'Jarra',
    category: 'Elementos',
    definition:
      'Recipiente que se utiliza para preparar y servir el agua, el jugo o la mezcla del tereré.',
    icon: 'jarra',
  },
  {
    id: 'vaso',
    name: 'Vaso',
    category: 'Elementos',
    definition: 'Recipiente que puede utilizarse para algunas preparaciones de tereré.',
    icon: 'vaso',
  },
  {
    id: 'agua',
    name: 'Agua',
    category: 'Elementos',
    definition: 'Elemento necesario para preparar mate o tereré.',
    icon: 'agua',
  },
  {
    id: 'hielo',
    name: 'Hielo',
    category: 'Elementos',
    definition: 'Se utiliza para conservar fría el agua del tereré.',
    icon: 'hielo',
  },
  {
    id: 'jugo',
    name: 'Jugo',
    category: 'Elementos',
    definition: 'Bebida de frutas que puede agregarse al tereré para darle sabor.',
    icon: 'jugo',
  },
  {
    id: 'yuyos',
    name: 'Yuyos',
    category: 'Elementos',
    definition:
      'Nombre cotidiano que se utiliza para hablar de las hierbas que se agregan al mate o al tereré.',
    icon: 'yuyos',
  },
  {
    id: 'menta',
    name: 'Menta',
    category: 'Yuyos y sabores',
    definition: 'Hierba aromática y refrescante utilizada principalmente en el tereré.',
    icon: 'menta',
  },
  {
    id: 'burrito',
    name: 'Burrito',
    category: 'Yuyos y sabores',
    definition: 'Yuyo de sabor suave y aroma fresco.',
    icon: 'burrito',
  },
  {
    id: 'poleo',
    name: 'Poleo',
    category: 'Yuyos y sabores',
    definition: 'Hierba aromática que puede agregarse al mate o al tereré.',
    icon: 'poleo',
  },
  {
    id: 'cedron',
    name: 'Cedrón',
    category: 'Yuyos y sabores',
    definition: 'Hierba de aroma cítrico y sabor agradable.',
    icon: 'cedron',
  },
  {
    id: 'hierbaluisa',
    name: 'Hierba Luisa',
    category: 'Yuyos y sabores',
    definition: 'Hierba aromática de perfume cítrico.',
    icon: 'hierbaluisa',
  },
  {
    id: 'limon',
    name: 'Limón',
    category: 'Yuyos y sabores',
    definition: 'Fruta cítrica utilizada para dar frescura y sabor.',
    icon: 'limon',
  },
  {
    id: 'naranja',
    name: 'Naranja',
    category: 'Yuyos y sabores',
    definition: 'Fruta cítrica que aporta un sabor dulce y refrescante.',
    icon: 'naranja',
  },
  {
    id: 'mandarina',
    name: 'Mandarina',
    category: 'Yuyos y sabores',
    definition: 'Fruta aromática que puede agregarse al tereré.',
    icon: 'mandarina',
  },
  {
    id: 'pomelo',
    name: 'Pomelo',
    category: 'Yuyos y sabores',
    definition: 'Fruta cítrica de sabor intenso utilizada en algunas preparaciones.',
    icon: 'pomelo',
  },
  {
    id: 'jengibre',
    name: 'Jengibre',
    category: 'Yuyos y sabores',
    definition: 'Raíz aromática de sabor levemente picante.',
    icon: 'jengibre',
  },
  {
    id: 'azucar',
    name: 'Azúcar',
    category: 'Yuyos y sabores',
    definition: 'Ingrediente utilizado por algunas personas para endulzar.',
    icon: 'azucar',
  },
  {
    id: 'preparar',
    name: 'Preparar',
    category: 'Acciones',
    definition: 'Organizar y combinar los elementos necesarios para hacer mate o tereré.',
    icon: 'preparar',
  },
  {
    id: 'agitar',
    name: 'Agitar',
    category: 'Acciones',
    definition: 'Mover suavemente la yerba o la preparación antes de servir.',
    icon: 'agitar',
  },
  {
    id: 'cebar',
    name: 'Cebar',
    category: 'Acciones',
    definition:
      'Servir el agua sobre la yerba para preparar y compartir el mate o el tereré.',
    icon: 'cebar',
  },
  {
    id: 'tomar',
    name: 'Tomar',
    category: 'Acciones',
    definition: 'Beber el mate o el tereré utilizando la bombilla.',
    icon: 'tomar',
  },
  {
    id: 'colar',
    name: 'Colar',
    category: 'Acciones',
    definition:
      'Pasar el jugo o la preparación por un colador para retirar restos de frutas o hierbas.',
    icon: 'colar',
  },
  {
    id: 'compartir',
    name: 'Compartir',
    category: 'Acciones',
    definition: 'Participar de una ronda de mate o tereré con otras personas.',
    icon: 'compartir',
  },
]
