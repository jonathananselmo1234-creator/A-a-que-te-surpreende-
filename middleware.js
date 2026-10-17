import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/membros.html', '/membros/:path*', '/curso/:path*']
}

export default function middleware(request) {
  const temCracha = request.cookies.get('acesso');
  if (!temCracha) {
    return NextResponse.redirect(new URL('/login.html', request.url));
  }
  return NextResponse.next();
}
