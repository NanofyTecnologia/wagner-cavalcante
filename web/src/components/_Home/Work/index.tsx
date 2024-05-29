import Link from 'next/link'
import Image from 'next/image'

import Container from '@/components/Container'
import Team from '@/assets/images/trabalhe_conosco.jpg'

export default function WithUs() {
  return (
    <>
      <section className="bg-rangoon pb-20 pt-12 text-white">
        <Container>
          <h2 className="text-center text-3xl uppercase italic">
            Trabalhe Conosco
          </h2>
          <div className="grid grid-cols-1 gap-10 pt-10  md:grid-cols-2">
            <div>
              <h2 className="text-center text-2xl uppercase md:text-start">
                Venha fazer parte da equipe
              </h2>
              <p className="mt-3 text-justify text-sm">
                Em busca de uma carreira jurídica desafiadora e gratificante?
                Veja as vagas disponíveis e descubra como você pode fazer a
                diferença conosco.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link
                  href={'/trabalhe-conosco'}
                  className="mt-8 cursor-pointer rounded-xl border-2 border-white bg-ironside px-3 py-2 uppercase hover:bg-ironside/70"
                >
                  ver vagas!
                </Link>
              </div>
            </div>
            <Image
              width={1000}
              height={1000}
              src={Team}
              alt="Justiça"
              className="hidden rounded-lg object-cover object-top md:block md:h-72"
              priority
            />
          </div>
        </Container>
      </section>
    </>
  )
}
