import Image from 'next/image'
import Link from 'next/link'

import { BsHeartPulse } from 'react-icons/bs'
import {
  FaHome,
  FaHandHoldingUsd,
  FaFileMedical,
  FaHospitalAlt,
  FaRegMoneyBillAlt,
} from 'react-icons/fa'
import { FaSackDollar } from 'react-icons/fa6'

import PhotoWagner from '@/assets/images/wagner_cavalcante.png'
import Logo from '@/assets/logo/010.png'

export default function LandingPage() {
  return (
    <>
      <div className="relative bg-[url(../assets/images/assinando-papeis.jpg)] bg-cover">
        <Image
          src={Logo}
          width={320}
          height={320}
          className="absolute top-6 left-6"
          alt="Wagner Cavalcante Advogados"
        />

        <div className="bg-opacity-60 bg-black py-6">
          <main className="mx-auto max-w-7xl py-32">
            <div className="px-12 text-center">
              <div className="text-secondary">
                <h1 className="text-4xl font-semibold uppercase">
                  Wagner Cavalcante Advogados
                </h1>

                <h2 className="text-4xl font-semibold uppercase">Advogados</h2>

                <p className="mt-4 text-4xl">
                  Advogado Especializado em Direito de Saúde
                </p>

                <div className="flex justify-center">
                  <Link
                    prefetch={false}
                    target="_blank"
                    href="https://api.whatsapp.com/send/?phone=5582999355766&text&type=phone_number&app_absent=0"
                    className="bg-primary mt-6 block rounded-md px-16 py-5 text-lg font-semibold text-white uppercase"
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
          <h2 className="text-secondary mb-8 text-center text-xl font-semibold uppercase">
            Nossos serviços
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="border-primary rounded-md border p-6">
              <div className="flex items-center justify-center rounded-full p-4 text-4xl text-white">
                <BsHeartPulse />
              </div>

              <p className="mt-2 text-center text-xl font-semibold text-neutral-400">
                Negativa de Plano de Saúde
              </p>
            </div>

            <div className="border-primary rounded-md border p-6">
              <div className="flex items-center justify-center rounded-full p-4 text-4xl text-white">
                <FaRegMoneyBillAlt />
              </div>

              <p className="mt-2 text-center text-xl font-semibold text-neutral-400">
                Reajuste Abusivo
              </p>
            </div>

            <div className="border-primary rounded-md border p-6">
              <div className="flex items-center justify-center rounded-full p-4 text-4xl text-white">
                <FaHome />
              </div>

              <p className="mt-2 text-center text-xl font-semibold text-neutral-400">
                Home Care / Internação <br /> Domiciliar
              </p>
            </div>

            {/* <div className="rounded-md border border-primary p-6">
              <div className="flex items-center justify-center rounded-full p-4 text-4xl text-white">
                <FaBriefcaseMedical />
              </div>

              <p className="mt-2 text-center text-xl font-semibold text-neutral-400">
                Indenização Por Erro Médico <br /> / Odontológico
              </p>
            </div> */}

            {/* <div className="rounded-md border border-primary p-6">
              <div className="flex items-center justify-center rounded-full p-4 text-4xl text-white">
                <BsHeartPulseFill />
              </div>

              <p className="mt-2 text-center text-xl font-semibold text-neutral-400">
                Indenização Por Dano <br /> Estético
              </p>
            </div> */}

            <div className="border-primary rounded-md border p-6">
              <div className="flex items-center justify-center rounded-full p-4 text-4xl text-white">
                <FaHandHoldingUsd />
              </div>

              <p className="mt-2 text-center text-xl font-semibold text-neutral-400">
                Medicação de Alto Custo
              </p>
            </div>

            <div className="border-primary rounded-md border p-6">
              <div className="flex items-center justify-center rounded-full p-4 text-4xl text-white">
                <FaSackDollar />
              </div>

              <p className="mt-2 text-center text-xl font-semibold text-neutral-400">
                Reembolso de Despesas <br /> Médicas
              </p>
            </div>

            <div className="border-primary rounded-md border p-6">
              <div className="flex items-center justify-center rounded-full p-4 text-4xl text-white">
                <FaFileMedical />
              </div>

              <p className="mt-2 text-center text-xl font-semibold text-neutral-400">
                Cancelamento Indevido do <br /> Plano de Saúde
              </p>
            </div>

            <div className="border-primary rounded-md border p-6">
              <div className="flex items-center justify-center rounded-full p-4 text-4xl text-white">
                <FaHospitalAlt />
              </div>

              <p className="mt-2 text-center text-xl font-semibold text-neutral-400">
                Demora Na Autorização de <br /> Cirurgias
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-12 py-8">
          <h2 className="text-center text-xl font-semibold text-black uppercase">
            Quem é o Advogado?
          </h2>

          <div className="my-6 grid grid-cols-1 gap-12 sm:grid-cols-2">
            <div className="h-[460px] rounded-md bg-neutral-500">
              <Image
                src={PhotoWagner}
                alt="Wagner Cavalcante"
                className="h-full w-full rounded-md object-cover object-[0%_40%]"
              />
            </div>

            <div className="flex flex-col justify-center space-y-4 text-justify text-xl">
              <p>
                Wagner Cavalcante estudou na faculdade de Direito no estado de
                Alagoas, especialista em Direito Condominal.
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
              className="bg-primary mt-6 block rounded-md px-16 py-5 text-lg font-semibold text-white uppercase"
            >
              Fale Com o Advogado Agora
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
