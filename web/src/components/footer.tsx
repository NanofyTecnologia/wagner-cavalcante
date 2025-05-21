import Image from 'next/image'
import Link from 'next/link'

import { Mail } from 'lucide-react'

import { IconBrandWhatsapp } from '@tabler/icons-react'

import Logo from '@/assets/logo/05.png'

const Footer = () => {
  return (
    <div className="bg-wcavalcante-eerie py-8">
      <div className="space-y-6">
        <div className="h-16 w-auto">
          <Image
            src={Logo}
            className="h-full w-full object-contain"
            alt="Logo Wagner Cavalcante Advogados"
            priority
          />
        </div>
        <div className="text-wcavalcante-primary flex items-center justify-center space-x-3">
          <Link rel="noopener noreferrer" href="https://wa.me/5582996680662">
            <IconBrandWhatsapp className="size-6" />
          </Link>
          <Link
            rel="noopener noreferrer"
            href="mailto:wagner@wcavalcante.adv.br"
            className="flex items-center text-sm hover:underline"
          >
            <Mail className="size-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export { Footer }
