'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { BiSolidUserCircle, BiShowAlt, BiHide } from 'react-icons/bi'
import { BsX } from 'react-icons/bs'
import { Oval } from 'react-loader-spinner'
import { toast } from 'react-toastify'

import useToggle from '@/hooks/useToggle'
import { api } from '@/lib/axios'

type FieldValues = {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

export default function Profile() {
  const [showModal, toggleShowModal, elementRef] = useToggle()

  const [showNewPassword, setShowNewPassword] = useToggle()
  const [showConfirmPassword, setShowConfirmPassword] = useToggle()

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<FieldValues>()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      if (data.newPassword !== data.confirmPassword) {
        toast.warn('As senhas não coincidem')
      }

      await api.put('/user/change-password', data)

      toast.success('Senha alterada com sucesso')

      toggleShowModal()
    } catch (error: any) {
      toast.error(error.response.data || 'Houve um erro ao atualizar sua senha')
    }
  }

  const handleOpen = () => toggleShowModal()
  return (
    <>
      <div className="flex h-full items-center justify-center">
        <div className="bg-rangoon w-full max-w-sm rounded-lg shadow-lg">
          <div className="flex flex-col items-center py-6">
            <BiSolidUserCircle className="text-8xl text-white" />
            <div className="mt-4 flex md:mt-6">
              <button
                onClick={handleOpen}
                className="bg-secondary/90 hover:bg-secondary/70 rounded-xl px-4 py-2"
              >
                Alterar Senha
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="absolute top-0 left-0 h-full w-full bg-black/75">
          <div className="m-auto flex h-full max-w-md items-center">
            <div className="w-full rounded-md bg-white shadow" ref={elementRef}>
              <h2 className="flex items-center justify-between p-4 font-semibold text-neutral-400 uppercase">
                Atualizar senha
                <button onClick={() => toggleShowModal()}>
                  <BsX className="text-3xl hover:text-neutral-500" />
                </button>
              </h2>

              <div className="px-4 pb-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label
                    htmlFor="currentPassword"
                    className="mb-2 block text-neutral-400"
                  >
                    Digite sua senha atual
                  </label>
                  <input
                    id="currentPassword"
                    type="password"
                    autoComplete="off"
                    placeholder="Senha atual"
                    {...register('currentPassword')}
                    className="mb-8 w-full rounded-md border border-neutral-300 bg-neutral-100 p-3 outline-blue-500"
                    disabled={isSubmitting}
                  />

                  <label
                    htmlFor="newPassword"
                    className="mb-2 block text-neutral-400"
                  >
                    Digite sua nova senha
                  </label>

                  <div className="relative mb-4 flex items-center">
                    <input
                      id="newPassword"
                      type={showNewPassword ? 'text' : 'password'}
                      autoComplete="off"
                      placeholder="Nova senha"
                      {...register('newPassword')}
                      className="w-full rounded-md border border-neutral-300 bg-neutral-100 p-3 outline-blue-500"
                      disabled={isSubmitting}
                    />

                    <button
                      type="button"
                      onClick={setShowNewPassword}
                      className="absolute right-2 text-3xl text-neutral-600 hover:text-neutral-600/60"
                    >
                      {showNewPassword ? <BiHide /> : <BiShowAlt />}
                    </button>
                  </div>

                  <div className="relative mb-4 flex items-center">
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      autoComplete="off"
                      placeholder="Confirme sua nova senha"
                      {...register('confirmPassword')}
                      className="w-full rounded-md border border-neutral-300 bg-neutral-100 p-3 outline-blue-500"
                      disabled={isSubmitting}
                    />

                    <button
                      type="button"
                      onClick={setShowConfirmPassword}
                      className="absolute right-2 text-3xl text-neutral-600 hover:text-neutral-600/60"
                    >
                      {showConfirmPassword ? <BiHide /> : <BiShowAlt />}
                    </button>
                  </div>

                  <button
                    className="flex w-full items-center justify-center rounded-md bg-blue-500 p-3 font-semibold text-white uppercase hover:bg-blue-600 disabled:bg-blue-300"
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
                      'Enviar'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
