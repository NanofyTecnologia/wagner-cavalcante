'use client'

import Image from 'next/image'
import Link from 'next/link'

import bgImage from '@/assets/images/advocacia.jpg'
import { Button } from '@/components/ui/button'

const Introduction = () => {
  return (
    <>
      <div className="relative md:h-[680px] 2xl:h-[872px]" id="home">
        <div className="w-full bg-gray-800 py-48 md:hidden" />
        <Image
          src={bgImage}
          alt="advocacia"
          priority
          className="hidden h-full w-full object-cover md:block"
        />
        <div className="absolute top-0 h-full w-full bg-black/40" />
        <div className="absolute inset-0 mx-auto flex max-w-[448px] items-center justify-center text-white">
          <div className="flex flex-col items-center justify-center px-4 text-center">
            <p className="animate-appearUp text-2xl font-semibold">
              Soluções jurídicas especializadas para proteger seus direitos
            </p>
            <p className="animate-appearUp mt-2 text-sm opacity-0 delay-200">
              Advocacia de excelência em Direito Médico, Condominial, Civil e
              Previdenciário. Atendimento personalizado e resultados
              comprovados.
            </p>
            <div className="animate-appearUp mt-8 flex gap-5 opacity-0 delay-300 md:mt-12">
              <Link rel="noopener noreferrer" href="#contato">
                <Button className="hover:cursor-pointer">
                  Agende uma Consulta
                </Button>
              </Link>
              <Link
                rel="noopener noreferrer"
                href="#servicos"
                className="hidden md:block"
              >
                <Button className="hover:cursor-pointer" variant="outline">
                  Conheça Nossas Áreas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { Introduction }
