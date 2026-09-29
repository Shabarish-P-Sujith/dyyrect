import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const secretKey = process.env.JWT_SECRET || 'fallback-secret-key-dyyrect-12345';
const key = new TextEncoder().encode(secretKey);

export async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get('session');
  let session = null;

  if (sessionCookie) {
    try {
      const { payload } = await jwtVerify(sessionCookie.value, key);
      session = payload;
    } catch (error) {
      session = null;
    }
  }

  const { pathname } = request.nextUrl;

  // Protect admin routes
  if (pathname.startsWith('/admin')) {
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    if (session.role !== 'admin') {
      return NextResponse.redirect(new URL(`/${session.role}`, request.url));
    }
  }

  // Protect customer routes
  if (pathname.startsWith('/customer')) {
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    if (session.role !== 'customer') {
      return NextResponse.redirect(new URL(`/${session.role}`, request.url));
    }
  }

  // Redirect authenticated users away from login page
  if (pathname === '/login') {
    if (session) {
      return NextResponse.redirect(new URL(`/${session.role}`, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/customer/:path*', '/login'],
};
