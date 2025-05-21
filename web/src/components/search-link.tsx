'use client'

import { usePathname, useRouter } from 'next/navigation'

import React from 'react'

interface SearchLinkProps {
  hash: string
  name: string
}

const SearchLink = ({ hash, name }: SearchLinkProps) => {
  const { push } = useRouter()
  const currentPath = usePathname()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (currentPath === '/') {
      const id = hash.substring(1)
      scrollToSection(id)
      window.history.pushState(null, '', hash)
    } else {
      push(`/${hash}`)
    }
  }

  return (
    <>
      <div
        className="hover:text-primary text-foreground hover:cursor-pointer"
        onClick={(e) =>
          handleClick(e as unknown as React.MouseEvent<HTMLAnchorElement>)
        }
      >
        {name}
      </div>
    </>
  )
}

export { SearchLink }
