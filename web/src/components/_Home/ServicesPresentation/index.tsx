import Container from '@/components/Container'
import Link from 'next/link'

import { FcMoneyTransfer, FcServices, FcIdea } from 'react-icons/fc'

import { FaArrowRight } from 'react-icons/fa6'

export default function ServicesPresentation() {
  return (
    <>
      <section className="mt-20 bg-primary/30 pb-20 pt-12">
        <Container>
          <h2 className="text-center font-garamond text-3xl uppercase italic">
            Serviços
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-secondary p-4 shadow-md shadow-primary">
              <div className="flex justify-center">
                <FcMoneyTransfer className="text-5xl" />
              </div>

              <h3 className="mt-5 text-center text-lg font-bold uppercase">
                administrativos
              </h3>

              <p className="mt-3 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex justify-center">
                <Link
                  href={'/servicos'}
                  className="mt-6 flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm hover:bg-primary/50 sm:text-base"
                >
                  Saiba Mais <FaArrowRight className="text-base" />
                </Link>
              </div>
            </div>
            <div className="rounded-xl bg-secondary p-4 shadow-md shadow-primary">
              <div className="flex justify-center">
                <FcServices className="text-5xl" />
              </div>

              <h3 className="mt-5 text-center text-lg font-bold uppercase">
                terceirização de mão-obra
              </h3>

              <p className="mt-3 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex justify-center">
                <Link
                  href={'/servicos'}
                  className="mt-6 flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm hover:bg-primary/50 sm:text-base"
                >
                  Saiba Mais <FaArrowRight className="text-base" />
                </Link>
              </div>
            </div>
            <div className="rounded-xl bg-secondary p-4 shadow-md shadow-primary">
              <div className="flex justify-center">
                <FcIdea className="text-5xl" />
              </div>

              <h3 className="mt-5 text-center text-lg font-bold uppercase">
                consultoria e Auditoria
              </h3>

              <p className="mt-3 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex justify-center">
                <Link
                  href={'/servicos'}
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
