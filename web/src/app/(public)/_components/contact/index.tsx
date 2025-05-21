import Link from 'next/link'

import { Mail, MapPin, Phone, User } from 'lucide-react'

import { IconBrandWhatsapp } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const Contact = () => {
  return (
    <>
      <div
        className="mx-auto my-12 w-full px-5 md:max-w-5xl md:px-0"
        id="contato"
      >
        <div className="mb-4 flex flex-col items-center">
          <h2 className="text-xl font-semibold">Contato e Informações</h2>
          <div className="h-1 w-12 bg-[#C89D66]" />
        </div>

        <div className="mt-8 flex flex-col items-center space-y-3">
          <MapPin className="size-6" />
          <p className="text-center text-sm">
            R. Dr. Sebastião da Hora, 16 - sala P
            <span className="block">Gruta de Lourdes, Maceió - AL.</span>
          </p>
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
            <Link rel="noopener noreferrer" href="https://wa.me/5582994126999">
              <Button className="mt-4 w-full bg-green-600 hover:cursor-pointer hover:bg-green-700">
                <IconBrandWhatsapp className="size-6" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <div className="bg-wcavalcante-blue px-5 py-12 md:px-0">
          <div className="flex justify-center">
            <div className="w-[648px] rounded-md bg-white px-4 py-8">
              <div className="text-center">
                <h2 className="text-xl font-semibold">Agende uma consulta</h2>
                <p className="text-wcavalcante-ironside mt-4">
                  Estamos prontos para ajudar você a resolver suas questões
                  jurídicas. Preencha o formulário abaixo e entraremos em
                  contato.
                </p>
              </div>

              <form className="mt-6 space-y-6">
                <div className="w-full space-y-1">
                  <Label htmlFor="name">Nome</Label>
                  <Input type="text" id="name" placeholder="Seu nome" />
                </div>

                <div className="w-full space-y-1">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Seu melhor e-mail"
                  />
                </div>

                <div className="flex gap-2">
                  <div className="w-full space-y-1">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input type="text" id="phone" placeholder="Telefone" />
                  </div>

                  <div className="w-full space-y-1">
                    <Label htmlFor="subject">Área de interesse</Label>
                    <Input type="text" id="subject" placeholder="Assunto" />
                  </div>
                </div>

                <div className="w-full space-y-1">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Descreva brevemente seu caso"
                  />
                </div>

                <div className="flex justify-end">
                  <Button className="hover:cursor-pointer">
                    Enviar mensagem
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { Contact }
