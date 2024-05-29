import Container from '@/components/Container'

import { FcTabletAndroid, FcEngineering, FcCollaboration } from 'react-icons/fc'

export default function AboutCareer() {
  return (
    <>
      <section className="mt-20">
        <Container>
          <h2 className="text-center text-3xl uppercase italic">
            Venha fazer parte da nossa equipe
          </h2>
          <div className="grid grid-cols-1 gap-10 pt-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col p-1">
              <div className="flex justify-center">
                <FcTabletAndroid className="text-7xl" />
              </div>

              <h3 className="mt-5 text-center text-lg font-bold uppercase">
                consectetur
              </h3>

              <p className="mt-3 text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                assumenda voluptates ex, saepe cupiditate ipsam ratione ea
                perferendis officia. Ipsam consequuntur reiciendis similique
                blanditiis magnam nobis voluptatem eaque atque et.
              </p>
              <div className="flex flex-1 items-end justify-center"></div>
            </div>

            <div className="flex flex-col p-1">
              <div className="flex justify-center">
                <FcEngineering className="text-7xl" />
              </div>

              <h3 className="mt-5 text-center text-lg font-bold uppercase">
                assumenda
              </h3>

              <p className="mt-3 text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt aspernatur provident commodi soluta. Minima quod ipsa
                quidem, tenetur esse voluptatibus hic atque iste itaque
                reprehenderit facere ex commodi veritatis magnam.
              </p>
              <div className="flex flex-1 items-end justify-center"></div>
            </div>

            <div className="flex flex-col p-1">
              <div className="flex justify-center">
                <FcCollaboration className="text-7xl" />
              </div>

              <h3 className="mt-5 text-center text-lg font-bold uppercase">
                blanditiis
              </h3>

              <p className="mt-3 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
                quod dolorum ad necessitatibus quam aliquam alias quae
                asperiores beatae sunt! Impedit ullam explicabo veritatis
                repellat assumenda in, at nemo. Minus.
              </p>
              <div className="flex flex-1 items-end justify-center"></div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
