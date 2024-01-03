import Link from 'next/link'
import Image from 'next/image'
import { Link as ScrollLink } from '@mui/material'
import {
  BsHouse,
  BsGraphUpArrow,
  BsCurrencyDollar,
  BsFileText,
  BsGraphUp,
} from 'react-icons/bs'

import MonteCavalcanteLogo from '@/assets/images/logo_text_white.png'

export default function LandingPage() {
  return (
    <>
      <div className="relative bg-[url(../assets/images/assinando-papeis.jpg)] bg-cover">
        <div className="bg-black bg-opacity-60 py-6">
          <main className="mx-auto max-w-7xl py-32">
            <div className="grid grid-cols-2 items-center px-12">
              <div className="text-secondary">
                <h1 className="font-garamond text-xl font-semibold uppercase">
                  Monte & Cavalcante
                </h1>

                <h2 className="font-garamond text-4xl font-semibold uppercase">
                  Advocacia
                </h2>

                <p className="mt-4 text-3xl">
                  Advogado Especializado em Direito de Saúde
                </p>

                <div className="flex">
                  <Link
                    prefetch={false}
                    target="_blank"
                    href="https://api.whatsapp.com/send/?phone=558296680662&text&type=phone_number&app_absent=0"
                    className="mt-6 block rounded-md bg-primary px-12 py-4 text-sm font-semibold uppercase text-white"
                  >
                    Fale Com o Advogado Agora
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <section className="bg-neutral-900">
        <div className="mx-auto max-w-7xl px-12 py-8">
          <h2 className="mb-8 text-center text-xl font-semibold uppercase text-secondary">
            Nossos serviços
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-md border border-primary p-6">
              <BsGraphUpArrow className="text-5xl text-secondary" />

              <h3 className="my-4 text-xl font-semibold text-primary">
                Reajuste abusivo
              </h3>

              <p className="text-justify text-secondary">
                O reajuste abusivo de plano de saúde é uma prática ilegal e
                passível de ação na Justiça. Com a orientação de um advogado
                especializado em planos de saúde, o beneficiário pode pedir a
                revisão judicial das cobranças excessivas inclusive reavendo o
                que pagou em excesso.
              </p>
            </div>

            <div className="rounded-md border border-primary p-6">
              <BsCurrencyDollar className="text-5xl text-secondary" />

              <h3 className="my-4 text-xl font-semibold text-primary">
                O aumento da mensalidade é legal?
              </h3>

              <p className="text-justify text-secondary">
                Sim. A Agência Nacional de Saúde (ANS) autoriza que os planos de
                saúde façam reajustes anuais nas mensalidades para os planos
                individuais, estipulando as regras para a correção dos valores.
                Para os planos coletivos e/ou empresariais as regras dos
                aumentos devem observar o estipulado nos contratos.
              </p>
            </div>

            <div className="rounded-md border border-primary p-6">
              <BsGraphUp className="text-5xl text-secondary" />

              <h3 className="my-4 text-xl font-semibold text-primary">
                Quando o reajuste do plano é abusivo?
              </h3>

              <p className="text-justify text-secondary">
                O reajuste do plano de saúde é considerado abusivo quando excede
                os limites estabelecidos pela ANS ou quando não respeita as
                condições do contrato.
              </p>
            </div>

            <div className="rounded-md border border-primary p-6">
              <BsFileText className="text-5xl text-secondary" />

              <h3 className="my-4 text-xl font-semibold text-primary">
                Qual o seu tipo de plano?
              </h3>

              <p className="text-justify text-secondary">
                Seja seu plano individual, empresarial, coletivo ou por adesão,
                é necessário ficar atento aos reajuste aplicado pelo plano de
                saúde, pois, não é incomum que aconteça o reajuste abusivo e
                cada categoria de contrato tem um reajuste diferente que deve
                ser respeitado. Por conta disso, o suporte de um advogado
                especializado se faz necessário
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-12 py-8">
          <h2 className="text-center text-xl font-semibold uppercase text-black">
            Sobre nós
          </h2>

          <div className="my-6 grid grid-cols-2 gap-12">
            <div className="h-96 rounded-md bg-neutral-500"></div>

            <div className="space-y-4">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus doloribus itaque provident accusantium suscipit
                repellendus dolore dignissimos at cumque maiores, veritatis
                dolorem ad ut exercitationem impedit quam maxime a recusandae.
              </p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus doloribus itaque provident accusantium suscipit
                repellendus dolore dignissimos at cumque maiores, veritatis
                dolorem ad ut exercitationem impedit quam maxime a recusandae.
              </p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus doloribus itaque provident accusantium suscipit
                repellendus dolore dignissimos at cumque maiores, veritatis
                dolorem ad ut exercitationem impedit quam maxime a recusandae.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="rounded-md bg-primary px-6 py-4 font-semibold uppercase text-white">
              Entre em contato conosco
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
