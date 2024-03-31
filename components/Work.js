import Image from "next/image";
import Link from "next/link";

export default function Work({ id, image, name, description, route }) {
  return (
    <div key={id}>
      <Link href={route}>
        <div className="w-[300px] h-[300px] mx-3">
          <div className="border-gray-200 border rounded-lg  shadow-md hover:shadow-xl">
            <div className="p-2">
              <Image
                src={image}
                className="bg-gray-100 w-full"
                width={150}
                height={150}
              />
            </div>
            <div className="px-5 py-2">
              <h1 className="w-full">{name}</h1>
              <h1 className="text-gray-400">{description}</h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
