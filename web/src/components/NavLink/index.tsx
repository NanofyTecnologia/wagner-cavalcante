import { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
  href: string
  children: ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathName = usePathname()

  const isActive = pathName === href

  return (
    <Link href={href} className={`${isActive ? `` : ``}`}>
      {children}
    </Link>
  )
}
