import type { CSSProperties } from 'react'

const iconSources: Record<string, string> = {
  agitar: new URL('../../assets/custom-icons/agitar.png', import.meta.url).href,
  agua: new URL('../../assets/custom-icons/agua.png', import.meta.url).href,
  aguafria: new URL('../../assets/custom-icons/agua_fria.png', import.meta.url).href,
  azucar: new URL('../../assets/custom-icons/azucar.png', import.meta.url).href,
  bombilla: new URL('../../assets/custom-icons/bombilla.png', import.meta.url).href,
  burrito: new URL('../../assets/custom-icons/burrito.png', import.meta.url).href,
  cebar: new URL('../../assets/custom-icons/cebar.png', import.meta.url).href,
  cedron: new URL('../../assets/custom-icons/cedron.png', import.meta.url).href,
  colar: new URL('../../assets/custom-icons/colar.png', import.meta.url).href,
  compartir: new URL('../../assets/custom-icons/compartir.png', import.meta.url).href,
  guampa: new URL('../../assets/custom-icons/guampa.png', import.meta.url).href,
  hielo: new URL('../../assets/custom-icons/hielo.png', import.meta.url).href,
  hierbaluisa: new URL('../../assets/custom-icons/hierba_luisa.png', import.meta.url).href,
  jarra: new URL('../../assets/custom-icons/jarra.png', import.meta.url).href,
  jengibre: new URL('../../assets/custom-icons/jengibre.png', import.meta.url).href,
  jugo: new URL('../../assets/custom-icons/jugo.png', import.meta.url).href,
  limon: new URL('../../assets/custom-icons/limon.png', import.meta.url).href,
  mandarina: new URL('../../assets/custom-icons/mandarina.png', import.meta.url).href,
  mate: new URL('../../assets/custom-icons/mate.png', import.meta.url).href,
  matevacio: new URL('../../assets/custom-icons/mate_vacio.png', import.meta.url).href,
  menta: new URL('../../assets/custom-icons/menta.png', import.meta.url).href,
  naranja: new URL('../../assets/custom-icons/naranja.png', import.meta.url).href,
  poleo: new URL('../../assets/custom-icons/poleo.png', import.meta.url).href,
  pomelo: new URL('../../assets/custom-icons/pomelo.png', import.meta.url).href,
  preparar: new URL('../../assets/custom-icons/preparar.png', import.meta.url).href,
  termo: new URL('../../assets/custom-icons/termo.png', import.meta.url).href,
  tomar: new URL('../../assets/custom-icons/tomar.png', import.meta.url).href,
  vaso: new URL('../../assets/custom-icons/vaso.png', import.meta.url).href,
  yerba: new URL('../../assets/custom-icons/yerba.png', import.meta.url).href,
}

// Alias usados por los datos existentes.
iconSources.yuyos = iconSources.burrito
iconSources.terere = iconSources.guampa

export const iconRegistry = iconSources

export function Artwork({
  name,
  className,
  size = '100%',
}: {
  name: string
  className?: string
  size?: number | string
}) {
  const src = iconSources[name]
  if (!src) return null

  const style: CSSProperties = {
    width: size,
    height: size,
    objectFit: 'contain',
    display: 'block',
    margin: 'auto',
  }

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      draggable={false}
      className={`custom-artwork${className ? ` ${className}` : ''}`}
      style={style}
    />
  )
}
