import Link from "next/link";

export default function Footer() {
  return (
    <div className="md:px-56 md:py-10 block   bg-gray-200 text-gray-500">
      <div className="flex justify-between">
        <div>© 2024 Bigy</div>
        <div className="hidden lg:flex">
          <Link
            href="/"
            className="text-md font-medium mr-3 hover:text-green-400 hover:border-b-2 hover:border-green-400 hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className="text-md font-medium mx-3 hover:text-green-400  hover:border-b-2 hover:border-green-400 hover:scale-105"
          >
            Portfolio
          </Link>
          <Link
            href="/contract"
            className="text-md font-medium mx-3 hover:text-green-400  hover:border-b-2 hover:border-green-400 hover:scale-105"
          >
            Contract
          </Link>
        </div>
      </div>
    </div>
  );
}
