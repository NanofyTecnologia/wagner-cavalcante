'use client'

import { useParams, useRouter } from 'next/navigation'

import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { api } from '@/lib/axios'

type FieldValues = {
  password: string
  confirmPassword: string
}

export default function ResetPassword() {
  const params = useParams()
  const token = params?.token as string
  const router = useRouter()

  const { handleSubmit, register } = useForm<FieldValues>()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const { password, confirmPassword } = data

      await api.post(`/reset-password/${token}`, {
        password,
        confirmPassword,
      })

      router.push('/login')
      toast.success('Senha alterada com sucesso!')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <main className="flex h-screen items-center">
        <div className="mx-auto w-full max-w-md">
          <form
            className="rounded-md border border-neutral-200 bg-white p-4 shadow-md"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="text-center text-2xl font-semibold">
              Redefinir senha
            </h2>

            <label htmlFor="password" className="mt-6 mb-2 block font-bold">
              Senha
            </label>
            <div className="relative mb-4 flex items-center">
              <input
                id="password"
                type="password"
                {...register('password')}
                placeholder="••••••••"
                className="w-full rounded-md border border-gray-200 bg-gray-50 p-2 outline-blue-500"
              />
            </div>

            <label
              htmlFor="confirmPassword"
              className="mt-6 mb-2 block font-bold"
            >
              Confirme sua senha
            </label>
            <div className="relative mb-4 flex items-center">
              <input
                id="confirmPassword"
                type="password"
                {...register('confirmPassword')}
                placeholder="••••••••"
                className="w-full rounded-md border border-gray-200 bg-gray-50 p-2 outline-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-500 px-14 py-3 font-bold text-white uppercase transition-colors hover:bg-blue-600"
            >
              Salvar
            </button>
          </form>
        </div>
      </main>
    </>
  )
}
