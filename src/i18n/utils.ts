import nl from './nl.json';
import fr from './fr.json';

const translations: Record<string, Record<string, any>> = { nl, fr };
export type Locale = 'nl' | 'fr';

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];
  for (const k of keys) {
    value = value?.[k];
  }
  return typeof value === 'string' ? value : key;
}

export function getLocalizedPath(locale: Locale, path: string): string {
  return `/${locale}${path}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'nl' ? 'fr' : 'nl';
}

export function getModelPath(locale: Locale, slug: string): string {
  const segment = locale === 'nl' ? 'modellen' : 'modeles';
  return `/${locale}/${segment}/${slug}`;
}

export function getPagePath(locale: Locale, page: string): string {
  const paths: Record<string, Record<Locale, string>> = {
    'models': { nl: '/modellen', fr: '/modeles' },
    'about': { nl: '/over-ons', fr: '/a-propos' },
    'services': { nl: '/diensten', fr: '/services' },
    'contact': { nl: '/contact', fr: '/contact' },
    'faq': { nl: '/faq', fr: '/faq' },
    'blog': { nl: '/blog', fr: '/blog' },
    'privacy': { nl: '/privacy', fr: '/confidentialite' },
    'terms': { nl: '/voorwaarden', fr: '/conditions' },
  };
  const localizedPath = paths[page]?.[locale] ?? `/${page}`;
  return `/${locale}${localizedPath}`;
}
