'use client'

import Container from '@/components/Container'
import React, { useState } from 'react'
import { AiFillCaretUp } from 'react-icons/ai'

export default function Job() {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1)
    setIsOpen2(false)
    setIsOpen3(false)
  }

  const toggleAccordion2 = () => {
    setIsOpen1(false)
    setIsOpen2(!isOpen2)
    setIsOpen3(false)
  }

  const toggleAccordion3 = () => {
    setIsOpen1(false)
    setIsOpen2(false)
    setIsOpen3(!isOpen3)
  }

  return (
    <>
      <section className="mb-20 mt-20">
        <Container>
          <h2 className="text-center font-garamond text-2xl italic">
            Confira nossas vagas disponíveis:
          </h2>
          <div className="mt-6 rounded-md border">
            <div className="border-b">
              <button
                className="flex w-full justify-between bg-primary/10 px-4 py-3 text-left hover:bg-primary/30 focus:outline-none"
                onClick={toggleAccordion1}
              >
                Vaga no Administrativo
                <div className="flex items-center justify-center">
                  <span className="mr-2 underline">ver mais</span>
                  <AiFillCaretUp
                    className={`h-6 w-6 transform transition-transform duration-200 ${
                      isOpen1 ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
            {isOpen1 && (
              <div className="bg-white p-4">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus.
              </div>
            )}
          </div>

          <div className="mt-2 rounded-md border">
            <div className="border-b">
              <button
                className="flex w-full justify-between bg-primary/10 px-4 py-3 text-left hover:bg-primary/30 focus:outline-none"
                onClick={toggleAccordion2}
              >
                Vaga no Operacional
                <div className="flex items-center justify-center">
                  <span className="mr-2 underline">ver mais</span>
                  <AiFillCaretUp
                    className={`h-6 w-6 transform transition-transform duration-200 ${
                      isOpen2 ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
            {isOpen2 && (
              <div className="bg-white p-4">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus.
              </div>
            )}
          </div>

          <div className="mt-2 rounded-md border">
            <div className="border-b">
              <button
                className="flex w-full justify-between bg-primary/10 px-4 py-3 text-left hover:bg-primary/30 focus:outline-none"
                onClick={toggleAccordion3}
              >
                Vaga em Prestador de Serviço
                <div className="flex items-center justify-center">
                  <span className="mr-2 underline">ver mais</span>
                  <AiFillCaretUp
                    className={`h-6 w-6 transform transition-transform duration-200 ${
                      isOpen3 ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
            {isOpen3 && (
              <div className="bg-white p-4">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus.
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  )
}
