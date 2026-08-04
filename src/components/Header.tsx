import { useEffect, useState } from 'react'
import {
  Menu,
  X,
} from 'lucide-react'
import { Artwork } from './illustrations/IconRegistry'
import { siteConfig } from '../data/siteConfig'
import './Header.css'

const NAV_LINKS = [
  {
    id: 'inicio',
    href: '#inicio',
    label: 'Inicio',
  },
  {
    id: 'resultados',
    href: '#resultados',
    label: 'Resultados',
  },
  {
    id: 'glosario',
    href: '#glosario',
    label: 'Glosario',
  },
  {
    id: 'elementos',
    href: '#elementos',
    label: 'Elementos',
  },
  {
    id: 'juegos',
    href: '#juegos',
    label: 'Juegos',
  },
  {
    id: 'galeria',
    href: '#galeria',
    label: 'Galería',
  },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > 30)

    onScroll()

    window.addEventListener(
      'scroll',
      onScroll,
      { passive: true },
    )

    return () =>
      window.removeEventListener(
        'scroll',
        onScroll,
      )
  }, [])

  useEffect(() => {
    const ids = NAV_LINKS.map(
      (link) => link.id,
    )

    const observer =
      new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setActive(entry.target.id)
            }
          }
        },
        {
          rootMargin:
            '-40% 0px -55% 0px',
        },
      )

    const targets = ids
      .map((id) =>
        document.getElementById(id),
      )
      .filter(
        (
          element,
        ): element is HTMLElement =>
          element !== null,
      )

    targets.forEach((element) =>
      observer.observe(element),
    )

    return () => observer.disconnect()
  }, [])

  const close = () => setOpen(false)

  return (
    <header
      className={`header ${
        scrolled
          ? 'header--scrolled'
          : ''
      }`}
    >
      <nav
        className="header__inner container"
        aria-label="Navegación principal"
      >
        <a
          href="#inicio"
          className="header__brand"
          onClick={close}
        >
          <Artwork
            name="mate"
            size={44}
            className="header__brand-icon"
          />

          <span className="header__brand-text">
            <strong>
              {siteConfig.projectName}
            </strong>

            <small>
              {siteConfig.tagline}
            </small>
          </span>
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="header-menu"
          aria-label={
            open
              ? 'Cerrar menú'
              : 'Abrir menú'
          }
          onClick={() =>
            setOpen((value) => !value)
          }
        >
          {open ? (
            <X
              size={28}
              aria-hidden="true"
            />
          ) : (
            <Menu
              size={28}
              aria-hidden="true"
            />
          )}
        </button>

        <ul
          id="header-menu"
          className={`header__menu ${
            open
              ? 'header__menu--open'
              : ''
          }`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`header__link ${
                  active === link.id
                    ? 'header__link--active'
                    : ''
                }`}
                aria-current={
                  active === link.id
                    ? 'true'
                    : undefined
                }
                onClick={close}
              >
                {link.label}
              </a>
            </li>
          ))}

          <li className="header__cta">
            <a
              href="#encuesta"
              className="btn btn--green btn--sm"
              onClick={close}
            >
              Responder encuesta
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}