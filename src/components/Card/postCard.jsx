"use client";
import Image from "next/image";
import { IoCalendarOutline } from "react-icons/io5";
import { IoLogoUsd } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import Link from "next/link";

export default function PostCard({post}) {
    const {id, category, title, featuredImageLink, muddat, mukofot, location} = post;
    const truncateTitle = (str, maxLength) => {
      return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
    };

  return (
    <Link href={`imkoniyatlar/${title}`}>
      <div
        className="w-full p-4 border rounded-3xl flex border-[#eeeeee] items-center gap-8 hover:border-[#FFD452] post-card transition duration-300 ease-in-out font-outfit"        
      >
        <div className="min-w-[324px] h-[198px] relative">
          <Image
            src={featuredImageLink}
            alt="Belgiyida Oqigin Toy Bola"
            fill
            sizes="100%"
            style={{ objectFit: "cover"}}
            className="object-top rounded-2xl border border-[#eeeeee] hover:border-[#FFD452]"
          />
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold">
          {truncateTitle(title, 140)}
          </h3>
          <div className="font-outfit flex items-center gap-6 pt-8">
            <div className="flex justify-start items-center gap-3">
              <span className="bg-[#FFEDB6] w-10 h-10 rounded-full flex justify-center items-center">
                <IoCalendarOutline size={22} />
              </span>
              <span>{muddat}</span>
            </div>

            <div className="flex justify-start items-center gap-3">
              <span className="bg-[#FFCBC4] w-10 h-10 rounded-full flex justify-center items-center">
                <IoLogoUsd size={22} />
              </span>
              <span>{mukofot}</span>
            </div>

            <div className="flex justify-start items-center gap-3">
              <span className="bg-[#C7CCFF] w-10 h-10 rounded-full flex justify-center items-center">
                <GrLocation size={22} />
              </span>
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
