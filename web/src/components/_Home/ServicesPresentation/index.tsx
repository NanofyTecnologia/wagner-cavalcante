import Container from '@/components/Container'
import Link from 'next/link'

import { FcMoneyTransfer, FcServices, FcIdea, FcElectricalSensor, FcHome, FcTodoList } from 'react-icons/fc'

import { FaArrowRight } from 'react-icons/fa6'

export default function ServicesPresentation() {
  return (
    <>
      <section className="mt-20 bg-primary/30 pb-20 pt-12">
        <Container>
          <h2 className="text-center font-garamond text-3xl uppercase italic">
            Serviços Oferecidos
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-secondary p-4 shadow-md shadow-primary">
              <div className="flex justify-center">
                <FcElectricalSensor className="text-5xl" />
              </div>

              <h3 className="mt-5 text-center text-lg font-bold uppercase">
                DIREITO MÉDICO E DA SAÚDE
              </h3>

              <p className="mt-3 text-center">
                Advocacia especializada em direito médico e da saúde
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
                <FcHome className="text-5xl" />
              </div>

              <h3 className="mt-5 text-center text-lg font-bold uppercase">
                DIREITO CONDOMINIAL
              </h3>

              <p className="mt-3 text-center">
                Advocacia especializada em direito condominial
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
                <FcTodoList className="text-5xl" />
              </div>

              <h3 className="mt-5 text-center text-lg font-bold uppercase">
                DIREITO CÍVEL E PREVIDENCIÁRIO
              </h3>

              <p className="mt-3 text-center">Atuação no seara civil</p>
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
