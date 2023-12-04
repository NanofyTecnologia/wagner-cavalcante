import Image from 'next/image'
import { Link as ScrollLink } from '@mui/material'

import MonteCavalcanteLogo from '@/assets/images/logo_text_white.png'
import { BsHouse } from 'react-icons/bs'

export default function LandingPage() {
  return (
    <>
      <div className="relative bg-[url(../assets/images/assinando-papeis.jpg)] bg-cover">
        <div className="bg-black bg-opacity-60 py-6">
          <header className="mx-auto my-6 max-w-7xl rounded-md border-2 border-secondary px-4 py-2">
            <div className="flex w-full items-center justify-between">
              <Image src={MonteCavalcanteLogo} alt="" className="w-60" />

              <nav className="flex items-center gap-6">
                <ScrollLink
                  href="#begin"
                  className="text-neutral-300 no-underline hover:text-black"
                >
                  Início
                </ScrollLink>

                <ScrollLink
                  href="#services"
                  className="text-neutral-300 no-underline hover:text-black"
                >
                  Serviços
                </ScrollLink>

                <ScrollLink
                  href="#about"
                  className="text-neutral-300 no-underline hover:text-black"
                >
                  Sobre nós
                </ScrollLink>

                <ScrollLink
                  href="#contact"
                  className="text-neutral-300 no-underline hover:text-black"
                >
                  Contato
                </ScrollLink>
              </nav>

              <button className="rounded-md bg-primary p-2 uppercase text-white hover:bg-primary/80">
                Contato
              </button>
            </div>
          </header>

          <main className="mx-auto max-w-7xl py-32">
            <div className="grid grid-cols-2 items-center px-12">
              <div className="text-secondary">
                <h1 className="font-garamond text-xl font-semibold uppercase">
                  Monte & Cavalcante
                </h1>

                <h2 className="font-garamond text-4xl font-semibold uppercase">
                  Advocacia
                </h2>

                <p className="mt-4 text-3xl">
                  Lorem ipsum dolor sit{' '}
                  <span className="font-bold italic">
                    amet consectetur adipisicing
                  </span>{' '}
                  elit. Quasi, vero tempore deserunt est alias exercitationem
                  ratione aspernatur officiis nihil nesciunt provident
                  necessitatibus enim quis inventore blanditiis. Natus culpa
                  nobis distinctio.
                </p>

                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis enim architecto exercitationem sit fugiat?
                  Voluptatibus quisquam porro expedita quia, suscipit voluptate
                  repudiandae et commodi at, inventore error eos distinctio ex.
                </p>

                <button className="mt-6 rounded-md bg-primary px-12 py-4 text-sm font-semibold uppercase text-white">
                  Saiba mais
                </button>
              </div>
              <div className="flex max-w-sm items-center justify-start px-8">
                <div className="rounded-md bg-primary p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-black p-8"></div>
                    <div className="-translate-x-12 rounded-full border-2 border-primary bg-black p-8"></div>
                    <div className="-translate-x-24 rounded-full border-2 border-primary bg-black p-8"></div>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis enim architecto exercitationem sit fugiat?
                    Voluptatibus.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <section className="bg-neutral-900">
        <div className="mx-auto max-w-7xl px-12 py-8">
          <h2 className="text-center text-xl font-semibold uppercase text-secondary">
            Nossos serviços
          </h2>

          <h3 className="my-6 text-center text-4xl text-primary">
            Veniam, voluptatum. Lorem ipsum dolor sit amet consectetur
          </h3>

          <div className="grid grid-cols-3 gap-6">
            <div className="rounded-md border border-primary p-6">
              <BsHouse className="text-5xl text-secondary" />

              <h3 className="my-4 text-xl font-semibold text-primary">
                Lorem ipsum dolor
              </h3>

              <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                molestiae reprehenderit est praesentium fugiat ipsum velit
                dolorem cumque rem excepturi pariatur quos.
              </p>

              <a
                href="#"
                className="mt-4 block uppercase text-secondary underline"
              >
                Saiba mais
              </a>
            </div>

            <div className="rounded-md border border-primary p-6">
              <BsHouse className="text-5xl text-secondary" />

              <h3 className="my-4 text-xl font-semibold text-primary">
                Lorem ipsum dolor
              </h3>

              <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                molestiae reprehenderit est praesentium fugiat ipsum velit
                dolorem cumque rem excepturi pariatur quos.
              </p>

              <a
                href="#"
                className="mt-4 block uppercase text-secondary underline"
              >
                Saiba mais
              </a>
            </div>

            <div className="rounded-md border border-primary p-6">
              <BsHouse className="text-5xl text-secondary" />

              <h3 className="my-4 text-xl font-semibold text-primary">
                Lorem ipsum dolor
              </h3>

              <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                molestiae reprehenderit est praesentium fugiat ipsum velit
                dolorem cumque rem excepturi pariatur quos.
              </p>

              <a
                href="#"
                className="mt-4 block uppercase text-secondary underline"
              >
                Saiba mais
              </a>
            </div>

            <div className="rounded-md border border-primary p-6">
              <BsHouse className="text-5xl text-secondary" />

              <h3 className="my-4 text-xl font-semibold text-primary">
                Lorem ipsum dolor
              </h3>

              <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                molestiae reprehenderit est praesentium fugiat ipsum velit
                dolorem cumque rem excepturi pariatur quos.
              </p>

              <a
                href="#"
                className="mt-4 block uppercase text-secondary underline"
              >
                Saiba mais
              </a>
            </div>

            <div className="rounded-md border border-primary p-6">
              <BsHouse className="text-5xl text-secondary" />

              <h3 className="my-4 text-xl font-semibold text-primary">
                Lorem ipsum dolor
              </h3>

              <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                molestiae reprehenderit est praesentium fugiat ipsum velit
                dolorem cumque rem excepturi pariatur quos.
              </p>

              <a
                href="#"
                className="mt-4 block uppercase text-secondary underline"
              >
                Saiba mais
              </a>
            </div>

            <div className="rounded-md border border-primary p-6">
              <BsHouse className="text-5xl text-secondary" />

              <h3 className="my-4 text-xl font-semibold text-primary">
                Lorem ipsum dolor
              </h3>

              <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                molestiae reprehenderit est praesentium fugiat ipsum velit
                dolorem cumque rem excepturi pariatur quos.
              </p>

              <a
                href="#"
                className="mt-4 block uppercase text-secondary underline"
              >
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-12 py-8">
          <h2 className="text-center text-xl font-semibold uppercase text-black">
            Sobre nós
          </h2>

          <div className="my-6 grid grid-cols-2 gap-12">
            <div className="h-96 rounded-md bg-neutral-500"></div>

            <div className="space-y-4">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus doloribus itaque provident accusantium suscipit
                repellendus dolore dignissimos at cumque maiores, veritatis
                dolorem ad ut exercitationem impedit quam maxime a recusandae.
              </p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus doloribus itaque provident accusantium suscipit
                repellendus dolore dignissimos at cumque maiores, veritatis
                dolorem ad ut exercitationem impedit quam maxime a recusandae.
              </p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus doloribus itaque provident accusantium suscipit
                repellendus dolore dignissimos at cumque maiores, veritatis
                dolorem ad ut exercitationem impedit quam maxime a recusandae.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="rounded-md bg-primary px-6 py-4 font-semibold uppercase text-white">
              Entre em contato conosco
            </button>
          </div>
        </div>
      </section>

      <section className="bg-neutral-300">
        <div className="mx-auto max-w-7xl px-12 py-8">
          <div className="grid grid-cols-2">
            <div className="flex flex-col items-start justify-center">
              <h2 className="mb-4 font-semibold uppercase text-black">
                Contato
              </h2>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione impedit eos laudantium vel vitae! Voluptate.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="mt-6">
                  <h3 className="text-xl font-bold">Suporte</h3>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatem.
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-bold">Suporte</h3>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatem.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-md rounded-md bg-neutral-400 p-4">
                <form className="mx-auto w-full max-w-md space-y-4">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="w-full rounded-md p-3 outline-primary"
                  />
                  <input
                    type="text"
                    placeholder="E-mail"
                    className="w-full rounded-md p-3 outline-primary"
                  />
                  <input
                    type="text"
                    placeholder="Telefone"
                    className="w-full rounded-md p-3 outline-primary"
                  />
                  <input
                    type="text"
                    placeholder="Assunto"
                    className="w-full rounded-md p-3 outline-primary"
                  />
                  <textarea
                    rows={4}
                    placeholder="Mensagem"
                    className="w-full resize-none rounded-md p-3 outline-primary"
                  />

                  <div className="text-end">
                    <button
                      type="submit"
                      className="rounded-md bg-neutral-600 px-12 py-3 font-bold uppercase text-white transition-colors hover:bg-neutral-600/80"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
