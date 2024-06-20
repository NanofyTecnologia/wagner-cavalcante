'use client'

import Link from 'next/link'
import {
  BsPieChartFill,
  BsChatSquareTextFill,
  BsFillBriefcaseFill,
  BsTable,
  BsPlusLg,
} from 'react-icons/bs'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { destroyCookie } from 'nookies'
import { ImExit } from 'react-icons/im'
import { useLayoutEffect, useState } from 'react'

import NavMenu from '../NavMenu'

type SidebarProps = {
  showSidebar: boolean
  toggleShowSidebar: () => void
  elementRef: React.RefObject<HTMLDivElement>
}

export default function Sidebar({ elementRef, showSidebar }: SidebarProps) {
  const router = useRouter()

  const [media, setMedia] = useState<{
    width: number
    height: number
  } | null>(null)

  const handleLogout = () => {
    destroyCookie(null, 'token')

    router.push('/login')
  }

  useLayoutEffect(() => {
    const mediaWidth = window.innerWidth
    const mediaHeight = window.innerHeight

    setMedia({
      width: mediaWidth,
      height: mediaHeight,
    })

    return () => {
      setMedia(null)
    }
  }, [])

  return (
    <>
      {media && media.width < 768 ? (
        <>
          <div
            ref={elementRef}
            className={`h-full ${
              showSidebar ? 'translate-x-0' : '-translate-x-60'
            }  fixed left-0 z-20 flex flex-col space-y-3 border-r border-gray-200 bg-white p-4 transition-all`}
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
              <button
                onClick={handleLogout}
                className="mt-auto flex w-full items-center justify-center rounded-md bg-red-400 py-2 text-center font-bold uppercase text-white transition-colors hover:bg-red-500"
              >
                {showSidebar ? 'Sair' : <ImExit className="text-xl" />}
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
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
                {showSidebar ? (
                  <span className="ml-4 block">Listar</span>
                ) : (
                  <div className="flex w-full items-center justify-center">
                    <BsTable className="text-neutral-600" />
                  </div>
                )}
              </Link>
              <Link
                href="/dashboard/criar-postagem"
                className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-200"
              >
                {showSidebar ? (
                  <span className="ml-4 block">Criar</span>
                ) : (
                  <div className="flex w-full items-center justify-center">
                    <BsPlusLg className="text-neutral-600" />
                  </div>
                )}
              </Link>
            </NavMenu>

            <NavMenu
              buttonIcon={<BsFillBriefcaseFill className="text-amber-900" />}
              buttonLabel="Empregos"
              showSidebar={showSidebar}
            >
              <Link
                href="/dashboard/listar-empregos"
                className="flex border-collapse items-center gap-2 rounded-md p-2 hover:bg-gray-200"
              >
                {showSidebar ? (
                  <span className="ml-4 block">Listar</span>
                ) : (
                  <>
                    <div className="flex w-full items-center justify-center">
                      <BsTable className="text-neutral-600" />
                    </div>
                  </>
                )}
              </Link>
              <Link
                href="/dashboard/criar-emprego"
                className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-200"
              >
                {showSidebar ? (
                  <span className="ml-4 block">Criar</span>
                ) : (
                  <div className="flex w-full items-center justify-center">
                    <BsPlusLg className="text-neutral-600" />
                  </div>
                )}
              </Link>
            </NavMenu>

            <div className="flex flex-1 items-end">
              <button
                onClick={() => signOut()}
                className="mt-auto flex w-full items-center justify-center rounded-md bg-red-400 py-2 text-center font-bold uppercase text-white transition-colors hover:bg-red-500"
              >
                {showSidebar ? 'Sair' : <ImExit className="text-xl" />}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}
