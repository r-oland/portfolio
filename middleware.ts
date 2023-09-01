import { NextRequest, NextResponse } from 'next/server';

function getLocale(request: Request): string {
  if (request.url.includes('rolandbranten.nl')) return 'nl';
  return 'en';
}

export function middleware(request: NextRequest) {
  const locale = getLocale(request);
  const { pathname } = request.nextUrl;

  const newUrl = new URL(`/${locale}${pathname}`, request.nextUrl);

  // e.g. incoming request is /products
  // The new URL is now /en/products
  return NextResponse.rewrite(newUrl);
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
