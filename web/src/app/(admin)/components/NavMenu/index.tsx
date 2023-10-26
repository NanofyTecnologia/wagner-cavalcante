'use client'

import useToggle from '@/hooks/useToggle'
import { BsChevronDown } from 'react-icons/bs'

type NavMenuProps = {
  buttonLabel: string
  buttonIcon?: React.ReactNode
  children: React.ReactNode
}

export default function NavMenu({
  buttonLabel,
  buttonIcon,
  children,
}: NavMenuProps) {
  const [showDropdown, toggleShowDropdown] = useToggle()

  return (
    <>
      <button
        onClick={toggleShowDropdown}
        className="flex w-full items-center gap-2 rounded-md p-2 hover:bg-gray-200"
      >
        {buttonIcon && buttonIcon}

        <span className="ml-2 block">{buttonLabel}</span>

        <BsChevronDown className="ml-auto" />
      </button>

      {showDropdown && <div className="space-y-1">{children}</div>}
    </>
  )
}
