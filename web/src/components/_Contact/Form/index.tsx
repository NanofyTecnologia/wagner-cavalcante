export default function Form() {
  return (
    <>
      <section className="mt-20 bg-primary/30 px-4 pb-20 pt-12 sm:px-0">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Entre em contato conosco
        </h2>

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
              className="rounded-md bg-primary px-12 py-3 font-bold uppercase text-white transition-colors hover:bg-primary/80"
            >
              Enviar
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
