import Image from "next/image";
import Link from "next/link";

export default function Work({ id, image, name, description, route }) {
  return (
    <div key={id} className="md:inline-block ">
      <Link href={route}>
        <div className="sm:w-[250px] sm:h-[300px] sm:m-auto md:w-[250px] md:h-[350px]   lg:w-[300px] lg:h-[400px] lg:mx-3 sm:px-3 sm:mt-5">
          <div className="border-gray-200  border rounded-lg  shadow-md hover:shadow-xl">
            <div className="flex justify-center">
              <div
                className="p-2 lg:w-[300px]  bg-cover bg-center "
                style={{
                  backgroundImage: `url('${image}')`,
                  height: "200px",
                  width: "200px"
                }}
              />
              {/* <Image
                src={image}
                className="bg-gray-100 w-[100%] h-[100%] "
                width={100}
                height={100}
              /> */}
            </div>
            <div className="px-5 py-2">
              <h1 className="w-full">
                {name}
              </h1>
              <h1 className="text-gray-400">
                {description}
              </h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
