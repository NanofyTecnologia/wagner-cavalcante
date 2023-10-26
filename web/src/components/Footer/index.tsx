'use client'

import Link from 'next/link'

import Container from '@/components/Container'
import Image from 'next/image'
import logoWhite from '@/assets/images/logo_white_bg1.png'

export default function Footer() {
  return (
    <>
      <footer className="bg-rangoon py-10 text-[#d1d1d1]">
        <Container>
          <div className="grid grid-cols-1 space-y-8 md:grid-cols-3 md:space-y-0">
            <div className="text-center">
              <h5 className="mb-2 font-bold text-white">
                Monte & Cavalcante Advogados
              </h5>
              <p className="mt-4">
                Navegue pelo nosso site e encontre soluções para suas
                necessidades.
              </p>
              <div className="mt-6 flex justify-center">
                <Link href={'/'}>
                  <Image
                    src={logoWhite}
                    className="w-12 rounded-full border-2 border-white p-1 md:w-14"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h5 className="mb-2 font-bold text-white">Páginas</h5>
              <ul className="space-y-2">
                <li>
                  <Link href={'/'} className="hover:underline" rel="">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={'quem-somos'} className="hover:underline" rel="">
                    Quem Somos
                  </Link>
                </li>
                <li>
                  <Link
                    href={'trabalhe-conosco'}
                    className="hover:underline"
                    rel=""
                  >
                    Trabalhe Conosco
                  </Link>
                </li>
                <li>
                  <Link href={'servicos'} className="hover:underline" rel="">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href={'contato'} className="hover:underline" rel="">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <h5 className="mb-2 font-bold text-white">Informações</h5>
              <ul className="space-y-2">
                <li>contato@monteecavalcante.adv.br</li>
                <li>
                  <Link
                    className="hover:underline"
                    href="https://www.instagram.com/monteecavalcante.adv"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Instagram
                  </Link>
                </li>
                <li>(82) 3435-2031</li>
                <li>
                  <Link
                    className="hover:underline"
                    href="https://wa.me/82996680662"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    (82) 99668-0662
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </footer>
    </>
  )
}
