import { NextRequest, NextResponse } from 'next/server'

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value

  if (!token) {
    console.log('No token, redirecting to login')
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_WEB_URL}/login`)
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    console.log(response.status)

    if (!response.ok) {
      console.log('Invalid token, redirecting to login 1')
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_WEB_URL}/login`)
    }
    return NextResponse.next()
  } catch (error) {
    console.log('Invalid token, redirecting to login 2')
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_WEB_URL}/login`)
  }
}

export const config = {
  matcher: ['/dashboard', '/dashboard/:path*'],
}
