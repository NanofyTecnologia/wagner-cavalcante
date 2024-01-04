import Link from 'next/link'
import Image from 'next/image'

import PhotoSamuel from '@/assets/images/samuel.jpg'

import { BsHeartPulse, BsHeartPulseFill } from 'react-icons/bs'
import {
  FaHome,
  FaBriefcaseMedical,
  FaHandHoldingUsd,
  FaFileMedical,
  FaHospitalAlt,
  FaRegMoneyBillAlt,
} from 'react-icons/fa'
import { FaSackDollar } from 'react-icons/fa6'

export default function LandingPage() {
  return (
    <>
      <div className="relative bg-[url(../assets/images/assinando-papeis.jpg)] bg-cover">
        <div className="bg-black bg-opacity-60 py-6">
          <main className="mx-auto max-w-7xl py-32">
            <div className="px-12 text-center">
              <div className="text-secondary">
                <h1 className="font-garamond text-4xl font-semibold uppercase">
                  Monte & Cavalcante
                </h1>

                <h2 className="font-garamond text-4xl font-semibold uppercase">
                  Advocacia
                </h2>

                <p className="mt-4 text-4xl">
                  Advogado Especializado em Direito de Saúde
                </p>

                <div className="flex justify-center">
                  <Link
                    prefetch={false}
                    target="_blank"
                    href="https://api.whatsapp.com/send/?phone=5582999355766&text&type=phone_number&app_absent=0"
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

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-12 py-8">
          <h2 className="mb-8 text-center text-xl font-semibold uppercase text-secondary">
            Nossos serviços
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center rounded-full bg-black p-4 text-4xl text-white">
                <BsHeartPulse />
              </div>

              <p className="mt-2 text-center text-xl font-bold text-neutral-700">
                Negativa de Plano de Saúde
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center rounded-full bg-black p-4 text-4xl text-white">
                <FaRegMoneyBillAlt />
              </div>

              <p className="mt-2 text-center  text-xl font-bold text-neutral-700">
                Reajuste Abusivo
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center rounded-full bg-black p-4 text-4xl text-white">
                <FaHome />
              </div>

              <p className="mt-2 text-center text-xl font-bold text-neutral-700">
                Home Care / Internação <br /> Domiciliar
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center rounded-full bg-black p-4 text-4xl text-white">
                <FaBriefcaseMedical />
              </div>

              <p className="mt-2 text-center text-xl font-bold text-neutral-700">
                Indenização Por Erro Médico <br /> / Odontológico
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center rounded-full bg-black p-4 text-4xl text-white">
                <BsHeartPulseFill />
              </div>

              <p className="mt-2 text-center text-xl font-bold text-neutral-700">
                Indenização Por Dano <br /> Estético
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center rounded-full bg-black p-4 text-4xl text-white">
                <FaHandHoldingUsd />
              </div>

              <p className="mt-2 text-center text-xl font-bold text-neutral-700">
                Medicação de Alto Custo
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center rounded-full bg-black p-4 text-4xl text-white">
                <FaSackDollar />
              </div>

              <p className="mt-2 text-center text-xl font-bold text-neutral-700">
                Reebolso de Despesas <br /> Médicas
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center rounded-full bg-black p-4 text-4xl text-white">
                <FaFileMedical />
              </div>

              <p className="mt-2 text-center text-xl font-bold text-neutral-700">
                Cancelamento Indevido do <br /> Plano de Saúde
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center rounded-full bg-black p-4 text-4xl text-white">
                <FaHospitalAlt />
              </div>

              <p className="mt-2 text-center text-xl font-bold text-neutral-700">
                Demora Na Autorização de <br /> Cirurgias
              </p>
            </div>

            {/* <div className="rounded-md border border-primary p-6">
              <RiHealthBookLine className="mx-auto text-5xl text-secondary" />

              <h3 className="my-4 text-center text-xl font-semibold text-primary">
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
              <GoLaw className="mx-auto text-5xl text-secondary" />

              <h3 className="my-4 text-center text-xl font-semibold text-primary">
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
              <MdHealthAndSafety className="mx-auto text-5xl text-secondary" />

              <h3 className="my-4 text-center text-xl font-semibold text-primary">
                Quando o reajuste do plano é abusivo?
              </h3>

              <p className="text-justify text-secondary">
                O reajuste do plano de saúde é considerado abusivo quando excede
                os limites estabelecidos pela ANS ou quando não respeita as
                condições do contrato.
              </p>
            </div>

            <div className="rounded-md border border-primary p-6">
              <SiGoogledocs className="mx-auto text-5xl text-secondary" />

              <h3 className="my-4 text-center text-xl font-semibold text-primary">
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
            </div> */}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-12 py-8">
          <h2 className="text-center text-xl font-semibold uppercase text-black">
            Quem é o Advogado?
          </h2>

          <div className="my-6 grid grid-cols-1 gap-12 sm:grid-cols-2">
            <div className="h-[460px] rounded-md bg-neutral-500">
              <Image
                src={PhotoSamuel}
                alt="doutor samuel monte"
                className="h-full w-full rounded-md object-cover object-[0%_40%] "
              />
            </div>

            <div className="space-y-4 text-justify text-2xl">
              <p>
                Samuel Monte, estudei na faculdade de Direito da Universidade
                Federal de Alagoas, especialista em Direito Público e em Direito
                Médico e da Saúde.
              </p>

              <p>
                Advogado desde 2018, atuo como vice presidente da comissão de
                Direito Médico e da Saúde da OAB AL, com foco na relação dos
                segurados contra planos de saúde, sempre dando o meu melhor para
                ajudar aqueles que precisam de proteção quando o assunto é
                direito de saúde.
              </p>

              <p>
                Com atendimento personalizado, analiso caso a caso, visando
                entender todos os pontos e repassar ao cliente a melhor solução
                possível.
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center text-center">
            <Link
              prefetch={false}
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=5582999355766&text&type=phone_number&app_absent=0"
              className="mt-6 block rounded-md bg-primary px-12 py-4 text-sm font-semibold uppercase text-white"
            >
              Fale Com o Advogado Agora
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
