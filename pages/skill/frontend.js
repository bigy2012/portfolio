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
            <span className="font-bold">HTML </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis ab culpa fuga ipsam facere vitae ad, deleniti nostrum
            doloremque sed, porro totam, inventore harum assumenda impedit?
            Facere, nesciunt earum!
          </h1>
          <h1 className="mt-5">
            <span className="font-bold">CSS </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis ab culpa fuga ipsam facere vitae ad, deleniti nostrum
            doloremque sed, porro totam, inventore harum assumenda impedit?
            Facere, nesciunt earum!
          </h1>
          <h1 className="mt-5">
            <span className="font-bold">Javascript </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis ab culpa fuga ipsam facere vitae ad, deleniti nostrum
            doloremque sed, porro totam, inventore harum assumenda impedit?
            Facere, nesciunt earum!
          </h1>
        </div>
      </div>

      <div className="bg-white shadow-lg sm:px-5 lg:px-56 py-5">
        <div className="sm:px-5 lg:px-56 lg:py-5  text-end">
          <h1 className="text-2xl font-bold">My framework & library skill</h1>
          <h1 className="mt-5">
            <span className="font-bold">Next js </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis ab culpa fuga ipsam facere vitae ad, deleniti nostrum
            doloremque sed, porro totam, inventore harum assumenda impedit?
            Facere, nesciunt earum!
          </h1>
          <h1 className="mt-5">
            <span className="font-bold">Vue js </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis ab culpa fuga ipsam facere vitae ad, deleniti nostrum
            doloremque sed, porro totam, inventore harum assumenda impedit?
            Facere, nesciunt earum!
          </h1>
          <h1 className="mt-5">
            <span className="font-bold">Bootstrap 4-5 </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis ab culpa fuga ipsam facere vitae ad, deleniti nostrum
            doloremque sed, porro totam, inventore harum assumenda impedit?
            Facere, nesciunt earum!
          </h1>
          <h1 className="mt-5">
            <span className="font-bold">Tailwind css </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis ab culpa fuga ipsam facere vitae ad, deleniti nostrum
            doloremque sed, porro totam, inventore harum assumenda impedit?
            Facere, nesciunt earum!
          </h1>
        </div>
      </div>
    </div>
  );
}
