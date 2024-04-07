import Image from "next/image";

export default function Frontend() {
  return (
    <div>
      <div className="sm:px-5 lg:px-56 lg:py-5 flex lg:justify-between bg-white shadow-lg z-50">
        <div className="w-[50%] m-auto text-center">
          <h1 className="sm:text-2xl  md:text-7xl font-bold opacity-80 ">
            FrontEnd.
          </h1>
          <h1 className="sm:hidden lg:inline-block text-xl font-normal pt-3 text-gray-600">
            I have average to average front-end skills. Decorated can work
            according to needs very well.
          </h1>
        </div>

        <div className="w-[50%] flex justify-center ">
          <div className="flex justify-center text-center  ">
            <Image
              className="relative rounded-md z-10 transition duration-300 ease-in-out"
              src="/bg/frontend_bg.png"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>

      <div className="sm:px-5 lg:px-56 py-5 ">
        <div className="sm:px-5 lg:px-56 lg:py-5">
          <h1 className="text-2xl font-bold">My language skill</h1>
          <h1 className="mt-5">
            <div className="flex justify-center">
              <Image
                className="relative rounded-md"
                src="/logo/html.png"
                width={100}
                height={100}
              />
            </div>
            <span className="font-bold">HTML </span>
            Ability is at an advanced level Able to work according to needs very
            well Highly flexible Whether it's fixing a problem or starting a new
            one, it can be done.
          </h1>
          <h1 className="mt-5">
            <div className="flex justify-center">
              <Image
                className="relative rounded-md"
                src="/logo/css.png"
                width={100}
                height={100}
              />
            </div>
            <span className="font-bold">CSS </span>
            The ability is at a high level. Able to work according to needs very
            well Highly flexible Either fix the problem or start over. and can
            be used with other frameworks or libraries such as Tailwind css,
            Bootstrap 4-5 etc.
          </h1>
          <h1 className="mt-5">
            <div className="flex justify-center">
              <Image
                className="relative rounded-md"
                src="/logo/js.png"
                width={100}
                height={100}
              />
            </div>
            <span className="font-bold">Javascript </span>
            The ability is at a high level. Able to work according to needs very
            well Highly flexible Either fix the problem or start over. and can
            be used with other frameworks or libraries such as jquery, react,
            nextjs, etc.
          </h1>
        </div>
      </div>

      <div className="bg-white shadow-lg sm:px-5 lg:px-56 py-5">
        <div className="sm:px-5 lg:px-56 lg:py-5  text-end">
          <h1 className="text-2xl font-bold">My framework & library skill</h1>
          <h1 className="mt-5">
            <div className="flex justify-center">
              <Image
                className="relative rounded-md"
                src="/logo/next-js.png"
                width={100}
                height={100}
              />
            </div>
            <span className="font-bold">Next js </span>
            The ability is at a medium level. Able to work according to needs
            very well Highly flexible Either fix the problem or start over. and
            always ready to learn and be open to new knowledge
          </h1>
          <h1 className="mt-5">
            <div className="flex justify-center">
              <Image
                className="relative rounded-md"
                src="/logo/vue.png"
                width={100}
                height={100}
              />
            </div>
            <span className="font-bold">Vue js </span>
            The ability is at a medium level. Able to work according to needs
            very well Highly flexible Either fix the problem or start over. and
            always ready to learn and be open to new knowledge
          </h1>
          <h1 className="mt-5">
            <div className="flex justify-center">
              <Image
                className="relative rounded-md"
                src="/logo/bootstrap.png"
                width={100}
                height={100}
              />
            </div>
            <span className="font-bold">Bootstrap 4-5 </span>
            The ability is at a high level. Able to work according to needs very
            well Highly flexible Either fix the problem or start over. and
            always ready to learn and be open to new knowledge
          </h1>
          <h1 className="mt-5">
            <div className="flex justify-center">
              <Image
                className="relative rounded-md"
                src="/logo/tailwind.png"
                width={100}
                height={100}
              />
            </div>
            <span className="font-bold">Tailwind css </span>
            The ability is at a high level. Able to work according to needs very
            well Highly flexible Either fix the problem or start over. and
            always ready to learn and be open to new knowledge
          </h1>
        </div>
      </div>
    </div>
  );
}
