import { api } from '@/lib/axios'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BsX } from 'react-icons/bs'
import { toast } from 'react-toastify'

type ModalRecoverPasswordProps = {
  show: boolean
  toggleShow: () => void
}

type FieldValues = {
  email: string
}

export default function ModalRocoverPassword({
  show,
  toggleShow,
}: ModalRecoverPasswordProps) {
  const { handleSubmit, register } = useForm<FieldValues>()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const { email } = data

      await api.post('/send-email/reset-password', { email })

      toast.success('E-mail enviado com sucesso!')
    } catch (error) {
      toast.error('Erro ao enviar e-mail')
    }
  }

  return (
    <>
      <div className="absolute left-0 top-0 h-full w-full bg-black/75">
        <div className="m-auto flex h-full max-w-md items-center">
          <div className="w-full rounded-md bg-white shadow">
            <h2 className="flex items-center justify-between p-4 font-semibold uppercase text-neutral-400">
              Recuperar senha
              <button onClick={toggleShow}>
                <BsX className="text-3xl hover:text-neutral-500" />
              </button>
            </h2>

            <div className="px-4 pb-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label
                  htmlFor="recoverEmail"
                  className="mb-2 block text-neutral-400"
                >
                  Digite seu e-mail para recuperar a senha
                </label>

                <input
                  id="recoverEmail"
                  type="text"
                  autoComplete="off"
                  placeholder="E-mail"
                  {...register('email')}
                  className="mb-4 w-full rounded-md border border-neutral-300 bg-neutral-100 p-3 outline-blue-500"
                />

                <button className="w-full rounded-md bg-blue-500 p-3 font-semibold uppercase text-white hover:bg-blue-600">
                  Enviar
                </button>
              </form>

              <div className="mt-4 text-end">
                <button
                  onClick={toggleShow}
                  className="rounded-md p-2 uppercase text-blue-400 hover:bg-blue-50"
                >
                  Retornar ao login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
