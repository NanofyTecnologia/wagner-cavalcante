import Link from 'next/link'
import Container from '@/components/Container'

import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
  FaUser,
} from 'react-icons/fa6'

export default function Informs() {
  return (
    <>
      <section className="my-20 flex">
        <div className="mx-auto max-w-5xl px-4 lg:px-0 2xl:max-w-6xl">
          <h2 className="text-center font-garamond text-3xl italic">
            Meios de contato
          </h2>
          <div className="mt-4 grid grid-cols-1 justify-center gap-4 md:mt-12 md:grid-cols-4">
            <div className="flex flex-col items-center">
              <FaLocationDot className="rounded-full border-2 border-black px-2 text-4xl" />
              <span className="mb-2 mt-8 block font-bold">Nosso Endereço</span>
              <h4 className="text-center text-sm">
                R. Dr. Sebastião da Hora, 16 - sala P -
                <span className="block text-center">
                  Gruta de Lourdes, Maceió - AL.
                </span>
              </h4>
            </div>
            <div className="flex flex-col items-center">
              <FaInstagram className="rounded-full border-2 border-black px-2 text-4xl" />
              <span className="mb-2 mt-8 block font-bold">Nosso Instagram</span>
              <Link
                className="text-justify text-sm hover:text-primary hover:underline"
                href="https://www.instagram.com/monteecavalcante.adv"
                target="_blank"
              >
                @monteecavalcante.adv
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <FaUser className="rounded-full border-2 border-black px-2 text-4xl" />
              <h3 className="mb-2 mt-8 block font-bold">
                Dr. Wagner Cavalcante
              </h3>

              <ul className="space-y-4 text-center text-sm">
                <li>
                  <Link
                    target="_blank"
                    href="mailto:wagner@monteecavalcante.adv.br"
                    className="flex items-center gap-2 hover:text-primary hover:underline"
                  >
                    <FaEnvelope className="text-xl" />
                    wagner@monteecavalcante.adv.br
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://wa.me/82996680662"
                    className="flex items-center justify-center gap-2 hover:text-primary hover:underline"
                  >
                    <FaWhatsapp className="text-xl" />
                    (82) 99668-0662
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <FaUser className="rounded-full border-2 border-black px-2 text-4xl" />
              <h3 className="mb-2 mt-8 block font-bold">Dr. Samuel Monte</h3>

              <ul className="space-y-4 text-center text-sm">
                <li>
                  <Link
                    target="_blank"
                    href="mailto:samuel@monteecavalcante.adv.br"
                    className="flex items-center gap-2 hover:text-primary hover:underline"
                  >
                    <FaEnvelope className="text-xl" />
                    samuel@monteecavalcante.adv.br
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://wa.me/82999355766"
                    className="flex items-center justify-center gap-2 hover:text-primary hover:underline"
                  >
                    <FaWhatsapp className="text-xl" />
                    (82) 99935-5766
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
