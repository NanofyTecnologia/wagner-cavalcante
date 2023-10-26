import Container from '@/components/Container'
import Link from 'next/link'

import Image from 'next/image'

import NewsExample from '@/assets/images/NewsExample.jpg'
import { FaArrowRight } from 'react-icons/fa6'

export default function News() {
  return (
    <>
      <section className="mt-12 pb-20">
        <Container>
          <h2 className="text-center font-garamond text-3xl uppercase italic">
            notícias
          </h2>
          <div className="grid grid-cols-1 gap-4 pt-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded pb-8 shadow-lg">
              <Image
                className="oject-cover w-full"
                src={NewsExample}
                alt="Logo da Empresa"
              />
              <div className="px-6 py-4">
                <div className="mb-2 text-lg font-bold uppercase">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <p className="text-base text-gray-700">
                  Consequuntur numquam tempora, culpa aspernatur ea qui cumque,
                  iste...
                </p>
              </div>
              <div className="flex justify-center">
                <Link
                  href={'/noticias'}
                  className="mt-6 flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm hover:bg-primary/50 sm:text-base"
                >
                  Saiba Mais <FaArrowRight className="text-base" />
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded pb-8 shadow-lg">
              <Image
                className="oject-cover w-full"
                src={NewsExample}
                alt="Logo da Empresa"
              />
              <div className="px-6 py-4">
                <div className="mb-2 text-lg font-bold uppercase">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <p className="text-base text-gray-700">
                  Consequuntur numquam tempora, culpa aspernatur ea qui cumque,
                  iste...
                </p>
              </div>
              <div className="flex justify-center">
                <Link
                  href={'/noticias'}
                  className="mt-6 flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm hover:bg-primary/50 sm:text-base"
                >
                  Saiba Mais <FaArrowRight className="text-base" />
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded pb-8 shadow-lg">
              <Image
                className="oject-cover w-full"
                src={NewsExample}
                alt="Logo da Empresa"
              />
              <div className="px-6 py-4">
                <div className="mb-2 text-lg font-bold uppercase">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <p className="text-base text-gray-700">
                  Consequuntur numquam tempora, culpa aspernatur ea qui cumque,
                  iste...
                </p>
              </div>
              <div className="flex justify-center">
                <Link
                  href={'/noticias'}
                  className="mt-6 flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm hover:bg-primary/50 sm:text-base"
                >
                  Saiba Mais <FaArrowRight className="text-base" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
