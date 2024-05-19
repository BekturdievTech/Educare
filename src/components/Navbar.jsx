import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap py-5 container">
      <Link href={"/"}>
        <div className="flex items-center flex-shrink-0 text-[#131C1E]">
          <Image
            src={"/logo.png"}
            alt="educare logo"
            width={46}
            height={46}
            unoptimized
          />
          <span className="font-semibold text-2xl pl-[10px]">Educare</span>
        </div>
      </Link>
      <ul>
        <Link href={"/"} className=" font-outfit">
          Login
        </Link>
      </ul>
    </nav>
  );
}
