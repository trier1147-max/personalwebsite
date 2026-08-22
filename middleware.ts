import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { siteConfig } from './site-config'

const locales = siteConfig.i18n.locales
const defaultLocale = siteConfig.i18n.defaultLocale

function getLocale(request: NextRequest): string {
  // Check Accept-Language header
  const acceptLanguage = request.headers.get('Accept-Language')
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim().substring(0, 2))
      .find(lang => locales.includes(lang as any))
    
    if (preferredLocale) {
      return preferredLocale
    }
  }
  
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  // Skip for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/demos') ||
    pathname.includes('.') // Static files
  ) {
    return NextResponse.next()
  }

  // Redirect to locale-prefixed path
  // Force root domain to default locale
  const locale = pathname === '/' ? defaultLocale : getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip internal paths
    '/((?!_next|api|images|demos|favicon.ico).*)',
  ],
}
