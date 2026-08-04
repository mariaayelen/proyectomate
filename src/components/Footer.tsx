import { siteConfig } from '../data/siteConfig'
import { Artwork } from './illustrations/IconRegistry'
import { Heart } from './illustrations/DecorativeLeaves'

export function Footer() {
  const hasContact = siteConfig.contact.email || siteConfig.contact.phone
  const socials = Object.values(siteConfig.social).filter(Boolean)

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Artwork name="mate" size={52} className="footer__brand-icon" />
          <div>
            <strong>{siteConfig.projectName}</strong>
            <span>
              {siteConfig.tagline} · {siteConfig.event} {siteConfig.year}
            </span>
          </div>
        </div>

        <div className="footer__info">
          <p>
            {siteConfig.schoolName} · {siteConfig.grade} · {siteConfig.location}
          </p>
          {hasContact && (
            <p>
              {siteConfig.contact.email && <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>}
              {siteConfig.contact.email && siteConfig.contact.phone && ' · '}
              {siteConfig.contact.phone && <span>{siteConfig.contact.phone}</span>}
            </p>
          )}
          {socials.length > 0 && (
            <p className="footer__socials">
              {siteConfig.social.instagram && <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>}
              {siteConfig.social.facebook && <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>}
              {siteConfig.social.youtube && <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>}
            </p>
          )}
        </div>

        <p className="footer__love">
          Hecho con <Heart size={16} className="footer__heart" /> y mucha yerba, en{' '}
          {siteConfig.location}.
        </p>
      </div>
    </footer>
  )
}
