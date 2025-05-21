'use client'

import Image from 'next/image'
import Link from 'next/link'

import { CalendarCheck2, ChevronRight } from 'lucide-react'

import { Tooltip } from '@heroui/react'

import wagnerCavalcante from '@/assets/images/wagner_cavalcante.png'
import logoWhite from '@/assets/logo/logo_white.png'
import { Button } from '@/components/ui/button'

const Partner = () => {
  return (
    <div
      className="relative mx-auto my-12 w-full space-y-4 md:max-w-5xl"
      id="escritorio"
    >
      <div className="bg-wcavalcante-blue mb-0 p-8">
        <div className="h-12">
          <Image
            src={logoWhite}
            className="h-full w-full object-contain"
            alt="Logo Wagner Cavalcante Advogados"
            loading="lazy"
          />
        </div>

        <div>
          <p className="text-wcavalcante-gold mt-8 font-semibold uppercase">
            Equipe
          </p>
          <p className="mt-6 text-white">
            Contamos com uma equipe de advogados qualificados, prontos para
            oferecer serviços jurídicos personalizados e eficientes, atendendo
            às necessidades específicas de cada cliente. Nosso atendimento é
            pautado em transparência, dedicação, seriedade, confiança e ampla
            experiência nas áreas jurídicas.
          </p>
        </div>
      </div>

      <div className="flex -translate-y-4 justify-center">
        <div className="relative flex w-86 flex-col border border-slate-200 bg-white shadow-sm">
          <div className="relative m-2.5 h-56 overflow-hidden rounded-md text-white">
            <Image
              src={wagnerCavalcante}
              className="h-full w-full object-cover object-[center_30%]"
              alt="Wagner Cavalcante"
              loading="lazy"
            />
          </div>
          <div className="p-4">
            <div className="bg-wcavalcante-gold mb-4 w-24 rounded-full border border-transparent px-2.5 py-0.5 text-center text-xs text-white uppercase shadow-sm transition-all">
              advogado
            </div>
            <h6 className="mb-2 text-lg font-semibold text-slate-800">
              Dr. Wagner Cavalcante
            </h6>
            <p className="leading-normal font-light text-slate-600">
              Sócio-Fundador e advogado especialista em direito condominial.
            </p>

            <div className="mt-8 flex justify-center">
              <Tooltip content="Veja mais" placement="right">
                <Link
                  rel="noopener noreferrer"
                  href="/escritorio"
                  className="rounded-md px-3 py-2 shadow hover:scale-110"
                >
                  <ChevronRight className="text-wcavalcante-ironside size-5" />
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link rel="noopener noreferrer" href="#contato" scroll={true}>
          <Button
            variant="blue"
            className="flex items-center hover:cursor-pointer"
          >
            <CalendarCheck2 />
            <p>Agende uma Consulta</p>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export { Partner }
