'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { signIn } from 'next-auth/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Oval } from 'react-loader-spinner'
import { toast } from 'react-toastify'

import LayoutImage from '@/assets/dashboard/images/bg_login_1.jpg'
import useToggle from '@/hooks/useToggle'

import ModalRocoverPassword from '../components/ModalRecoverPassword'

type FieldValues = {
  email: string
  password: string
}

export default function Login() {
  const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<FieldValues>()

  const [showDropdown, toggleShowDropdown] = useToggle()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await signIn('credentials', {
        ...data,
        redirect: false,
      })

      router.replace('/dashboard')
    } catch (error: any) {
      if (error.response.data) {
        return toast.error(error.response.data)
      }

      toast.error('Erro ao fazer login')
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
                    disabled={isSubmitting}
                  />

                  <label
                    htmlFor="password"
                    className="mt-6 mb-2 block font-bold"
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
                      disabled={isSubmitting}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={toggleShowDropdown}
                    className="mt-3 mb-6 block text-blue-500 hover:underline"
                  >
                    Esqueceu sua senha?
                  </button>

                  <button
                    type="submit"
                    className="flex w-44 items-center justify-center rounded-md bg-blue-500 px-14 py-3 font-bold text-white uppercase transition-colors hover:bg-blue-600 disabled:bg-blue-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Oval
                        height={24}
                        width={24}
                        color="#ffffff"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="#ffffff"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                      />
                    ) : (
                      'Acessar'
                    )}
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
