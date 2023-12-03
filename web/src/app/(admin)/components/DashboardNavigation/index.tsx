'use client'

import Image from 'next/image'
import { ReactNode } from 'react'
import { FaBars } from 'react-icons/fa'
import { BiSolidUserCircle } from 'react-icons/bi'

import useToggle from '@/hooks/useToggle'
import Logo from '@/assets/dashboard/logo.png'

import Sidebar from '../Sidebar'
import Link from 'next/link'

export default function DashboardNavigation({
  children,
}: {
  children: ReactNode
}) {
  const [showSidebar, toggleShowSidebar, elementRef, buttonRef] =
    useToggle(false)

  return (
    <>
      <nav className="border-b border-gray-200 bg-white">
        <div className="flex items-center p-4">
          <div className="flex items-center gap-4">
            <button
              ref={buttonRef}
              onClick={toggleShowSidebar}
              className="rounded-md p-2 hover:bg-gray-100"
            >
              <FaBars className="text-xl" />
            </button>

            <Image width={160} height={50} src={Logo} className="ml-2" alt="" />
          </div>

          <div className="flex flex-1 justify-end hover:cursor-pointer">
            <Link href="/dashboard/profile">
              <BiSolidUserCircle className="text-4xl" />
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex flex-1">
        <Sidebar
          elementRef={elementRef}
          showSidebar={showSidebar}
          toggleShowSidebar={toggleShowSidebar}
        />

        {children}
      </div>
    </>
  )
}
