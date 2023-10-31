'use client'

import { ReactNode } from 'react'
import { BsChevronDown } from 'react-icons/bs'

import useToggle from '@/hooks/useToggle'

type NavMenuProps = {
  buttonLabel: string
  buttonIcon?: ReactNode
  children: ReactNode
  showSidebar?: boolean
}

export default function Navbar({
  buttonLabel,
  buttonIcon,
  children,
  showSidebar,
}: NavMenuProps) {
  const [showDropdown, toggleShowDropdown] = useToggle()

  return (
    <>
      <button
        onClick={toggleShowDropdown}
        className="flex w-full items-center gap-2 rounded-md p-2 hover:bg-gray-200"
      >
        {buttonIcon && <span className="text-xl">{buttonIcon}</span>}

        <span className={`ml-2 ${showSidebar ? 'block' : 'hidden'}`}>
          {buttonLabel}
        </span>

        <BsChevronDown className="ml-auto" />
      </button>

      {showDropdown && <div className="space-y-1">{children}</div>}
    </>
  )
}
