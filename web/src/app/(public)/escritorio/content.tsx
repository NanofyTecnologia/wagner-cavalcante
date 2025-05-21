import Image from 'next/image'

import wagnerCavalcante from '@/assets/images/wagner_cavalcante.png'
import LogoBlack from '@/assets/logo/033.png'
import Logo from '@/assets/logo/05.png'

export function Content() {
  return (
    <>
      <div className="bg-wcavalcante-blue py-16 md:py-24">
        <div className="mx-auto w-full space-y-12 px-4 md:max-w-5xl md:px-0">
          <div className="h-28 w-auto">
            <Image
              src={Logo}
              className="h-full w-full object-contain"
              alt="Logo Wagner Cavalcante Advogados"
              priority
            />
          </div>
          <div className="mb-4 flex flex-col">
            <h2 className="text-wcavalcante-secondary text-2xl font-semibold md:text-3xl">
              Nosso Escritório
            </h2>
            <div className="bg-wcavalcante-gold h-1 w-12" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 w-full px-4 md:max-w-5xl md:px-0">
        <h2 className="text-lg font-semibold">Nossa História</h2>
        <section className="mt-6 space-y-4">
          <p>
            Wagner Cavalcante Advogados é um escritório de advocacia com sede em
            Maceió-AL, criado para oferecer soluções jurídicas com foco em
            resultado, segurança e transparência. Desde o início de nossas
            atividades, atuamos com seriedade e comprometimento, buscando sempre
            atender os interesses de nossos clientes com eficiência.
          </p>
          <p>
            Fundado um profissional com experiência e visão moderna, o Wagner
            Cavalcante Advogados surgiu da necessidade de unir tradição jurídica
            com atuação estratégica nas áreas mais relevantes do Direito.
          </p>
          <p>Atualmente, o escritório atua nas áreas de:</p>
          <ul className="ml-12 list-disc">
            <li>Direito Condominial</li>
            <li>Direito Cível </li>
            <li>Direito Previdenciário</li>
            <li>Direito Médico e da Saúde</li>
          </ul>
          <p>
            Nosso objetivo é claro: prevenir, orientar e resolver problemas
            jurídicos com agilidade, sempre com ética, responsabilidade e foco
            no melhor resultado para o cliente
          </p>

          <p>
            Acreditamos que um escritório moderno deve promover a troca de
            conhecimento entre profissionais, incentivar o crescimento pessoal e
            manter um ambiente de trabalho respeitoso, técnico e eficiente.
          </p>

          <p>
            Com atuação consolidada em Maceió, o Wagner Cavalcante Advogados
            busca se tornar referência nas áreas em que atua, oferecendo suporte
            jurídico confiável e acessível para pessoas físicas e empresas.
          </p>
        </section>

        <h2 className="mt-12 text-lg font-semibold">Tecnologia e Advocacia</h2>
        <section className="mt-6 space-y-4">
          <p>
            A tecnologia é parte fundamental da nossa rotina jurídica.
            Utilizamos ferramentas digitais para garantir mais agilidade,
            organização e eficiência no atendimento ao cliente.
          </p>

          <p>
            Por meio de sistemas modernos de gestão processual, mantemos nossos
            clientes sempre atualizados sobre o andamento de suas causas, com
            acesso rápido e seguro às informações jurídicas.
          </p>

          <p>
            Além disso, a tecnologia fortalece nossa comunicação interna,
            otimizando a colaboração entre os profissionais e garantindo um
            fluxo de trabalho mais produtivo e transparente.
          </p>

          <p>
            Nos destacamos não apenas pelo domínio técnico, mas também pela
            forma ágil, estratégica e profissional com que conduzimos cada
            demanda jurídica — desde o estudo do caso até a elaboração das peças
            e o acompanhamento do processo.
          </p>
        </section>

        <div className="my-12 h-12 w-auto">
          <Image
            src={LogoBlack}
            className="h-full w-full object-contain"
            alt="Logo Wagner Cavalcante Advogados"
            loading="lazy"
          />
        </div>
      </div>

      <div className="bg-[#F8F9FA] py-12">
        <div className="mx-auto w-full px-4 md:max-w-5xl md:px-0">
          <div>
            <h2 className="text-lg font-semibold">Nosso Especialista</h2>
            <div className="h-1 w-12 bg-[#C89D66]" />
          </div>
          <section className="mt-8 flex flex-col items-center">
            <div className="relative h-auto w-64 overflow-hidden">
              <div className="group/card w-full">
                <div className="relative mx-auto flex h-96 max-w-sm flex-col justify-between overflow-hidden shadow-xl">
                  <Image
                    src={wagnerCavalcante}
                    className="h-full w-full object-cover"
                    alt="Wagner Cavalcante"
                    loading="lazy"
                  />
                  <div className="absolute top-0 left-0 h-full w-full opacity-40 transition-all duration-300 group-hover/card:bg-black"></div>
                </div>
              </div>
            </div>
            <div className="bg-wcavalcante-eerie flex h-24 w-64 flex-col items-center justify-center space-y-2">
              <p className="text-wcavalcante-gold font-semibold">
                Dr. Wagner Cavalcante
              </p>
              <p className="text-wcavalcante-secondary text-center text-sm">
                Advogado especialista em direito condominal
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
