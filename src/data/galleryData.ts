/**
 * ============================================================
 *  GALERÍA DEL PROYECTO
 * ============================================================
 *
 *  Colocar las fotografías en:
 *
 *  src/assets/gallery/
 *
 *  En la propiedad "image" se escribe solamente el nombre,
 *  sin la extensión .jpg, .png, .jpeg o .webp.
 * ============================================================
 */

export type GalleryTone =
  | 'aula'
  | 'investigando'
  | 'encuestas'
  | 'mateada'
  | 'escolar'
  | 'zonal'

export type GalleryCategory =
  | 'aula'
  | 'investigacion'
  | 'encuestas'
  | 'encuentros'
  | 'feria-escolar'
  | 'feria-zonal'

export interface GalleryItem {
  id: string

  /**
   * Nombre del archivo sin la extensión.
   * Ejemplo: aula01
   */
  image: string

  title: string
  description: string
  tone: GalleryTone
  category: GalleryCategory
}

export const galleryData: GalleryItem[] = [
  {
    id: 'aula-01',
    image: 'aula01',
    title: 'Primeros pasos en el aula',
    description:
      'Comenzamos a conversar sobre nuestras costumbres y a organizar las preguntas que orientarían la investigación.',
    tone: 'aula',
    category: 'aula',
  },
  {
    id: 'aula-04',
    image: 'aula04',
    title: 'Trabajo colaborativo',
    description:
      'Trabajamos en equipo, compartimos ideas y registramos lo que cada estudiante sabía sobre el mate y el tereré.',
    tone: 'aula',
    category: 'aula',
  },
  {
    id: 'investigacion-01',
    image: 'investigacion01',
    title: 'Buscando información',
    description:
      'Investigamos acerca de los yuyos, los sabores y las costumbres relacionadas con estas infusiones.',
    tone: 'investigando',
    category: 'investigacion',
  },
  {
    id: 'investigacion-02',
    image: 'investigacion02',
    title: 'Registrando lo aprendido',
    description:
      'Seleccionamos información importante y organizamos nuestros descubrimientos para compartirlos.',
    tone: 'investigando',
    category: 'investigacion',
  },
  {
    id: 'disenamos',
    image: 'disenamos',
    title: 'Diseñamos nuestro proyecto',
    description:
      'Preparamos materiales, afiches y recursos para comunicar de una manera clara y atractiva lo investigado.',
    tone: 'investigando',
    category: 'investigacion',
  },
  {
    id: 'encuesta-01',
    image: 'encuesta01',
    title: 'Realizando encuestas',
    description:
      'Consultamos a integrantes de nuestra comunidad para conocer sus preferencias y costumbres.',
    tone: 'encuestas',
    category: 'encuestas',
  },
  {
    id: 'encuesta-02',
    image: 'encuesta02',
    title: 'Escuchando a la comunidad',
    description:
      'Registramos las respuestas y aprendimos a organizar los datos obtenidos mediante las encuestas.',
    tone: 'encuestas',
    category: 'encuestas',
  },
  {
    id: 'encuentro-matero-01',
    image: 'encuentro_matero01',
    title: 'Encuentro matero',
    description:
      'Compartimos un encuentro especial para conversar sobre historias, recuerdos y formas de preparar las infusiones.',
    tone: 'mateada',
    category: 'encuentros',
  },
  {
    id: 'encuentro-matero-02',
    image: 'encuentro_matero02',
    title: 'Saberes compartidos',
    description:
      'Reconocimos que cada familia conserva conocimientos y preferencias diferentes sobre el mate y el tereré.',
    tone: 'mateada',
    category: 'encuentros',
  },
  {
    id: 'compartimos',
    image: 'compartimos',
    title: 'Compartimos lo aprendido',
    description:
      'La ronda de mate y tereré se convirtió en un espacio de conversación, intercambio y aprendizaje.',
    tone: 'mateada',
    category: 'encuentros',
  },
  {
    id: 'feria-escolar-01',
    image: 'feriaescolar01',
    title: 'Preparando la feria escolar',
    description:
      'Organizamos el espacio y los materiales necesarios para presentar nuestro trabajo.',
    tone: 'escolar',
    category: 'feria-escolar',
  },
  {
    id: 'feria-escolar-02',
    image: 'feriaescolar02',
    title: 'Presentamos nuestro proyecto',
    description:
      'Los estudiantes explicaron el proceso de investigación y compartieron los resultados obtenidos.',
    tone: 'escolar',
    category: 'feria-escolar',
  },
  {
    id: 'feria-escolar-03',
    image: 'feriaescolar03',
    title: 'Feria de Ciencias escolar',
    description:
      'Vivimos una jornada de intercambio, aprendizaje y valoración del trabajo realizado.',
    tone: 'escolar',
    category: 'feria-escolar',
  },
  {
    id: 'feria-zonal-01',
    image: 'feriazonal01',
    title: 'Llegamos a la instancia zonal',
    description:
      'Representamos a nuestra escuela y compartimos el proyecto con estudiantes y docentes de otras instituciones.',
    tone: 'zonal',
    category: 'feria-zonal',
  },
  {
    id: 'feria-zonal-02',
    image: 'feriazonal02',
    title: 'Presentación en la feria zonal',
    description:
      'Continuamos aprendiendo, explicando nuestros descubrimientos y disfrutando de la experiencia.',
    tone: 'zonal',
    category: 'feria-zonal',
  },
]