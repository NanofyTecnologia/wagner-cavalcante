import Link from 'next/link'
import { BsPlus, BsTextLeft } from 'react-icons/bs'

export default function Dashboard() {
  return (
    <>
      <main className="grid h-full grid-cols-1 p-4 sm:grid-cols-2">
        <div className="flex items-start">
          <div className="w-full rounded-md border border-gray-200 bg-white p-4">
            <h3 className="mb-6 text-lg font-bold">Acesso rápido</h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-blue-300 p-4">
                <h4 className="mb-4 font-semibold">Postagens</h4>

                <div className="flex gap-4">
                  <Link
                    href="/dashboard/listar-postagens"
                    className="group block rounded-md border border-gray-100 p-4 shadow-sm active:shadow-inner "
                  >
                    <BsTextLeft className="text-2xl text-sky-700 group-active:scale-95" />
                  </Link>
                  <Link
                    href="/dashboard/criar-postagem"
                    className="group block rounded-md border border-gray-100 p-4 shadow-sm active:shadow-inner "
                  >
                    <BsPlus className="text-2xl text-green-700 group-active:scale-95" />
                  </Link>
                </div>
              </div>

              <div className="rounded-md border border-amber-800 p-4">
                <h4 className="mb-4 font-semibold">Empregos</h4>

                <div className="flex gap-4">
                  <Link
                    href="/dashboard/listar-empregos"
                    className="group block rounded-md border border-gray-100 p-4 shadow-sm active:shadow-inner "
                  >
                    <BsTextLeft className="text-2xl text-sky-700 group-active:scale-95" />
                  </Link>
                  <Link
                    href="/dashboard/criar-emprego"
                    className="group block rounded-md border border-gray-100 p-4 shadow-sm active:shadow-inner "
                  >
                    <BsPlus className="text-2xl text-green-700 group-active:scale-95" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
