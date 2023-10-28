import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'
import { FaBars } from 'react-icons/fa'
import {
  BsPieChartFill,
  BsChatSquareTextFill,
  BsFillBriefcaseFill,
} from 'react-icons/bs'

import Logo from '@/assets/dashboard/logo.png'
import NavMenu from '../NavMenu'

export default function DashboardNavigation({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <nav className="border-b border-gray-200 bg-white">
        <div className="p-4">
          <div className="flex items-center gap-4">
            <button className="rounded-md p-2 hover:bg-gray-100">
              <FaBars className="text-xl" />
            </button>

            <Image width={160} height={50} src={Logo} className="ml-2" alt="" />
          </div>
        </div>
      </nav>

      <div className="flex flex-1">
        <div className="h-full w-60 space-y-3 border-r border-gray-200 bg-white p-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-200"
          >
            <BsPieChartFill />

            <span className="ml-2 block">Dashboard</span>
          </Link>

          <NavMenu
            buttonIcon={<BsChatSquareTextFill className="text-blue-500" />}
            buttonLabel="Postagens"
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
        </div>

        {children}
      </div>
    </>
  )
}
