import Link from 'next/link'
import Container from '@/components/Container'

import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaInstagram,
} from 'react-icons/fa6'

export default function Informs() {
  return (
    <>
      <section className="my-20 flex">
        <Container>
          <h2 className="text-center font-garamond text-3xl italic">
            Meios de contato
          </h2>
          <div className="mt-4 grid grid-cols-1 justify-center gap-5 md:mt-12 md:grid-cols-4">
            <div className="flex flex-col items-center">
              <FaLocationDot className="rounded-full border-2 border-black px-2 text-4xl" />
              <span className="mt-8 block font-bold">Nosso Endereço</span>
              <h4 className="text-center text-sm">
                R. Dr. Sebastião da Hora, 16 - sala P -
                <span className="block text-center">
                  Gruta de Lourdes, Maceió - AL.
                </span>
              </h4>
            </div>
            <div className="flex flex-col items-center">
              <FaInstagram className="rounded-full border-2 border-black px-2 text-4xl" />
              <span className="mt-8 block font-bold">Nosso Instagram</span>
              <Link
                className="text-justify text-sm hover:text-primary hover:underline"
                href="https://www.instagram.com/monteecavalcante.adv"
                target="_blank"
              >
                @monteecavalcante.adv
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <FaPhone className="rounded-full border-2 border-black px-2 text-4xl" />
              <ul className="mt-8 space-y-5 text-center text-sm">
                <li>
                  <span className="block font-bold">Fixo</span>(82) 3435-2031
                </li>
                <li>
                  <span className="block font-bold">Whatsapp</span>
                  <Link
                    className="hover:text-primary hover:underline"
                    href="https://wa.me/82996680662"
                    target="_blank"
                  >
                    (82) 99668-0662
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <FaEnvelope className="rounded-full border-2 border-black px-2 text-4xl" />
              <ul className="mt-8 space-y-5 text-center text-sm">
                <li>
                  <span className="block font-bold">Contato Principal</span>
                  contato@monteecavalcante.adv.br
                </li>
                <li>
                  <span className="block font-bold">Wagner Cavalcante</span>
                  wagner@monteecavalcante.adv.br
                </li>
                <li>
                  <span className="block font-bold">Cicero Monte</span>
                  samuel@monteecavalcante.adv.br
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
