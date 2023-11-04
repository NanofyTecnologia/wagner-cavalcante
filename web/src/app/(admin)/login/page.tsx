'use client'

import Image from 'next/image'
import { setCookie } from 'nookies'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import { api } from '@/lib/axios'
import useToggle from '@/hooks/useToggle'
import LayoutImage from '@/assets/dashboard/images/bg_login_1.jpg'
import ModalRocoverPassword from '../components/ModalRecoverPassword'

type FieldValues = {
  email: string
  password: string
}

export default function Login() {
  const router = useRouter()
  const { handleSubmit, register } = useForm<FieldValues>()

  const [showDropdown, toggleShowDropdown, elementRef, buttonRef] = useToggle()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await api.post('/sign-in', data)

      setCookie(null, 'token', response.data.token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      })

      router.push('/dashboard')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <main className="flex h-screen items-center">
        <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-md bg-white shadow-md">
          <div className="grid grid-cols-6">
            <div className="col-span-2">
              <Image width={400} height={1200} src={LayoutImage} alt="" />
            </div>

            <div className="col-span-4 flex items-center justify-center">
              <div className="w-full max-w-lg space-y-6">
                <h2 className="text-3xl font-extrabold">
                  Entrar na plataforma
                </h2>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-full max-w-lg"
                >
                  <label htmlFor="email" className="mb-2 block font-bold">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="text"
                    {...register('email')}
                    placeholder="example@domain.com"
                    className="w-full rounded-md border border-gray-200 bg-gray-50 p-2 outline-blue-500"
                  />

                  <label
                    htmlFor="password"
                    className="mb-2 mt-6 block font-bold"
                  >
                    Senha
                  </label>
                  <div className="relative flex items-center">
                    <input
                      id="password"
                      type="password"
                      {...register('password')}
                      placeholder="••••••••"
                      className="w-full rounded-md border border-gray-200 bg-gray-50 p-2 outline-blue-500"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={toggleShowDropdown}
                    className="mb-6 mt-3 block text-blue-500 hover:underline"
                  >
                    Esqueceu sua senha?
                  </button>

                  <button
                    type="submit"
                    className="rounded-md bg-blue-500 px-14 py-3 font-bold uppercase text-white transition-colors hover:bg-blue-600"
                  >
                    Acessar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {showDropdown && (
        <ModalRocoverPassword
          show={showDropdown}
          toggleShow={toggleShowDropdown}
        />
      )}
    </>
  )
}
