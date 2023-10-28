'use client'

import Image from 'next/image'
import Container from '@/components/Container'
import About from '@/components/_Home/About'

import TeamOne from '@/assets/images/team-1.jpg'
import TeamTwo from '@/assets/images/team-2.jpg'
import { FaRegCircleCheck } from 'react-icons/fa6'
import { FaUserTie, FaRegThumbsUp, FaRegHandshake } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <>
      <section
        className="flex h-[300px] items-center justify-center bg-rangoon text-white md:h-[400px]"
        id="quem-somos"
      >
        <Container>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl">Descubra Mais Sobre Nós</h2>
            <p className="mt-4">
              Com anos de experiência em advocacia, nossa equipe está dedicada a
              proteger seus direitos e interesses.
            </p>
          </div>
        </Container>
      </section>

      <section className="relative h-24 bg-rangoon/70 md:block md:h-36">
        <div className="flex h-full items-center">
          <Container>
            <div className="grid grid-cols-4 gap-4 text-white md:gap-48">
              <div className="flex flex-col items-center border-rangoon p-2 text-center">
                <FaRegCircleCheck className="text-xl text-[#aa9166] md:text-4xl" />
                <h3 className="mt-2 font-garamond text-sm font-bold italic md:text-xl">
                  Certificados
                </h3>
              </div>
              <div className="flex flex-col items-center border-rangoon p-2 text-center">
                <FaUserTie className="text-xl text-[#aa9166] md:text-4xl" />
                <h3 className="mt-2 font-garamond text-sm font-bold italic md:text-xl">
                  <span className="block">Advogados</span>Experientes
                </h3>
              </div>
              <div className="flex flex-col items-center border-rangoon p-2 text-center">
                <FaRegThumbsUp className="text-xl text-[#aa9166] md:text-4xl" />
                <h3 className="mt-2 font-garamond text-sm font-bold italic md:text-xl">
                  <span className="block">Sucesso</span>em Casos
                </h3>
              </div>
              <div className="flex flex-col items-center border-rangoon p-2 text-center">
                <FaRegHandshake className="text-xl text-[#aa9166] md:text-4xl" />
                <h3 className="mt-2 font-garamond text-sm font-bold italic md:text-xl">
                  Suporte
                </h3>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <About />

      <section className="mx-auto mb-20 mt-20">
        <Container>
          <h2 className="text-center font-garamond text-3xl italic">
            Conheça nossos fundadores
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="w-64 overflow-hidden rounded shadow-lg">
                <Image
                  className="w-full object-cover"
                  src={TeamOne}
                  alt="Foto de Wagner Cavalcante"
                />
                <div className="bg-rangoon px-6 py-4 text-center">
                  <div className="mb-2 font-garamond text-xl font-bold italic text-[#aa9166]">
                    Wagner Cavalcante
                  </div>
                  <p className="text-base text-secondary">
                    Sócio-Fundador & Advogado
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-64 overflow-hidden rounded shadow-lg">
                <Image
                  className="w-full object-cover"
                  src={TeamTwo}
                  alt="Foto de Wagner Cavalcante"
                />
                <div className="bg-rangoon px-6 py-4 text-center">
                  <div className="mb-2 font-garamond text-xl font-bold italic text-[#aa9166]">
                    Cicero Monte
                  </div>
                  <p className="text-base text-secondary">
                    Sócio-Fundador & Advogado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
