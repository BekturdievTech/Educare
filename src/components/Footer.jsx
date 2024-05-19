import { socials } from "@/data/constants";
import Image from "next/image";
import Link from "next/link";
import { GrLocation } from "react-icons/gr";
import { FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="bg-dark py-24 text-white">
      <div className="container grid grid-cols-4 justify-between items-start footer-grid">
        <div className=" w-[300px]">
          <div className="flex items-center flex-shrink-0">
            <Image
              src={"/logo-light.png"}
              alt="educare logo"
              width={46}
              height={46}
              unoptimized
            />
            <span className="font-semibold text-2xl pl-[10px]">Educare</span>
          </div>
          <p className="font-outfit py-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.
          </p>
          <div className="flex justify-start gap-4 items-center">
            {socials.map((media, index) => (
              <Link
                href={media.link}
                key={index}
                className="social-link w-10 h-10 rounded-xl bg-[#1a2224] border-[#444444] border flex justify-center items-center transition duration-500 ease-in-out"
              >
                {media.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col h-full text-neutral-grey-light gap-3 font-outfit">
          <h4 className="text-white text-xl font-medium">Explore</h4>
          <Link href={""}>About us</Link>
          <Link href={""}>Contct us</Link>
          <Link href={""}>Events</Link>
          <Link href={""}>FAQ Question</Link>
          <Link href={""}>Privacy Policy</Link>
        </div>

        <div className="flex flex-col h-full text-neutral-grey-light gap-3 font-outfit">
          <h4 className="text-white text-xl font-medium">Uselink</h4>
          <Link href={""}>Almashinuv</Link>
          <Link href={""}>Amaliyotlar</Link>
          <Link href={""}>Grantlar</Link>
          <Link href={""}>Konferensiyalar</Link>
          <Link href={""}>Stipendiyalar</Link>
          <Link href={""}>Tanlovlar</Link>
        </div>

        <div className="flex flex-col gap-3 font-outfit text-neutral-grey-light">
          <h4 className="text-white text-xl font-medium">Contact Info</h4>
          <div className="flex gap-2 items-center">
            <div>
              <GrLocation size={24} color="#B6EC3D" />
            </div>
            <p>275 Quadra Street Victoria Road, New York</p>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <FaPhone size={24} color="#B6EC3D" />
            </div>
            <p>+998 90 438 22 42 <br /> +998 90 438 22 42</p>
          </div>
          <div className="flex items-center">
            <div>
              <TbMailFilled size={24} color="#B6EC3D" />
            </div>
            <p className="ml-2">hello@educare.uz</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
