import Image from 'next/image'
import logo from '@/assets/images/logo.jpg'
import Container from '@/components/Container'
import Link from 'next/link'

export default function Introduction() {
  return (
    <>
      <main
        id="home"
        className="relative h-full items-center bg-[url(../assets/images/banner_initial.jpg)] bg-cover bg-center pb-44"
      >
        <div className="absolute inset-0 bg-black/80" />
        <Container>
          <div className="flex h-full items-center justify-center pt-44">
            <div className="relative">
              <div className="flex flex-col items-center gap-12 text-center">
                <Image
                  src={logo}
                  alt="Logo Monte e Cavalcante Advogados"
                  className="hidden h-auto max-w-xs rounded-full md:visible md:block"
                />
                <div>
                  <h2 className="font-roboto text-2xl font-bold uppercase text-white sm:text-4xl">
                    <p>
                      Defendendo seus direitos com paixão e expertise jurídica.
                    </p>
                  </h2>
                </div>

                <Link
                  href={'/quem-somos'}
                  className="rounded-full bg-primary px-4 py-2 text-sm text-secondary hover:bg-primary/70 sm:text-base"
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}
