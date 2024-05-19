import Image from "next/image";
import Link from "next/link";
import { IoTimeOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";

export default function UrgentCard({ post }) {
  const { id, title, featuredImageLink, muddat, mukofot, location } = post;

  const truncateTitle = (str, maxLength) => {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  };

  return (
    <div className="w-[380px] h-[495px] rounded-[20px] border border-[#eeeeee] bg-white p-4 hover:border-primary post-card transition duration-300 ease-in-out">
      <div className="relative w-[346px] h-[232px]">
        <Image
          src={featuredImageLink}
          alt="Belgiyida Oqigin Toy Bola"
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
          className="object-top rounded-2xl"
        />
        <div className="absolute flex justify-center items-center font-outfit p-2 gap-2 bg-primary rounded-e-lg top-3">
          <IoTimeOutline />
          <span className="text-[14px]">{muddat}</span>
        </div>
      </div>
      <div className=" pt-2">
        <div className="flex justify-start items-center gap-2 font-outfit text-neutral-grey">
          <GrLocation size={24} color="#131C1E" />
          {location}
        </div>

        <h3 className="font-bold  text-lg pt-3 ">
          {truncateTitle(title, 180)}
        </h3>
        <Link href={"/"}>
          <button className="inline-flex items-center gap-2 p-3 border border-[#eeeeee] rounded-[10px] mt-3 urgent-btn">
            Batafsil
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 12.5L4 12.5"
                stroke="#131C1E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 17.5C15 17.5 20 13.8176 20 12.5C20 11.1824 15 7.5 15 7.5"
                stroke="#131C1E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
