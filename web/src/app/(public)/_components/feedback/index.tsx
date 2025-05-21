import { Star } from 'lucide-react'

import { Fragment } from 'react'

interface CardProps {
  name: string
  stars: number
  description: string
}

const cards: CardProps[] = [
  {
    name: 'Ranuzia Costa',
    stars: 5,
    description:
      'Wagner e os demais da equipe são extremamente gentis e super mega competentes.',
  },
  {
    name: 'Amanda Marques',
    stars: 5,
    description:
      'Excelentes profissionais, que exercem o direito com excelência.',
  },
  {
    name: 'Anna Flavia',
    stars: 5,
    description:
      'Exercem o Direito de forma magnífica! Profissionais excelentes que reconhece  as necessidades dos clientes e auxilia a encontrar uma solução.',
  },
  {
    name: 'Juliane Santos',
    stars: 5,
    description:
      'Profissionais que exercem o direito com excelência, extremamente capacitados!!',
  },
]

const Feedback = () => {
  return (
    <div className="bg-[#F8F9FA] py-12" id="nossos-clientes">
      <div className="mx-auto w-full space-y-4 px-5 md:max-w-5xl md:px-0">
        <div className="mb-4 flex flex-col items-center">
          <h2 className="text-xl font-semibold">Avaliação de Clientes</h2>
          <div className="h-1 w-12 bg-[#C89D66]" />
        </div>
        <p className="text-wcavalcante-ironside mb-8 text-center">
          Nossos clientes compartilham suas experiências positivas, destacando a
          dedicação, a expertise e o compromisso com a justiça que oferecemos.
          Leia como nossa equipe de advogados tem feito a diferença na vida de
          nossos clientes, proporcionando soluções eficazes e personalizadas
          para cada caso.
        </p>

        <div className="flex w-full flex-wrap justify-center gap-4">
          {cards.map((item, index) => (
            <Fragment key={index}>
              <div className="h-52 w-[450px] rounded-md border bg-white px-4 pt-6 shadow transition-all duration-300 hover:scale-105">
                <div className="flex space-x-1">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <div className="mt-6 text-sm font-semibold uppercase">
                  {item.name}
                </div>
                <div className="text-wcavalcante-ironside mt-4 text-sm italic">
                  {item.description}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Feedback }
