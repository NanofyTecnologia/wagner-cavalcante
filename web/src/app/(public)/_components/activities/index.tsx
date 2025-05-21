import Link from 'next/link'

import {
  LucideIcon,
  BriefcaseMedical,
  ChevronRight,
  House,
  Clock4,
  FileText,
} from 'lucide-react'

import { Fragment } from 'react'

import { Button } from '@/components/ui/button'

interface CardProps {
  icon: LucideIcon
  title: string
  description: string
}

const cards: CardProps[] = [
  {
    icon: BriefcaseMedical,
    title: 'Direito Médico e da Saúde',
    description:
      'Atuação em casos de erro médico, negligência, responsabilidade civil médica e hospitalar, planos de saúde e direito à saúde.',
  },
  {
    icon: House,
    title: 'Direito Condominal',
    description:
      'Assessoria jurídica para condomínios, síndicos e condôminos em questões de convenção, regimento interno e conflitos condominiais.',
  },
  {
    icon: Clock4,
    title: 'Direito Cível',
    description:
      'Contratos, responsabilidade civil, direito de família, sucessões, direito do consumidor e questões imobiliárias.',
  },
  {
    icon: FileText,
    title: 'Direito Previdenciário',
    description:
      'Aposentadorias, pensões, auxílios, revisões de benefícios, planejamento previdenciário e recursos administrativos.',
  },
]

const Activities = () => {
  return (
    <div className="bg-[#F8F9FA] py-12" id="servicos">
      <div className="mx-auto w-full space-y-4 md:max-w-5xl">
        <div className="mb-4 flex flex-col items-center">
          <h2 className="text-xl font-semibold">Áreas de Atuação</h2>
          <div className="h-1 w-12 bg-[#C89D66]" />
        </div>
        <p className="text-wcavalcante-ironside mb-8 text-center">
          Oferecemos serviços jurídicos especializados nas seguintes áreas, com
          profissionais altamente qualificados para atender suas necessidades.
        </p>

        <div className="flex w-full flex-wrap justify-center gap-12">
          {cards.map((item, index) => (
            <Fragment key={index}>
              <div className="flex h-auto w-84 flex-col items-center rounded-md border bg-white p-4 text-center shadow transition-all duration-300 hover:scale-105">
                <div className="bg-wcavalcante-blue rounded-full p-3">
                  <item.icon color="white" className="size-7" />
                </div>
                <div className="mt-6 font-semibold uppercase">{item.title}</div>
                <div className="text-wcavalcante-ironside mt-4">
                  {item.description}
                </div>
                <Link
                  rel="noopener noreferrer"
                  href="/servicos"
                  className="text-wcavalcante-gold hover:text-wcavalcante-gold/60 mt-6"
                >
                  <div className="flex items-center justify-center gap-1">
                    <p>Saiba mais</p>
                    <ChevronRight className="size-5" />
                  </div>
                </Link>
              </div>
            </Fragment>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link rel="noopener noreferrer" href="/servicos">
            <Button
              variant="blue"
              className="flex items-center hover:cursor-pointer"
            >
              <p>Ver Detalhadamente</p>
              <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export { Activities }
