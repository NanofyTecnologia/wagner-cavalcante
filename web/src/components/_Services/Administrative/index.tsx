import Container from '@/components/Container'
import { FcElectricalSensor, FcHome, FcTodoList } from 'react-icons/fc'

export default function Consultancy() {
  return (
    <>
      <section className="mt-12">
        <Container>
          <div>
            <h2 className="mt-4 text-center text-3xl font-bold uppercase">
              Serviços Oferecidos
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 pb-5 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center rounded-xl border-2 border-rangoon p-4">
                <FcElectricalSensor className="text-5xl" />

                <h3 className="mt-5 text-center text-xl font-bold uppercase">
                  Direito médico e da saúde
                </h3>

                <p className="mt-3 text-justify text-sm">
                  Advocacia especializada em direito médico e da saúde, com
                  atuação na resolução de questões como recusa de atendimento
                  pelos planos de saúde, cobrança indevida de mensalidades e
                  coparticipação, reajuste abusivo, além de defender o direito à
                  saúde garantido pelo Estado e assegurar a ética médica em
                  todos os aspectos do cuidado com o paciente.
                </p>
              </div>

              <div className="flex flex-col items-center rounded-xl border-2 border-rangoon p-4">
                <FcHome className="text-5xl" />

                <h3 className="mt-5 min-h-[56px] text-center text-xl font-bold uppercase">
                  DIREITO CONDOMINIAL
                </h3>

                <p className="mt-3 text-justify text-sm">
                  Advocacia especializada em direito condominial, com atuação na
                  assessoria jurídica à gestão do condomínio, prevenindo
                  situações desfavoráveis a este, bem como defendendo seus
                  direitos em processos judiciais, realizando ainda a cobrança
                  efetiva dos inadimplentes por meio de ações específicas.
                </p>
              </div>

              <div className="flex flex-col items-center rounded-xl border-2 border-rangoon p-4">
                <FcTodoList className="text-5xl" />

                <h3 className="mt-5 text-center text-xl font-bold uppercase">
                  DIREITO CÍVEL E PREVIDENCIÁRIO
                </h3>

                <p className="mt-3 text-justify text-sm">
                  Atuação no seara civil, nas áreas de direito de família e
                  direito do consumidor e no âmbito previdenciário, garantindo
                  que nossos clientes tenham seu direitos respeitados e que
                  obtenham as melhores soluções possíveis dentro do contexto
                  legal, assim como recebam os benefícios aos quais têm direito
                  de forma justa e eficiente.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
