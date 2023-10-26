import Container from '@/components/Container'
import { FcNook, FcCalculator, FcSalesPerformance } from 'react-icons/fc'

export default function Consultancy() {
  return (
    <>
      <section className="mt-12">
        <Container>
          <div>
            <h2 className="mt-4 text-center text-3xl font-bold uppercase">
              Lorem ipsum
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 pb-5 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center rounded-xl border-2 border-rangoon p-4">
                <FcSalesPerformance className="text-5xl" />

                <h3 className="mt-5 text-xl font-bold uppercase">
                  Lorem ipsum
                </h3>

                <ul className="mt-3 flex flex-col items-center gap-3 text-center text-sm">
                  <li>
                    ✓ Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    <span className="block">
                      ✓ Consequuntur numquam praesentium
                    </span>
                    tempora, culpa aspernatur ea qui cumque, voluptatum iste;
                  </li>
                  <li>
                    <span className="block">
                      ✓ tempora, culpa aspernatur ea qui cumque, voluptatum iste
                    </span>
                  </li>
                  <li>
                    ✓ Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-center rounded-xl border-2 border-rangoon p-4">
                <FcCalculator className="text-5xl" />

                <h3 className="mt-5 text-xl font-bold uppercase">dolor sit</h3>

                <ul className="mt-3 flex flex-col items-center gap-3 text-center text-sm">
                  <li>
                    ✓ Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    <span className="block">
                      ✓ Consequuntur numquam praesentium
                    </span>
                    tempora, culpa aspernatur ea qui cumque, voluptatum iste;
                  </li>
                  <li>
                    <span className="block">
                      ✓ tempora, culpa aspernatur ea qui cumque, voluptatum iste
                    </span>
                  </li>
                  <li>
                    ✓ Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-center rounded-xl border-2 border-rangoon p-4">
                <FcNook className="text-5xl" />

                <h3 className="mt-5 text-xl font-bold uppercase">
                  Consequuntur numquam
                </h3>

                <ul className="mt-3 flex flex-col items-center gap-3 text-center text-sm">
                  <li>
                    ✓ Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    <span className="block">
                      ✓ Consequuntur numquam praesentium
                    </span>
                    tempora, culpa aspernatur ea qui cumque, voluptatum iste;
                  </li>
                  <li>
                    <span className="block">
                      ✓ tempora, culpa aspernatur ea qui cumque, voluptatum iste
                    </span>
                  </li>
                  <li>
                    ✓ Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
