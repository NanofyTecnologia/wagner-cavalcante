'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'

import logo from '@/assets/images/logo.jpg'
import useToggle from '@/hooks/useToggle'
import { BiX } from 'react-icons/bi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showModal, toggleShow, elementRef, buttonRef] = useToggle()
  const [windowScrolled, setWindowScrolled] = useState<boolean>(false)

  const pathName = usePathname()
  const menuRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = () => {
    const { scrollY } = window

    if (scrollY > 65) {
      setWindowScrolled(true)
      return
    }

    setWindowScrolled(false)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isOpen && !menuRef.current?.contains(event.target as Node)) {
        closeMenu()
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [isOpen])

  return (
    <>
      <div className={`h-[60px] ${pathName !== '/' ? 'block' : 'hidden'}`} />

      <nav
        className={`fixed left-0 top-0 z-50 w-full px-4 py-4 transition-colors duration-200 md:px-6 ${
          windowScrolled ? 'fixed bg-ironside shadow-md' : ''
        } ${pathName !== '/' ? 'bg-rangoon' : 'bg-none'}`}
      >
        <div className="flex w-full items-center justify-between text-white">
          <Link href={'/'}>
            {windowScrolled ? (
              <Image
                src={logo}
                alt="Logo da Empresa Monte e Cavalcante Advogados"
                className="w-10 rounded-full object-cover sm:w-12"
              />
            ) : (
              <h1 className="font-italiana text-lg uppercase text-white md:text-xl">
                monte e cavalcante
              </h1>
            )}
          </Link>

          <div className="hidden sm:visible sm:flex sm:items-center md:gap-2 md:text-xl">
            <ul className="inline-flex gap-5 text-sm uppercase md:gap-9 md:text-base">
              <li>
                <Link href={'/'} className="hover:text-primary" rel="">
                  Home
                </Link>
              </li>
              <li>
                <Link href={'quem-somos'} className="hover:text-primary" rel="">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href={'servicos'} className="hover:text-primary" rel="">
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href={'trabalhe-conosco'}
                  className="hover:text-primary"
                  rel=""
                >
                  Trabalhe Conosco
                </Link>
              </li>
              <li>
                <Link href={'noticias'} className="hover:text-primary" rel="">
                  Notícias
                </Link>
              </li>
              <li>
                <Link href={'contato'} className="hover:text-primary" rel="">
                  Contato
                </Link>
              </li>
              <li className="flex items-center hover:text-primary">
                <AiOutlineSearch className="text-xl" />
              </li>
            </ul>
          </div>

          <div className="invisible sm:visible">
            <button
              onClick={toggleShow}
              className="cursor-pointer rounded-md border-2 bg-transparent px-3 py-1 text-white hover:bg-white hover:text-black"
            >
              Login
            </button>
          </div>

          <div className="relative sm:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex items-center justify-center text-4xl"
              aria-label="Menu"
            >
              <AiOutlineMenu className="text-2xl text-white" />
            </button>
            {isOpen && (
              <div ref={menuRef} className="absolute -right-4 z-10">
                <ul className="mt-4 w-screen border-gray-200 bg-white px-12 py-2 text-black shadow-md">
                  <li className="border-b-2 border-ironside/70">
                    <Link href={'/'} rel="">
                      <div className="py-3 text-lg">Home</div>
                    </Link>
                  </li>
                  <li className="border-b-2 border-ironside/70">
                    <Link href={'quem-somos'} rel="">
                      <div className="py-3 text-lg">Quem Somos</div>
                    </Link>
                  </li>
                  <li className="border-b-2 border-ironside/70">
                    <Link href={'servicos'} rel="">
                      <div className="py-3 text-lg">Serviços</div>
                    </Link>
                  </li>
                  <li className="border-b-2 border-ironside/70">
                    <Link href={'trabalhe-conosco'} rel="">
                      <div className="py-3 text-lg">Trabalhe Conosco</div>
                    </Link>
                  </li>
                  <li className="border-b-2 border-ironside/70">
                    <Link href={'noticias'} rel="">
                      <div className="py-3 text-lg">Notícias</div>
                    </Link>
                  </li>
                  <li className="border-b-2 border-ironside/70">
                    <Link href={'contato'} rel="">
                      <div className="py-3 text-lg">Contato</div>
                    </Link>
                  </li>
                  <li className="">
                    <Link href={'/login'} rel="">
                      <div className="py-3 text-lg text-amber-800">Login</div>
                    </Link>
                    <button></button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {showModal && (
        <div className="fixed left-0 top-0 z-50 h-full w-full overflow-hidden bg-black/60">
          <div className="mx-auto flex h-full w-full max-w-md items-center justify-center">
            <div className="w-full rounded-md bg-white p-6" ref={elementRef}>
              <div className="mb-4 flex items-center justify-between text-neutral-600">
                <h1 className="text-2xl">Entrar na plataforma</h1>

                <button
                  onClick={toggleShow}
                  className="rounded-full p-2 text-2xl hover:bg-neutral-100"
                >
                  <BiX />
                </button>
              </div>
              <form
                name="form"
                method="post"
                className="space-y-4"
                target="_blank"
                action="https://www.siteadv.com.br/mmcadvs/ExternalLogin.aspx?id=8863"
              >
                <input
                  type="text"
                  name="login"
                  placeholder="Usuário"
                  className="block w-full rounded-md border border-neutral-300 bg-neutral-200 p-3 outline-none focus:border-primary"
                />
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  className="block w-full rounded-md border border-neutral-300 bg-neutral-200 p-3 outline-none focus:border-primary"
                />
                <input
                  type="submit"
                  value="Entrar"
                  className="w-full cursor-pointer rounded-md bg-blue-500 p-3 text-white hover:bg-blue-600"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
