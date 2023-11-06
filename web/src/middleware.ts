import { NextRequest, NextResponse } from 'next/server'

export default async function middleware(req: NextRequest) {
  // const token = req.cookies.get('token')?.value
  // if (!token) {
  //   return NextResponse.redirect(`${process.env.NEXT_PUBLIC_WEB_URL}/login`)
  // }
  // try {
  //   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //   if (!response.ok) {
  //     return NextResponse.redirect(`${process.env.NEXT_PUBLIC_WEB_URL}/login`)
  //   }
  //   return NextResponse.next()
  // } catch (error) {
  //   return NextResponse.redirect(`${process.env.NEXT_PUBLIC_WEB_URL}/login`)
  // }
}

export const config = {
  matcher: ['/dashboard', '/dashboard/:path*'],
}
