'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'
import { FaBars } from 'react-icons/fa'
import {
  BsPieChartFill,
  BsChatSquareTextFill,
  BsFillBriefcaseFill,
} from 'react-icons/bs'
import { ImExit } from 'react-icons/im'

import useToggle from '@/hooks/useToggle'
import Logo from '@/assets/dashboard/logo.png'

import NavMenu from '../NavMenu'

export default function DashboardNavigation({
  children,
}: {
  children: ReactNode
}) {
  const [showSidebar, toggleShowSidebar] = useToggle(true)

  return (
    <>
      <nav className="border-b border-gray-200 bg-white">
        <div className="flex items-center p-4">
          <div className="w- flex items-center gap-4">
            <button
              onClick={toggleShowSidebar}
              className="rounded-md p-2 hover:bg-gray-100"
            >
              <FaBars className="text-xl" />
            </button>

            <Image width={160} height={50} src={Logo} className="ml-2" alt="" />
          </div>

          <div className="flex flex-1 justify-end"></div>
        </div>
      </nav>

      <div className="flex flex-1">
        <div
          className={`h-full ${
            showSidebar ? 'w-60' : 'w-[70px]'
          }  flex flex-col space-y-3 border-r border-gray-200 bg-white p-4 transition-all`}
        >
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-200"
          >
            <span className="text-xl">
              <BsPieChartFill className="text-blue-800" />
            </span>

            <span className={`ml-2 ${showSidebar ? 'block' : 'hidden'}`}>
              Dashboard
            </span>
          </Link>

          <NavMenu
            buttonIcon={<BsChatSquareTextFill className="text-blue-500" />}
            buttonLabel="Postagens"
            showSidebar={showSidebar}
          >
            <Link
              href="/dashboard/listar-postagens"
              className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-200"
            >
              <span className="ml-4 block">Listar</span>
            </Link>
            <Link
              href="/dashboard/criar-postagem"
              className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-200"
            >
              <span className="ml-4 block">Criar</span>
            </Link>
          </NavMenu>

          <NavMenu
            buttonIcon={<BsFillBriefcaseFill className="text-amber-900" />}
            buttonLabel="Empregos"
            showSidebar={showSidebar}
          >
            <Link
              href="/dashboard/listar-empregos"
              className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-200"
            >
              <span className="ml-4 block">Listar</span>
            </Link>
            <Link
              href="/dashboard/criar-emprego"
              className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-200"
            >
              <span className="ml-4 block">Criar</span>
            </Link>
          </NavMenu>

          <div className="flex flex-1 items-end">
            <button className="mt-auto w-full rounded-md bg-red-400 py-2 text-center font-bold uppercase text-white transition-colors hover:bg-red-500">
              {showSidebar ? 'Sair' : <ImExit className="text-xl" />}
            </button>
          </div>
        </div>

        {children}
      </div>
    </>
  )
}
