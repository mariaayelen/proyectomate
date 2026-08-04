/**
 * ============================================================
 *  YUYOS Y SABORES
 * ============================================================
 *  Cada tarjeta tiene una ilustración (icon), un nombre,
 *  una definición corta y una categoría.
 *
 *  Categorías posibles:
 *  - 'Hierbas'
 *  - 'Frutas'
 *  - 'Ingredientes'
 *  - 'Elementos básicos'
 *
 *  La clave `icon` debe existir en el registro de ilustraciones.
 * ============================================================
 */

export type FlavorCategory = 'Hierbas' | 'Frutas' | 'Ingredientes' | 'Elementos básicos'

export interface FlavorItem {
  id: string
  name: string
  definition: string
  category: FlavorCategory
  icon: string
}

export const flavorCategories: FlavorCategory[] = [
  'Hierbas',
  'Frutas',
  'Ingredientes',
  'Elementos básicos',
]

export const flavorsData: FlavorItem[] = [
  {
    id: 'yerba',
    name: 'Yerba',
    definition: 'Ingrediente principal utilizado para preparar mate o tereré.',
    category: 'Ingredientes',
    icon: 'yerba',
  },
  {
    id: 'menta',
    name: 'Menta',
    definition: 'Hierba aromática y refrescante que se utiliza especialmente en el tereré.',
    category: 'Hierbas',
    icon: 'menta',
  },
  {
    id: 'burrito',
    name: 'Burrito',
    definition: 'Yuyo de sabor suave y refrescante, muy utilizado en el tereré.',
    category: 'Hierbas',
    icon: 'burrito',
  },
  {
    id: 'poleo',
    name: 'Poleo',
    definition: 'Hierba aromática que algunas familias agregan al mate o al tereré.',
    category: 'Hierbas',
    icon: 'poleo',
  },
  {
    id: 'cedron',
    name: 'Cedrón',
    definition: 'Hierba de aroma cítrico y sabor suave.',
    category: 'Hierbas',
    icon: 'cedron',
  },
  {
    id: 'hierbaluisa',
    name: 'Hierba Luisa',
    definition: 'Hierba de aroma fresco y cítrico que puede utilizarse en el tereré.',
    category: 'Hierbas',
    icon: 'hierbaluisa',
  },
  {
    id: 'limon',
    name: 'Limón',
    definition: 'Fruta muy utilizada para aportar sabor y frescura.',
    category: 'Frutas',
    icon: 'limon',
  },
  {
    id: 'naranja',
    name: 'Naranja',
    definition: 'Fruta cítrica que brinda un sabor dulce y refrescante.',
    category: 'Frutas',
    icon: 'naranja',
  },
  {
    id: 'mandarina',
    name: 'Mandarina',
    definition: 'Fruta que puede utilizarse para aromatizar y dar sabor al tereré.',
    category: 'Frutas',
    icon: 'mandarina',
  },
  {
    id: 'pomelo',
    name: 'Pomelo',
    definition: 'Fruta cítrica utilizada en algunas preparaciones de tereré.',
    category: 'Frutas',
    icon: 'pomelo',
  },
  {
    id: 'jengibre',
    name: 'Jengibre',
    definition: 'Raíz de sabor intenso, picante y aromático.',
    category: 'Ingredientes',
    icon: 'jengibre',
  },
  {
    id: 'jugo',
    name: 'Jugo exprimido',
    definition: 'Jugo natural de frutas que puede agregarse al tereré para darle sabor.',
    category: 'Ingredientes',
    icon: 'jugo',
  },
  {
    id: 'azucar',
    name: 'Azúcar',
    definition: 'Ingrediente que algunas personas utilizan para endulzar el mate o el tereré.',
    category: 'Ingredientes',
    icon: 'azucar',
  },
  {
    id: 'aguafria',
    name: 'Agua fría',
    definition: 'Elemento esencial para preparar un tereré refrescante.',
    category: 'Elementos básicos',
    icon: 'aguafria',
  },
  {
    id: 'hielo',
    name: 'Hielo',
    definition: 'Se utiliza para mantener bien fría la preparación.',
    category: 'Elementos básicos',
    icon: 'hielo',
  },
]
