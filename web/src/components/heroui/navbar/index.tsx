'use client'

import Image from 'next/image'

import { CircleX } from 'lucide-react'

import {
  Navbar as NavbarContainer,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@heroui/react'

import Logo from '@/assets/logo/07.png'
import { SearchLink } from '@/components/search-link'
import useToggle from '@/hooks/useToggle'

const Navbar = () => {
  const [showModal, toggleShow, elementRef] = useToggle()

  return (
    <>
      <NavbarContainer
        classNames={{
          item: [
            'flex',
            'h-full',
            'relative',
            'items-center',
            "data-[active=true]:after:content-['']",
            'data-[active=true]:after:absolute',
            'data-[active=true]:after:bottom-0',
            'data-[active=true]:after:left-0',
            'data-[active=true]:after:right-0',
            'data-[active=true]:after:h-[2px]',
            'data-[active=true]:after:rounded-[2px]',
            'data-[active=true]:after:bg-primary',
          ],
        }}
      >
        <NavbarBrand>
          <Link rel="noopener noreferrer" href="/" className="h-8">
            <Image
              src={Logo}
              className="h-full w-full object-contain"
              alt="Logo Wagner Cavalcante Advogados"
              priority
            />
          </Link>
        </NavbarBrand>
        <NavbarContent
          className="hidden gap-6 text-white sm:flex"
          justify="center"
        >
          <NavbarItem>
            <SearchLink name="Serviços" hash="#servicos" />
          </NavbarItem>
          <NavbarItem>
            <Link
              rel="noopener noreferrer"
              className="hover:text-primary"
              color="foreground"
              href="/escritorio"
            >
              O Escritório
            </Link>
          </NavbarItem>
          <NavbarItem>
            <SearchLink name="Clientes" hash="#nossos-clientes" />
          </NavbarItem>
          <NavbarItem>
            <SearchLink name="Contato" hash="#contato" />
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <div
              className="hover:text-primary text-foreground hover:cursor-pointer"
              onClick={toggleShow}
            >
              Login
            </div>
          </NavbarItem>
        </NavbarContent>
      </NavbarContainer>

      {showModal && (
        <div className="fixed top-0 left-0 z-50 h-full w-full overflow-hidden bg-black/60">
          <div className="mx-auto flex h-full w-full max-w-md items-center justify-center">
            <div
              className="relative w-full rounded bg-white p-6"
              ref={elementRef}
            >
              <button
                onClick={toggleShow}
                className="text-wcavalcante-ironside hover:text-destructive absolute top-2 right-2 rounded-full p-1 text-2xl hover:cursor-pointer"
              >
                <CircleX />
              </button>
              <div className="mb-4 flex items-center justify-between text-neutral-600">
                <h1 className="">Faça seu login para acessar seu processo:</h1>
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
                  className="focus:border-primary block w-full rounded-md border border-neutral-300 bg-neutral-200 p-2 outline-none placeholder:text-sm"
                />
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  className="focus:border-primary block w-full rounded-md border border-neutral-300 bg-neutral-200 p-2 outline-none placeholder:text-sm"
                />
                <input
                  type="submit"
                  value="Entrar"
                  className="bg-wcavalcante-blue hover:bg-wcavalcante-blue/80 w-full cursor-pointer rounded-md p-2 text-white"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export { Navbar }
