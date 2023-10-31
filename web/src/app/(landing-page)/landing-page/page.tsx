import Image from 'next/image'

import Logo from '@/assets/images/logo_text_white.png'
import { BsFillCaretRightFill } from 'react-icons/bs'

export default function LandingPage() {
  return (
    <>
      <header className="bg-neutral-600 px-16 py-4">
        <Image src={Logo} alt="monte e cavalcante" className="max-w-xs" />
      </header>

      <section className="bg-[url(../assets/images/assinando-papeis.jpg)] bg-cover bg-fixed">
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-4xl space-y-4 py-16 text-center">
              <h1 className="font-italiana text-4xl uppercase text-white">
                Monte e Cavalcante <span className="block">Advogados</span>
              </h1>

              <p className="text-center text-neutral-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, sed doloremque nihil, optio cum temporibus nulla libero
                vero exercitationem distinctio reprehenderit ipsam deleniti
                aliquam? Laboriosam, qui. Eos nobis molestias quisquam?
              </p>

              <button className="rounded-md bg-ironside px-6 py-4 font-bold uppercase text-white hover:bg-ironside/80">
                Entre em contato conosco
              </button>
            </div>
          </div>

          <div className="w-full py-16">
            <div className="mx-auto max-w-md rounded-md bg-ironside p-4">
              <h2 className="text-center text-lg font-bold text-white">
                Excelência jurídica na melhor estrutura. Formulário para
                orientação especializada.
              </h2>

              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full rounded-md p-3"
                />

                <input
                  type="text"
                  placeholder="Telefone"
                  className="w-full rounded-md p-3"
                />

                <input
                  type="text"
                  placeholder="E-mail"
                  className="w-full rounded-md p-3"
                />

                <input
                  type="text"
                  placeholder="Assunto"
                  className="w-full rounded-md p-3"
                />

                <textarea
                  rows={4}
                  placeholder="Mensagem"
                  className="w-full resize-none rounded-md p-3"
                />

                <button
                  type="submit"
                  className="w-full rounded-md bg-neutral-700 p-4 font-semibold uppercase text-white hover:bg-neutral-700/70"
                >
                  Falar com um advogado
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="px-64 py-10">
          <h2 className="mx-2 mb-6 text-2xl font-semibold">
            Lorem ipsum dolor sit.
          </h2>

          <ul className="list-disc space-y-4">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              libero porro quae? Eum porro modi impedit maxime voluptates nam
              nostrum quod omnis earum sed! Qui laboriosam cumque nostrum
              repellendus unde? Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </li>

            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              cumque vitae quasi, illum exercitationem adipisci doloribus
              aperiam nemo est aliquid, minima animi. Libero repudiandae iure
              voluptate odio tempora perspiciatis minima.
            </li>

            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              cumque vitae quasi, illum exercitationem adipisci doloribus
              aperiam nemo est aliquid, minima animi.
            </li>

            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              cumque vitae quasi.
            </li>

            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              cumque vitae quasi, illum exercitationem adipisci doloribus
              aperiam nemo est aliquid, minima animi.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-ironside px-16">
        <div className="grid grid-cols-2">
          <div className="py-32">
            <div className="flex h-[520px] items-center justify-center rounded-md bg-neutral-400/80">
              <div className="rounded-full bg-neutral-200/60 p-8">
                <BsFillCaretRightFill className="text-4xl text-neutral-600" />
              </div>
            </div>
          </div>
          <div className="py-32">
            <div className="mx-auto max-w-2xl space-y-6">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas sequi dolorem impedit culpa iure numquam facilis
                officiis atque alias, consequuntur delectus, in soluta molestiae
                corrupti dolores voluptates qui doloribus quaerat?
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                reprehenderit cumque aliquam quos cupiditate neque obcaecati
                aliquid beatae? Provident incidunt perferendis aliquid quaerat
                sequi corporis libero praesentium ut neque totam? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Animi reprehenderit
                cumque aliquam quos cupiditate neque obcaecati aliquid beatae?
                Provident incidunt perferendis aliquid quaerat sequi corporis
                libero praesentium ut neque totam? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Animi reprehenderit cumque aliquam
                quos cupiditate neque obcaecati aliquid beatae? Provident
                incidunt perferendis aliquid quaerat sequi corporis libero
                praesentium ut neque totam?
              </p>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officiis numquam nesciunt dolor neque quia quo qui harum ullam a
                saepe? Eius deserunt nam consequatur voluptas excepturi incidunt
                asperiores tenetur eum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
