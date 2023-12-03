'use client'

import { BiSolidUserCircle, BiX } from 'react-icons/bi'
import React, { useState } from 'react'

export default function Profile() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(!open)
  return (
    <>
      <div className="flex h-full items-center justify-center">
        <div className="w-full max-w-sm rounded-lg bg-rangoon shadow-lg">
          <div className="flex flex-col items-center py-6">
            <BiSolidUserCircle className="text-8xl text-white" />
            <div className="mt-4 flex md:mt-6">
              <button
                onClick={handleOpen}
                className="rounded-xl bg-secondary/90 px-4 py-2 hover:bg-secondary/70"
              >
                Alterar Senha
              </button>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 flex h-full w-full items-start justify-center bg-black/40 py-16">
          <div className="w-full max-w-2xl rounded-md bg-white">
            <div className="px-4 pt-4 text-end">
              <button
                onClick={() => setOpen(false)}
                className="rounded-md bg-gray-200 p-1 text-2xl transition-colors hover:bg-gray-300"
              >
                <BiX />
              </button>
            </div>

            <form>
              <div className="flex flex-col items-center justify-center gap-6 p-4 text-neutral-500">
                <h4 className="text-xl">Informe os dados abaixo:</h4>
                <div className="mt-2 flex flex-col items-end gap-5">
                  <div>
                    <span className="mr-1">Senha atual:</span>
                    <input
                      type="password"
                      className="rounded-md border border-primary py-1 pl-1 text-black outline-none"
                    />
                  </div>

                  <div>
                    <span className="mr-1">Senha nova:</span>
                    <input
                      type="password"
                      className="rounded-md border border-primary py-1 pl-1 text-black outline-none"
                    />
                  </div>

                  <div>
                    <span className="mr-1">Repetir senha:</span>
                    <input
                      type="password"
                      className="rounded-md border border-primary py-1 pl-1 text-black outline-none"
                    />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-center gap-6">
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-md border border-gray-300 p-2 hover:border-gray-500 hover:text-gray-500"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-md border border-rangoon bg-rangoon p-2 text-white hover:bg-rangoon/90"
                  >
                    Alterar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
