'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Mail, Phone, User } from 'lucide-react'

import { Tab, Tabs, Accordion, AccordionItem } from '@heroui/react'
import { IconBrandWhatsapp } from '@tabler/icons-react'

import Logo from '@/assets/logo/05.png'
import { Button } from '@/components/ui/button'

interface ServicesProps {
  title: string
  expression: string
  description: string
}

const services: ServicesProps[] = [
  {
    title: 'Direito Médico e da Saúde',
    expression:
      'Sua saúde é um direito, não um privilégio. Na defesa da saúde e da ética médica, transformamos injustiças em direitos reconhecidos.',
    description:
      'Advocacia especializada em direito médico e da saúde, com atuação na resolução de questões como recusa de atendimento pelos planos de saúde, cobrança indevida de mensalidades e coparticipação, reajuste abusivo, além de defender o direito à saúde garantido pelo Estado e assegurar a ética médica em todos os aspectos do cuidado com o paciente.',
  },
  {
    title: 'Direito Condominal',
    expression:
      'Gestão condominial segura começa com uma assessoria jurídica firme, estratégica e pronta para enfrentar a inadimplência e os conflitos do dia a dia.',
    description:
      'Advocacia especializada em direito condominial, com atuação na assessoria jurídica à gestão do condomínio, prevenindo situações desfavoráveis a este, bem como defendendo seus direitos em processos judiciais, realizando ainda a cobrança efetiva dos inadimplentes por meio de ações específicas.',
  },
  {
    title: 'Direito Cível e  Previdenciário',
    expression:
      'Protegemos o que é seu por direito — nas relações familiares, nas lutas do consumidor e na conquista de benefícios previdenciários justos e garantidos por lei.',
    description:
      'Atuação no seara civil, nas áreas de direito de família e direito do consumidor e no âmbito previdenciário, garantindo que nossos clientes tenham seu direitos respeitados e que obtenham as melhores soluções possíveis dentro do contexto legal, assim como recebam os benefícios aos quais têm direito de forma justa e eficiente.',
  },
]

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
              Nossos Serviços
            </h2>
            <div className="bg-wcavalcante-gold h-1 w-12" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 w-full px-4 md:max-w-5xl">
        <div className="hidden md:block">
          <Tabs
            aria-label="serviços de Wagner Cavalcante Advogados"
            radius="none"
            classNames={{
              tab: 'h-12',
              tabContent: 'px-3',
              tabList: 'p-0 border',
            }}
          >
            {services.map((service, index) => (
              <Tab key={index} title={service.title} className="p-0">
                <div className="space-y-4 border-2 p-5">
                  <p className="font-semibold">{service.expression}</p>
                  <p>{service.description}</p>
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>

        <div className="block md:hidden">
          <Accordion
            aria-label="serviços de Wagner Cavalcante Advogados"
            className="px-0"
          >
            {services.map((service, index) => (
              <AccordionItem key={index} title={service.title}>
                <div className="space-y-4">
                  <p className="font-semibold">{service.expression}</p>
                  <p>{service.description}</p>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="my-12">
          <div className="mb-4 flex flex-col items-center">
            <h2 className="text-xl font-semibold">Contato</h2>
            <div className="h-1 w-12 bg-[#C89D66]" />
          </div>

          <div className="mt-6 flex justify-center">
            <div className="w-96 rounded-sm border bg-white px-4 py-6 shadow">
              <div className="flex gap-3">
                <div className="flex items-center">
                  <div className="rounded-full border p-3 shadow">
                    <User className="size-7" />
                  </div>
                </div>
                <div className="space-y-0.5">
                  <p className="font-semibold">Dr. Wagner Cavalcante</p>

                  <Link
                    rel="noopener noreferrer"
                    href="mailto:wagner@wcavalcante.adv.br"
                    className="flex items-center text-sm hover:underline"
                  >
                    <Mail className="mr-2 size-4" />
                    wagner@wcavalcante.adv.br
                  </Link>

                  <div className="flex items-center text-sm">
                    <Phone className="mr-2 size-4" />
                    (82) 99412-6999
                  </div>
                </div>
              </div>
              <Link
                rel="noopener noreferrer"
                href="https://wa.me/5582994126999"
              >
                <Button className="mt-4 w-full bg-green-600 hover:cursor-pointer hover:bg-green-700">
                  <IconBrandWhatsapp className="size-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
