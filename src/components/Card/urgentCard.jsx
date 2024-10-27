import Image from "next/image"
import Link from "next/link"
import { IoTimeOutline } from "react-icons/io5"
import { GrLocation } from "react-icons/gr"

export default function UrgentCard({ post }) {
  const { id, title, featuredImageLink, muddat, mukofot, location, category } = post

  const truncateTitle = (str, maxLength) => {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str
  }

  return (
    <Link href={`imkoniyatlar/${title}`}>
      <div className="group w-[380px] h-[480px] rounded-[20px] border border-[#eeeeee] bg-white p-4 hover:border-primary transition duration-300 ease-in-out cursor-pointer">
        <div className="relative w-full h-[232px]">
          <Image src={featuredImageLink} alt="Belgiyida Oqigin Toy Bola" fill sizes="100%" style={{ objectFit: "cover" }} className="object-top rounded-[12px]" />
          <div className="absolute flex justify-center items-center font-outfit p-2 gap-2 bg-[#464646] text-white rounded-e-lg top-3 group-hover:bg-primary group-hover:text-dark transition-colors duration-300 ease-in-out">
            <IoTimeOutline />
            <span className="text-[14px]">{muddat}</span>
          </div>
        </div>
        <div className="pt-4">
          <div className="flex justify-start items-center gap-2 font-outfit text-neutral-grey">
            <GrLocation size={24} color="#131C1E" />
            {location}
          </div>
          <h3 className="font-medium text-xl pt-4 font-outfit">{truncateTitle(title, 180)}</h3>
        </div>
      </div>
    </Link>
  )
}
