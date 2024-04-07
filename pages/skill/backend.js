import Image from "next/image";

export default function Backend() {
  return (
    <div>
      <div className="sm:px-5 lg:px-56 lg:py-5 flex lg:justify-between bg-white shadow-lg z-50">
        <div className="w-[50%] m-auto text-center">
          <h1 className="sm:text-2xl  md:text-7xl font-bold opacity-80 ">
            Backend.
          </h1>
          <h1 className="sm:hidden lg:inline-block text-xl font-normal pt-3 text-gray-600">
            I have average backend skills, able to work as required.
          </h1>
        </div>

        <div className="w-[50%] flex justify-center ">
          <div className="flex justify-center text-center  ">
            <Image
              className="relative rounded-md z-10 grayscale transition duration-300 ease-in-out"
              src="/bg/backend_bg.png"
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
                src="/logo/php.png"
                width={100}
                height={100}
              />
            </div>
            <span className="font-bold">PHP </span>
            It's the language I'm most comfortable with. The ability is at a
            high level. Able to work according to needs very well Highly
            flexible Either fix the problem or start over. and always ready to
            learn and be open to new knowledge.
          </h1>
          <h1 className="mt-5">
            <div className="flex justify-center">
              <Image
                className="relative rounded-md"
                src="/logo/nodejs.png"
                width={100}
                height={100}
              />
            </div>
            <span className="font-bold">nodejs or Javascript </span>
            The ability is at a high level. Able to work according to needs very
            well Highly flexible Either fix the problem or start over. and
            always ready to learn and be open to new knowledge.
          </h1>
          <h1 className="mt-5">
            <div className="flex justify-center">
              <Image
                className="relative rounded-md"
                src="/logo/python.png"
                width={100}
                height={100}
              />
            </div>
            <span className="font-bold">Python </span>
            The ability is at a medium level. Able to work according to needs
            very well Highly flexible Either fix the problem or start over. and
            always ready to learn and be open to new knowledge.
          </h1>
        </div>
      </div>

      <div className="bg-white shadow-lg sm:px-5 lg:px-56 py-5">
        <div className="sm:px-5 lg:px-56 lg:py-5  text-end">
          <h1 className="text-2xl font-bold">My framework skill</h1>
          <h1 className="mt-5">
            <div className="flex justify-center">
              <Image
                className="relative rounded-md"
                src="/logo/laravel.png"
                width={100}
                height={100}
              />
            </div>
            <span className="font-bold">Laravel </span>
            The ability is at a medium level. Able to work according to needs
            very well Highly flexible Either fix the problem or start over. and
            always ready to learn and be open to new knowledge.
          </h1>
          <h1 className="mt-5">
            <div className="flex justify-center">
              <Image
                className="relative rounded-md"
                src="/logo/opencart.png"
                width={100}
                height={100}
              />
            </div>
            <span className="font-bold">Opencart </span>
            The ability is at a medium level. Able to work according to needs
            very well Highly flexible Either fix the problem or start over. and
            always ready to learn and be open to new knowledge.
          </h1>
          <h1 className="mt-5">
            <div className="flex justify-center">
              <Image
                className="relative rounded-md"
                src="/logo/express.png"
                width={100}
                height={100}
              />
            </div>
            <span className="font-bold">Express </span>
            The ability is at a medium level. Able to work according to needs
            very well Highly flexible Either fix the problem or start over. and
            always ready to learn and be open to new knowledge.
          </h1>
        </div>
      </div>
    </div>
  );
}
