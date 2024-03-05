import Container from '@/components/Container'
import { FcCollect, FcTimeline, FcIdea } from 'react-icons/fc'

export default function Outsourcing() {
  return (
    <>
      <section className="py-10 text-black">
        <Container>
          <div>
            <h2 className="text-center text-3xl font-bold uppercase">
              Escritório Monte e Cavalcante
            </h2>
            <div className="mt-8">
              <div className="mt-6 rounded-xl border-2 border-primary p-4">
                <FcCollect className="text-5xl" />

                <h3 className="mt-4 text-xl font-bold uppercase">Missão:</h3>

                <ul className="mt-2 text-justify text-sm">
                  <li>
                    ✓ Nosso escritório tem como missão oferecer soluções
                    jurídicas eficazes para a inteira resolução das demandas e
                    garantia da satisfação do cliente, buscando sempre
                    contribuir de forma inovadora e inteligente para uma
                    sociedade mais justa por meio do exercício constante da
                    ética e do profissionalismo.
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-xl border-2 border-primary p-4">
                <FcIdea className="text-5xl" />

                <h3 className="mt-4 text-xl font-bold uppercase">Visão:</h3>

                <ul className="mt-2 text-justify text-sm">
                  <li>
                    ✓ Ser reconhecido como um escritório de referência em
                    direito médico e da saúde, direito condominial, direito
                    civil, direito previdenciário e direito tributário, sendo
                    admirado por nossa excelência na prestação de serviços
                    jurídicos. Buscamos constantemente aprimorar nossos
                    conhecimentos e técnicas, mantendo-nos atualizados para
                    oferecer soluções inovadoras que atendam às necessidades de
                    nossos clientes e contribuam para o desenvolvimento da
                    sociedade.
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-xl border-2 border-primary p-4">
                <FcTimeline className="text-5xl" />

                <h3 className="mt-4 text-xl font-bold uppercase">Valores:</h3>

                <ul className="mt-2 space-y-4 text-justify text-sm">
                  <li>
                    ✓ Comprometimento: Estamos comprometidos com a excelência em
                    nossos serviços, buscando sempre superar as expectativas de
                    nossos clientes. Respeito: Valorizamos a diversidade e
                    respeitamos as opiniões, crenças e direitos de todos os
                    envolvidos em nossas atividades, sejam clientes,
                    colaboradores ou parceiros.
                  </li>
                  <li>
                    ✓ Ética Profissional: Atuamos de acordo com os mais altos
                    padrões éticos, garantindo a integridade e a
                    confidencialidade em todas as nossas relações e atividades.
                    Inovação: Buscamos constantemente novas abordagens e
                    soluções criativas para os desafios jurídicos, visando
                    sempre aprimorar nossos serviços e agregar valor aos nossos
                    clientes.
                  </li>
                  <li>
                    ✓ Justiça Social: Contribuímos para uma sociedade mais justa
                    e inclusiva, promovendo o acesso à justiça e defendendo os
                    direitos individuais e coletivos. Excelência: Buscamos a
                    excelência em tudo o que fazemos, desde o atendimento ao
                    cliente até a execução de nossos serviços jurídicos, visando
                    sempre alcançar os melhores resultados possíveis.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
