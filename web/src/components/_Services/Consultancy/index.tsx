import Container from '@/components/Container'
import { FcPodiumWithSpeaker, FcDataSheet, FcLineChart } from 'react-icons/fc'

export default function Consultancy() {
  return (
    <>
      <section className="mt-12 pb-10">
        <Container>
          <div>
            <h2 className="text-center text-3xl font-bold uppercase">
              Lorem ipsum
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 pb-5 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center rounded-xl border-2 border-rangoon p-4">
                <FcPodiumWithSpeaker className="text-5xl" />

                <h3 className="mt-5 text-xl font-bold uppercase">Lorem</h3>

                <ul className="mt-3 flex flex-col items-center gap-3 text-center text-sm">
                  <li className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis fugiat, odit est ipsum alias veritatis aperiam
                    eligendi laboriosam placeat magnam nulla facilis odio
                    repudiandae officiis dicta architecto? Dolores, quidem
                    quisquam:
                  </li>
                  <li>✓ Lorem ipsum dolor sit amet consectetur.</li>
                  <li>
                    ✓ Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis fugiat.
                  </li>
                  <li>✓ Lorem ipsum dolor sit amet consectetur.</li>
                  <li>
                    ✓ Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>✓ Lorem ipsum.</li>
                </ul>
              </div>

              <div className="flex flex-col items-center rounded-xl border-2 border-rangoon p-4">
                <FcDataSheet className="text-5xl" />

                <h3 className="mt-5 text-xl font-bold uppercase">
                  Lorem ipsum dolor
                </h3>

                <ul className="mt-3 flex flex-col items-center gap-3 text-center text-sm">
                  <li className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis veritatis obcaecati, nemo excepturi, aliquam incidunt
                    vitae, odit est cum rerum illum reiciendis quasi eligendi.
                    Eos veritatis nemo natus ad et?:
                  </li>
                  <li>✓ Lorem ipsum dolor sit amet.</li>
                  <li>✓ amet consectetur adipisicing.</li>
                  <li>✓ Eos veritatis nemo.</li>
                </ul>
              </div>

              <div className="flex flex-col items-center rounded-xl border-2 border-rangoon p-4">
                <FcLineChart className="text-5xl" />

                <h3 className="mt-5 text-center text-xl font-bold uppercase">
                  sit amet consectetur
                </h3>

                <ul className="mt-3 flex flex-col items-center gap-3 text-center text-sm">
                  <li className="text-justify">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Maxime nesciunt sit dolore vitae eius numquam, laboriosam
                    tempora autem perspiciatis delectus nulla amet neque velit
                    repellendus natus porro consectetur quibusdam quis!
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
