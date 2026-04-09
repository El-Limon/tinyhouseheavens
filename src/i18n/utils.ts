import nl from './nl.json';
import fr from './fr.json';
import en from './en.json';

const translations: Record<string, Record<string, any>> = { nl, fr, en };
export type Locale = 'nl' | 'fr' | 'en';

const allLocales: Locale[] = ['nl', 'fr', 'en'];

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];
  for (const k of keys) {
    value = value?.[k];
  }
  return typeof value === 'string' ? value : key;
}

export function tArray(locale: Locale, key: string): string[] {
  const keys = key.split('.');
  let value: any = translations[locale];
  for (const k of keys) {
    value = value?.[k];
  }
  return Array.isArray(value) ? value : [];
}

export function getLocalizedPath(locale: Locale, path: string): string {
  return `/${locale}${path}`;
}

export function getAlternateLocales(locale: Locale): Locale[] {
  return allLocales.filter(l => l !== locale);
}

export function getModelPath(locale: Locale, slug: string): string {
  const segments: Record<Locale, string> = { nl: 'modellen', fr: 'modeles', en: 'models' };
  return `/${locale}/${segments[locale]}/${slug}`;
}

export function getPagePath(locale: Locale, page: string): string {
  const paths: Record<string, Record<Locale, string>> = {
    'models': { nl: '/modellen', fr: '/modeles', en: '/models' },
    'about': { nl: '/over-ons', fr: '/a-propos', en: '/about-us' },
    'services': { nl: '/diensten', fr: '/services', en: '/services' },
    'contact': { nl: '/contact', fr: '/contact', en: '/contact' },
    'faq': { nl: '/faq', fr: '/faq', en: '/faq' },
    'blog': { nl: '/blog', fr: '/blog', en: '/blog' },
    'privacy': { nl: '/privacy', fr: '/confidentialite', en: '/privacy' },
    'terms': { nl: '/voorwaarden', fr: '/conditions', en: '/terms' },
  };
  const localizedPath = paths[page]?.[locale] ?? `/${page}`;
  return `/${locale}${localizedPath}`;
}

export function getLocalizedPathForLocale(currentLocale: Locale, targetLocale: Locale, currentPath: string): string {
  const pages = ['models', 'about', 'services', 'contact', 'faq', 'blog', 'privacy', 'terms'];
  const pathSegments: Record<string, Record<Locale, string>> = {
    'models': { nl: 'modellen', fr: 'modeles', en: 'models' },
    'about': { nl: 'over-ons', fr: 'a-propos', en: 'about-us' },
    'services': { nl: 'diensten', fr: 'services', en: 'services' },
    'contact': { nl: 'contact', fr: 'contact', en: 'contact' },
    'faq': { nl: 'faq', fr: 'faq', en: 'faq' },
    'blog': { nl: 'blog', fr: 'blog', en: 'blog' },
    'privacy': { nl: 'privacy', fr: 'confidentialite', en: 'privacy' },
    'terms': { nl: 'voorwaarden', fr: 'conditions', en: 'terms' },
  };

  let result = currentPath.replace(`/${currentLocale}`, `/${targetLocale}`);
  for (const page of pages) {
    const from = pathSegments[page][currentLocale];
    const to = pathSegments[page][targetLocale];
    if (from !== to) {
      result = result.replace(`/${from}`, `/${to}`);
    }
  }
  return result;
}
