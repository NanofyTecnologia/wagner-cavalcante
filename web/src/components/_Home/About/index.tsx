import Image from 'next/image'
import Container from '@/components/Container'
import Team from '@/assets/images/monte_cavalcante_equipe.jpg'

export default function About() {
  return (
    <>
      <section className="mt-10 flex justify-center md:mt-20">
        <Container>
          <div className="mx-auto gap-5 md:grid md:grid-cols-2">
            <div className="flex items-center">
              <Image
                src={Team}
                width={502}
                height={384}
                alt="Imagem da Equipe de Advogados da Monte e Cavalcante"
                className="mx-auto w-full border-2 border-[#121518] object-cover md:h-96 md:w-full md:border-8"
                priority
              />
            </div>
            <div className="mx-auto text-justify">
              <h2 className="mt-6 text-center font-garamond text-3xl font-bold italic md:mt-0">
                Saiba mais sobre nós
              </h2>
              <div className="mx-auto mt-4 text-sm md:mt-6">
                <p>
                  O escritório surgiu a partir de uma parceria entre dois
                  servidores públicos federais que, além de vizinhos (que até
                  então não se conheciam), eram advogados de formação. No
                  início, sem endereço físico, a parceria entre o Dr. Samuel
                  Monte e o Dr. Wagner Cavalcante se dava em home office. Após
                  alguns sucessos, os advogados decidiram formalizar a parceria,
                  que se tornou uma sociedade denominada Monte e Cavalcante
                  Advogados, localizada em uma área central da cidade de
                  Maceió-AL, e que desde 2021 vem se consolidando no mercado
                  regional.
                </p>
                <p className="mt-4">
                  Pela natureza servidora dos sócios fundadores, o escritório
                  tem como princípio primordial a resolução dos problemas
                  enfrentados por seus clientes, com ênfase na celeridade da
                  resolução das demandas e humanização da advocacia. Além disso,
                  tem como cultura organizacional a liberdade profissional, com
                  foco no crescimento coletivo de seus sócios, associados,
                  estagiários e colaboradores.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
