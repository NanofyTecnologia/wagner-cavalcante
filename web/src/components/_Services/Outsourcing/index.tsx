import Container from '@/components/Container'
import { FcLowPriority, FcTodoList, FcManager } from 'react-icons/fc'

export default function Outsourcing() {
  return (
    <>
      <section className="mt-12 bg-rangoon py-10 text-white">
        <Container>
          <div>
            <h2 className="text-center text-3xl font-bold uppercase">
              Lorem ipsum dolor sit amet
            </h2>
            <div className="mt-8">
              <div className="mt-6 rounded-xl border-2 border-primary p-4">
                <FcManager className="text-5xl" />

                <h3 className="mt-4 text-xl font-bold uppercase">
                  Lorem ipsum
                </h3>

                <ul className="mt-2 text-justify text-sm">
                  <li>
                    ✓ Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nam debitis, iure quae quibusdam nemo nostrum deserunt.
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-xl border-2 border-primary p-4">
                <FcLowPriority className="text-5xl" />

                <h3 className="mt-4 text-xl font-bold uppercase">
                  Lorem ipsum dolor
                </h3>

                <ul className="mt-2 text-justify text-sm">
                  <li>
                    ✓ Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nam debitis, iure quae quibusdam nemo nostrum deserunt.
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-xl border-2 border-primary p-4">
                <FcTodoList className="text-5xl" />

                <h3 className="mt-4 text-xl font-bold uppercase">
                  Lorem ipsum
                </h3>

                <ul className="mt-2 text-justify text-sm">
                  <li>
                    ✓ Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Porro, iure! Quam eligendi inventore tenetur explicabo
                    laborum a provident aliquam saepe accusamus, ad aspernatur
                    blanditiis at animi illo nostrum eveniet vero.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
